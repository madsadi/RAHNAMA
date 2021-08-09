import React, {useCallback, useEffect, useRef} from "react";
import Box from "../utility/Box";
import styled from "styled-components";
import {background,color, BackgroundProps, ColorProps} from "styled-system";
import SearchInput from "./SearchInput";
import _ from 'lodash'
import {useDispatch} from "react-redux";
import {showOnHeader} from "../../store/showSearchOnHeader";

interface Props{

}

const SearchArea=styled(Box)<BackgroundProps| ColorProps>`
    ${background}
    ${color}
`
export const TopSearch: React.FC<Props> = (props)=>{

    const dispatch=useDispatch();

    const topSearchRef=useRef<HTMLDivElement|null>(null);

    function _showSearchOnHeader(e:any){
        if (topSearchRef.current !==null && window.scrollY> topSearchRef.current?.scrollHeight){
            dispatch(showOnHeader(true))
        }else{
            dispatch(showOnHeader(false))
        }
    }

    const showSearchOnHeader=useCallback(_.throttle(_showSearchOnHeader,100),[])

    useEffect(()=>{
        window.addEventListener('scroll', showSearchOnHeader);

        return ()=>{
            window.removeEventListener('scroll', showSearchOnHeader);
        }

    },[])

    return (
        <SearchArea
            display={'flex'}
            bg={'lipstick'}
            backgroundImage={"url('/bg/Path 135.svg')"}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"300px 300px"}
            height={'365px'}
            ref={topSearchRef}
            justifyContent={'space-between'}
            alignItems={'center'}
            backgroundPosition={'-8px 56px'}
        >
                <Box px={15} display={'flex'} width={'100%'} height={'50px'}>
                    <SearchInput values={['استخدام','آپارتمان', 'خودروسواری']}/>
                </Box>

        </SearchArea>
    )
}