import React, {useState} from "react";
import styled from "styled-components";
import {shadow, ShadowProps} from "styled-system";

const Form = styled.form `
    position: relative;
    margin: auto;
    display: flex;
`;

const Input = styled.input<HTMLInputElement| ShadowProps>`
    {
        width: 100%;
        height: 40px;
        border-radius: 15px;
        border: 1px solid white;
        color: #acacac;
        padding-right: 32px;
        font-size: 15px;
        direction: rtl;
        z-index: 2;
    }
    
    &:focus {
         outline-style: none;
    }
    ${shadow}
`

const Button = styled.div`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(2px,-50%);
    border-radius: 15px;
    border: 1px solid white;
    background-color: #db143d;
    height: 85%;
    width: 15%;
    color: white;
    cursor: pointer;
    z-index: 2;

`;

const Drop = styled.div `
            position: absolute;
            top: 40px;
            width: 95%;
            height: 469px;
            background-color: white;
            float: center;
            direction: rtl;
            right: 50%;
            transform: translate(50%,0);
            border-bottom-right-radius: 15px;
            border-bottom-left-radius: 15px;
            box-shadow: 6px 7px 9px #57000000;
            padding: 17px;
            padding-top: 40px;
            z-index: 1;
            overflow-y: scroll;
           
`;

const DropLayer=styled.div`
            position:relative;
            height: 469px;
            left:0
            right:0;
            
            &::after{
            content: '';
            display: block;
            background-image: linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,1));
            height: 100px;
            left: 0;
            width: 100%;
            bottom: 469px;
            position: absolute;
            } 
`
type SearchProps={
    values: [string]
}
const SearchInput: React.FC<SearchProps> = (props)=>{
    const [isToggle, setToggle]=useState(false);
    const [value, setValue]=useState('')
    const [width, setWidth]=useState(false)

    function drop(){
        setToggle(isToggle=>!isToggle)
    }

   function scale(){
     setWidth(width=>!width)
    }

    function empty(){
        setValue('')
    }
    const shadow= isToggle ? '2px ,7px ,60px, grey':'none'
    return  (
        <Form>
            <Input value={value} onClick={drop} onChange={drop} boxShadow={{shadow}} type="text" placeholder="جستجو"/>
            <div className="cubespinner">

            </div>
            {props.values}
        </Form>
    )
}

export default SearchInput