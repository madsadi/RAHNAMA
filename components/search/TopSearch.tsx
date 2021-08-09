import React, {useCallback, useEffect, useRef} from "react";
import Box from "../utility/Box";
import styled from "styled-components";
import {background, color, BackgroundProps, ColorProps, FlexDirectionProps} from "styled-system";
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

const Pill = styled.div`
    border: 1px solid white;
    border-radius: 12px;
    padding: 3px 10.5px;
    height: 28px;
    padding:3px 10px;
    color: white;
    margin-top: 65px;
    font-size: 15px;
    cursor: pointer;
    &:nth-last-child(n){
    margin-left: 5px;
    }
`;
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
            flexDirection={'column'}
            bg={'lipstick'}
            backgroundImage={"url('/bg/Path 135.svg')"}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"300px 300px"}
            height={'365px'}
            ref={topSearchRef}
            justifyContent={'center'}
            alignItems={'center'}
            backgroundPosition={'-8px 56px'}
        >
                <Box px={15} display={'flex'} width={'100%'} height={'50px'}>
                    <SearchInput values={['استخدام','آپارتمان', 'خودروسواری']}/>
                </Box>
                <Box maxWidth={'700px'} px={15} display={'flex'}  justifyContent={'flex-end'} width={'100%'} height={'50px'}>
                    {['استخدام','آپارتمان', 'خودروسواری'].map(pill=> {
                        return <Pill>{pill}</Pill>
                    })}
                </Box>

        </SearchArea>
    )
}