import React, {useState} from "react";
import styled from "styled-components";
import {display, DisplayProps, layout, shadow, ShadowProps} from "styled-system";
import Search from "../../public/icons/iconly_light_outline_search.svg";

const Form = styled.form `
    position: relative;
    margin: auto;
    display: flex;
    flex: 1 1 100%;
    max-width:800px;
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

const Drop = styled.div <DisplayProps>`
            {
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
            }
            ${display}         
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

const CubeBox=styled.div`
     {
         position: absolute;
         right: 13%;
         z-index: 2;
         top: 8px;
         text-align: right !important;
         direction: rtl;
         animation: spincube ease-in-out infinite 8s;
         -webkit-animation: spincube ease-in-out infinite 8s;
         -moz-animation: spincube ease-in-out infinite 8s;
         -ms-animation: spincube ease-in-out infinite 8s;
         transform-style: preserve-3d;
         transform-origin:50% 50% 50%;
         }
     & div{
         position:absolute;
        width: auto;
        height:40px;
        color:#109393;
        outline: none;
        border: none;
     }
      & .face-1{
        color:#db143d;
        -webkit-transform:translateZ(40px);
        -moz-transform:translateZ(40px);
        -ms-transform:translateZ(40px);
        transform:translateZ(30px);
        -webkit-backface-visibility: hidden;
        }
    
        & .face-2{
            color:#db143d;
            -webkit-transform: rotateX(120deg) translateZ(30px);
            -moz-transform: rotateX(120deg) translateZ(30px);
            -ms-transform: rotateX(120deg) translateZ(30px);
            transform: rotateX(120deg) translateZ(30px);
            -webkit-backface-visibility: hidden;
        }
        & .face-3{
            color:#db143d;
            -webkit-transform:rotateX(240deg)  translateZ(30px);
            -moz-transform:rotateX(240deg)  translateZ(30px);
            -ms-transform:rotateX(240deg)  translateZ(30px);
            transform:rotateX(240deg)  translateZ(30px);
            -webkit-backface-visibility: hidden;
        }
     
    
    ${layout}
`
const SearchIcon=styled(Search)`
        position: "absolute",
        right: "50%",
        top: "50%",
        transform: "translate(50%,-50%)",
        height: "20px"
`

type SearchProps={
    values: string[]
}
const SearchInput: React.FC<SearchProps> = (props)=>{
    const [isToggle, setToggle]=useState(false);
    const [value, setValue]=useState('')


    function drop(){
        setToggle(isToggle=>!isToggle)
    }



    function empty(){
        setValue('')
    }
    const shadow= isToggle ? '2px ,7px ,60px, grey':'none'
    return  (
        <Form >
            <Input value={value} onClick={drop} onChange={drop} boxShadow={{shadow}} type="text" placeholder="جستجو"/>
            <CubeBox>
                {props.values.map((str,index)=>{
                    return <div className={`face-${index+1%4}`}>{str}</div>
                })}
            </CubeBox>
            <Button>
                <SearchIcon />
            </Button>
            <Drop display={isToggle ? 'block':'none' }>
                <ul style={{listStyleType: "none"}}>

                </ul>
            </Drop>
        </Form>
    )
}

export default SearchInput