import React, {ButtonHTMLAttributes} from "react";
import styled from 'styled-components'
import {
    color,
    layout,
    flex,
    flexbox,
    border,
    space,
    SpaceProps,
    typography,
    TypographyProps,
    FlexboxProps, FlexProps, ColorProps, LayoutProps, BorderProps
} from 'styled-system'
import {t} from '../../locales'
import Box from "../utility/Box";

const Button=styled("button")<any>({
    backdropFilter: 'blur',
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    padding: "8.9px 15.4px 9.9px 16px",
    fontSize: '15px',
    display: 'flex',
    alignItems:'center',
}, color, flex, flexbox, border, space)

const ButtonTextLink=styled.span<any>`
    &{ font-size: 15px;
        font-weight:300;
        font-family: dana;
        margin-right: 5px;
        flex: 1 1 80px;
    }
    &:after {
        content:"|";
        margin-left:10px;
    }
 
`

const TextLink=styled('div')<FlexboxProps|ColorProps|LayoutProps|SpaceProps|BorderProps|TypographyProps >({
            fontFamily: 'dana',
            fontSize: '15px',
            fontWeight: 300,
            fontStretch: 'extra-expanded'
        } ,space, typography, flex, flexbox, layout)

interface Props{

}
export const Links: React.FC<Props> = (props)=>{
    return <Box flex={'3 1'} alignItems={'center'} display={'flex'}  justifyContent={'flex-start'} color={'white'} >
               <Button mr={20} flex={"0 1 160px"} display={'flex'} justifyContent={'space-around'} border={'none'} borderRadius={20}  color={'white'}>
                   <ButtonTextLink flex={'1 1 80px'}>
                         {t("wizard.register")}
                   </ButtonTextLink>
                   <img src={'/icons/Iconly-curved-plus.svg'} width={30} height={30}  className={'icon'} alt=""/>
               </Button>
                <TextLink display={'flex'}  alignItems={'center'} textAlign={[ 'center', 'center', 'left' ]} mr={'30px'}>
                    <ButtonTextLink flex={'1 1 80px'}>
                        {t("menu.profile")}
                    </ButtonTextLink>
                    <img src={'/icons/Iconly_Curved_Profile.svg'} width={24} height={24}  className={'icon'} alt=""/>
                </TextLink>
                <TextLink textAlign={[ 'center', 'center', 'left' ]} mr={'30px'}>
                    {t('menu.magazine')}
                </TextLink>
                <TextLink textAlign={[ 'center', 'center', 'left' ]} mr={'30px'}>
                    {t('menu.hardPaper')}
                </TextLink>
           </Box>
}