import React from "react";
import Search from "../../public/icons/search yellow.svg";
import Select from "../../public/icons/Select.svg";
import styled from "styled-components";

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

const Form = styled.div`
    position: relative;
    
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
    margin: 10px 0;
    display:flex;
    position: relative;
    padding-bottom:11px;
    
    &::after {
    content: '';
    display: block;
    margin-top: 10px;
    height: 1px;
    background:#d1d1d1;
    opacity: 76%;
    position:absolute;
    bottom:0;
    width:100%;
    }
`

const Div = styled.div`
    overflow-y: scroll;
    position: relative; 
    direction: ltr;
`

const Input = styled.div`
    position: relative;
    
`

function Neighborhood(){
    const icon = {
        position: "absolute",
        left: "5px",
        top: "50%",
        transform: "translate(0,-50%)",
        cursor: "pointer"
    }

    const check = {
        marginRight: "auto",
        cursor: "pointer"
    }

        return(
        <Form>
            <Input>
                <InputText type="text" placeholder="جستجو محله"/>
                <Search style={icon}/>
            </Input>
            <Div>
                <List>
                    <Li>
                        صادقیه
                        <Select style={check}/>
                    </Li>
                    <Li>
                        صادقیه
                        <Select style={check}/>
                    </Li>
                    <Li>
                        صادقیه
                        <Select style={check}/>
                    </Li>
                    <Li>
                        صادقیه
                        <Select style={check}/>
                    </Li>
                    <Li>
                        صادقیه
                        <Select style={check}/>
                    </Li>
                    <Li>
                        صادقیه
                        <Select style={check}/>
                    </Li>
                    <Li>
                        صادقیه
                        <Select style={check}/>
                    </Li>
                    <Li>
                        صادقیه
                        <Select style={check}/>
                    </Li>
                    <Li>
                        صادقیه
                        <Select style={check}/>
                    </Li>
                    <Li>
                        صادقیه
                        <Select style={check}/>
                    </Li>
                    <Li>
                        صادقیه
                        <Select style={check}/>
                    </Li>
                    <Li>
                        صادقیه
                        <Select style={check}/>
                    </Li>
                    <Li>
                        صادقیه
                        <Select style={check}/>
                    </Li>
                </List>
            </Div>
        </Form>
    )
}

export default Neighborhood;