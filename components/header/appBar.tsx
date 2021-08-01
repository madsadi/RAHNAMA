import React from "react";
import {Links} from "./Links";
import Box from "../utility/Box";


interface Props{

}
export const AppBar: React.FC<Props> = (props)=>{
    // @ts-ignore
    return(
        <Box
              bg={'lipstick'}
              color={'white'}
          >
                <Box className={'container'}  maxWidth={'container'}>
                    <Box display={"flex"} py={"35px"} justifyContent={"space-between"} borderBottom={`1px solid`} borderColor={'white'}>
                        <Links/>
                        <Box>
                            here
                        </Box>
                    </Box>
                </Box>
        </Box>
    )
}