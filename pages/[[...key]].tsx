import * as React from "react";
import {AppBar} from "../components/header/appBar";
import Card from "../components/wizard/wizardbox";
import Box from "../components/utility/Box";
import {TopSearch} from "../components/search/TopSearch";
import { GetServerSideProps } from "next";
import {loadAdvertises} from "../requests/homePage";
import InfiniteScroll from "react-infinite-scroll-component";
import {QueryFunctionContext, useInfiniteQuery} from "react-query";
import {useRouter} from "next/router";
import Container from "../components/utility/Container";
import Col from "../components/utility/Card";
import {Post} from "../types";
interface Props {
    posts:[object],
    perPage:number,
    page:number,
    count:number
}

const Home: React.FC<Props> = (props) => {
    const {posts,page,count,perPage}=props;
    const router=useRouter();
    async function fetchPage(context: QueryFunctionContext) {
        let p=context.pageParam ?context.pageParam.page+1 : page+1
        return loadAdvertises({page:p})
    }



    const {
        data,
        fetchNextPage,
        fetchPreviousPage,
        hasNextPage,
        hasPreviousPage,
        isFetchingNextPage,
        isFetchingPreviousPage,
        ...result
    } = useInfiniteQuery(['posts',router.basePath], fetchPage, {
        getNextPageParam: (lastPage, allPages) => {
            console.log(lastPage, allPages,'next page params')
          return lastPage
        },
        initialData: {pageParams:[posts, page, count,perPage],pages:[]}
    })
    console.log(data)

    return(
            <Box display={'flex'} flexDirection={'column'}>
                <AppBar/>
                <TopSearch/>
                <InfiniteScroll
                    next={fetchNextPage}
                    dataLength={count}
                    hasMore={hasNextPage ?? false}
                    loader={'loading...'}
                >
                    <Container>
                        <div className="row">
                            {data?.pages.map(page=>{
                                return page.data.map((post:Post)=>{
                                    return (
                                        <Col>
                                            {post.name}
                                        </Col>
                                    )
                                })
                            })}

                        </div>
                    </Container>

                </InfiniteScroll>

            </Box>
    )
}

export default Home


export const getServerSideProps: GetServerSideProps = async (context) => {
    let agent = context.req.headers['user-agent'];

    const posts=await loadAdvertises({page:1},{agent})

    return {props:{posts:posts?.data,page:posts.page, count:posts.count, perPage:posts.perPage}}
}