import React from "react";
import {Links} from "./Links";
import { t } from "../../locales";
import styled from "styled-components";
import {
    border,
    BorderProps,
    color, ColorProps,
    flexbox,
    FlexboxProps,
    layout,
    LayoutProps,
    space,
    SpaceProps,
    typography,
    TypographyProps
} from "styled-system";
import Container from "../utility/Container";
import Box from "../utility/Box";

interface Props{

}

const Bar=styled(Box)<ColorProps>`
${color}
`

const FlexBox=styled.div<FlexboxProps| LayoutProps>`
    ${layout}
    ${flexbox}
`

const Typo=styled.div<TypographyProps | SpaceProps>`
    ${typography}
    ${space}
`

const NavBarBox=styled(Box)<BorderProps>`
    ${border}
`

export const AppBar: React.FC<Props> = (props)=>{
    // @ts-ignore
    return(
        <Bar
              display={'flex'}
              flex={'1 1 100%'}
              bg={'lipstick'}
              color={'white'}
              height={'90px'}
          >
                <Container className={'container'}  maxWidth={'container'}>
                    <NavBarBox
                        display={"flex"}
                        pt={"24px"}
                        pb={'13px'}
                        justifyContent={"space-between"}
                        borderBottom={'1px solid white'}
                    >
                        <Links/>
                        
                        <FlexBox flex={'1 1 190px'}  color={"white"} display={'flex'} alignItems={'center'} justifyContent={'flex-end'}>
                            <Typo  fontSize={20} fontWeight={300} mr={10}>{t('text-logo')}</Typo>
                            <img width={30} height={30} src="logo.svg" alt="niazmandiha"/>
                        </FlexBox>
                    </NavBarBox>
                </Container>
        </Bar>
    )
}