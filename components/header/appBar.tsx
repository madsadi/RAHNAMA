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
    LayoutProps, margin, marginLeft, position, PositionProps,
    space,
    SpaceProps,
    typography,
    TypographyProps, ZIndexProps
} from "styled-system";
import Container from "../utility/Container";
import Box from "../utility/Box";
import Image from 'next/image'
import {useSelector} from "react-redux";
import SearchInput from "../search/SearchInput";
import {ImageProps} from "next/dist/client/image";
import theme from "../../utils/theme";

interface Props{

}

const Bar=styled(Box)<ColorProps|PositionProps|ZIndexProps>`
${color}
${position}
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

const Logo=styled('span')`
    margin-left:17px;
    display:flex;
    flex:0 0 33px;
    align-items:center
`

export const AppBar: React.FC<Props> = (props)=>{

    const showOnHeader=useSelector((state:any)=> state.showOnHeader)

    // @ts-ignore

    return(
        <Bar
              display={'flex'}
              flex={'1 1 100%'}
              bg={'lipstick'}
              color={'white'}
              height={'90px'}
              position={'sticky'}
             // @ts-ignore
              zIndex={'sticky'}
              top={0}
          >
                <Container>
                    <NavBarBox
                        display={"flex"}
                        pt={"24px"}
                        pb={'13px'}
                        justifyContent={"space-between"}
                        borderBottom={showOnHeader ? 'none':'1px solid white'}
                    >
                        <Links/>
                        
                        <FlexBox flex={'1 1 245px'}   color={"white"} display={'flex'} alignItems={'center'} justifyContent={'flex-end'}>
                            {showOnHeader ? <SearchInput values={['استخدام','آپارتمان', 'خودروسواری']}/> : <Typo fontSize={20} fontWeight={300} mr={10}>{t('text-logo')}</Typo> }
                            <Logo>
                                <Image  width={33} height={33} src="/logo.svg" alt="niazmandiha"/>
                            </Logo>

                        </FlexBox>
                    </NavBarBox>
                </Container>
        </Bar>
    )
}