import React, {useState} from "react";
import Search from "../../public/icons/search yellow.svg";
import styled from "styled-components";
import {layout, DisplayProps, SpaceProps} from "styled-system";

const InputText = styled.input `
    width: 100%;
    height: 51px;
    border-radius: 19px;
    border: 1px solid #1c474546;
    color: #acacac;
    padding-right: 32px;
    font-size: 15px;
    direction: rtl;
    z-index: 2;
    
    &:focus {
    outline-style: none;
    }
`

const Input = styled.div`
    position: relative;
    
`


const CityF = styled.div<DisplayProps | SpaceProps>`
    position: relative;
    ${layout}
`

const List = styled.ul`
    padding-right:50px; 
    padding-left:20px; 
    list-style-type: none;
    direction:rtl;
    margin-top: 18px;
    height: 270px;
`

const Li = styled.li `
    cursor: pointer;
    margin: 10px 0;
    
    &::after {
    content: '';
    display: block;
    margin-top: 10px;
    height: 1px;
    background:#d1d1d1;
    opacity: 76%;
    }
`

const Div = styled.div`
    overflow-y: scroll;
    position: relative; 
    direction: ltr;
`


function CityForm () {
    const icon = {
        position: "absolute",
        left: "5px",
        top: "50%",
        transform: "translate(0,-50%)",
        cursor: "pointer"
    }

    const [show,setShow]=useState(true);


    return(
        <CityF display={show ?'block':'none'}>
            <Input>
                <InputText type="text" placeholder="جستجو شهر"/>
                <Search style={icon}/>
            </Input>
            <Div>
                <List>
                    <Li onClick={()=>setShow(!show)}>تهران</Li>
                    <Li>شیراز</Li>
                    <Li>اصفهان</Li>
                    <Li>تهران</Li>
                    <Li>شیراز</Li>
                    <Li>اصفهان</Li>
                    <Li>تهران</Li>
                    <Li>شیراز</Li>
                    <Li>اصفهان</Li>
                    <Li>تهران</Li>
                    <Li>شیراز</Li>
                    <Li>اصفهان</Li>
                    <Li>تهران</Li>
                    <Li>شیراز</Li>
                    <Li>اصفهان</Li>
                    <Li>تهران</Li>
                    <Li>شیراز</Li>
                    <Li>اصفهان</Li>
                </List>
            </Div>
        </CityF>
    )
}

export default CityForm;