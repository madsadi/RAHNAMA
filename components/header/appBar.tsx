import React from "react";
import {Links} from "./Links";
import Box from "../utility/Box";
import { t } from "../../locales";

interface Props{

}
export const AppBar: React.FC<Props> = (props)=>{
    // @ts-ignore
    return(
        <Box
              display={'flex'}
              flex={'1 1 100%'}
              bg={'lipstick'}
              color={'white'}
              height={'90px'}
          >
                <Box className={'container'}  maxWidth={'container'}>
                    <Box
                        display={"flex"}
                        pt={"24px"}
                        pb={'13px'}
                        justifyContent={"space-between"}
                        borderBottom={'1px solid white'}
                    >
                        <Links/>
                        
                        <Box flex={'1 1 190px'}  color={"white"} display={'flex'} alignItems={'center'} justifyContent={'flex-end'}>
                            <Box  fontSize={20} fontWeight={300} mr={10}>{t('text-logo')}</Box>
                            <img width={30} height={30} src="logo.svg" alt="niazmandiha"/>
                        </Box>
                    </Box>
                </Box>
        </Box>
    )
}