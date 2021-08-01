import React, {ButtonHTMLAttributes} from "react";
import styled from 'styled-components'
import {color, layout, flex, flexbox, border, space} from 'styled-system'
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

const ButtonTextLink=styled.span`
    &{ font-size: 15px;
        font-weight:300;
        width: max-content;
        margin-right: 10px
    }
    &:after {
        content:"|";
        margin-left:10px;
    }
 
`

const TextLink=styled('div')<any>({
            fontFamily: 'Dana',
            fontSize: '15px',
            fontWeight: '300',
            textAlign: 'left',
            width:"mex-content",
            flex:"1 1 100px",
            fontStretch: 'extra-expanded'
        },space)

interface Props{

}
export const Links: React.FC<Props> = (props)=>{
    return <Box alignItems={'center'} display={'flex'}  color={'white'} >
               <Button mr={20} flex={"1 1 160px"} display={'flex'} justifyContent={'space-around'} border={'none'} borderRadius={20}  color={'white'}>
                   <ButtonTextLink>
                         {t("wizard.register")}
                   </ButtonTextLink>
                   <img src={'/icons/Iconly-curved-plus.svg'} width={30} height={30}  className={'icon'} alt=""/>
               </Button>


                <TextLink mr={20}>
                    {t('wizard.register')}
                </TextLink>
                <TextLink mr={20}>
                    {t('wizard.register')}
                </TextLink>
                <TextLink mr={20}>
                    {t('wizard.register')}
                </TextLink>
           </Box>
}