import React from "react";
import Box from "../utility/Box";
import SearchBox from "../searchbox/searchBox";
import styled from "styled-components";
import {background,color, BackgroundProps, ColorProps} from "styled-system";
import SearchInput from "./SearchInput";

interface Props{

}

const SearchArea=styled(Box)<BackgroundProps| ColorProps>`
    ${background}
    ${color}
`
export const TopSearch: React.FC<Props> = (props)=>{
    return (
        <SearchArea
            display={'flex'}
            bg={'lipstick'}
            backgroundImage={"url('/bg/Path 135.svg')"}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"300px 300px"}
            height={'365px'}
            justifyContent={'space-between'}
            alignItems={'center'}
            backgroundPosition={'left center'}
        >
                <Box px={15} display={'flex'} width={'100%'}>
                    <SearchInput values={['استخدام','آپارتمان', 'خودروسواری']}/>
                </Box>

        </SearchArea>
    )
}