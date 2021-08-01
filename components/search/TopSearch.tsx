import React from "react";
import Box from "../utility/Box";
import SearchBox from "../searchbox/searchBox";

interface Props{

}
export const TopSearch: React.FC<Props> = (props)=>{
    return (
        <Box
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

                <SearchBox/>
        </Box>
    )
}