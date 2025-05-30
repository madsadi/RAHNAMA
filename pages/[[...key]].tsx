import * as React from "react";
import {AppBar} from "../components/header/appBar";
import CardBox from "../components/wizard/CardBox";
import Box from "../components/utility/Box";
import {TopSearch} from "../components/search/TopSearch";
import { GetServerSideProps } from "next";
import {loadAdvertises} from "../requests/homePage";
import InfiniteScroll from "react-infinite-scroll-component";
import {QueryFunctionContext, useInfiniteQuery} from "react-query";
import {useRouter} from "next/router";
import Container from "../components/utility/Container";
import Col from "../components/utility/Col";
import {Post} from "../types";
import Row from "../components/utility/Row";

import styled from "styled-components";
import {position, PositionProps} from "styled-system";
import SideBar from "../components/sidebar/SideBar";

interface Props {
    posts:[object],
    perPage:number,
    page:number,
    count:number
}

const BoxLayout=styled(Box)<PositionProps>(position)

const Home: React.FC<Props> = (props) => {
    const {posts,page,count,perPage}=props;
    const router=useRouter();


    async function fetchPage(context: QueryFunctionContext) {
        console.log(context.pageParam,'page params')
        let p=context.pageParam ?context.pageParam.page+1 : page+1
        const res=await loadAdvertises({page:p})
        console.log('res',res)
        if (res)
            return res;
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
            console.log(lastPage,'last page')
            if (lastPage){
                const {count, page, perPage}=lastPage;

                if (count-(page*perPage)>0){

                    return lastPage
                }
            }
            console.log('undefined')

          return undefined
        },

        initialData: {pageParams:[posts, page, count,perPage],pages:[]}
    })
    const pages=data?.pages
    const counts= pages ? pages?.[pages?.length-1]?.['page']*pages?.[pages?.length-1]?.['perPage'] :24;
    return(
            <BoxLayout position={'static'}  display={'flex'} flexDirection={'column'}>
                <AppBar/>
                <TopSearch/>
                <SideBar/>
                <InfiniteScroll
                    next={fetchNextPage}
                    hasMore={hasNextPage?? true}
                    dataLength={counts}
                    loader={'loading...'}
                >

                    <Container mt={30}>
                        <Row justifyContent={'space-between'}>
                            {data?.pages.map(page=>{
                                return page?.data.map((post:Post,index:number)=>{
                                    return (
                                        <Col flexGrow={1} flexShrink={1} px={'8px'} pb={'8px'} flexBasis={['50%','33.3333%','25%','25%']} key={index}>
                                            <CardBox post={post}/>
                                        </Col>
                                    )
                                })
                            })}

                        </Row>
                    </Container>

                </InfiniteScroll>

            </BoxLayout>
    )
}

export default Home


export const getServerSideProps: GetServerSideProps = async (context) => {
    let agent = context.req.headers['user-agent'];

    const posts=await loadAdvertises({page:1},{agent})
    if (posts){
        return {props:{posts:posts?.data,page:posts?.page, count:posts?.count, perPage:posts?.perPage}}
    }
   else
       return {props:{posts:[],page:0, count:0, perPage:0}}
}