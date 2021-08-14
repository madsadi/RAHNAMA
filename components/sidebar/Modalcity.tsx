import React, {useState} from "react";
import styled from "styled-components";
import CityForm from "./CityForm";
import Neighborhood from "./Neighborhood";
import CityF from '../../public/icons/city.svg';
import Close from '../../public/icons/Iconly-Curved-Close Square.svg';
import SelectedCity from "./SelectedCity";
import ChosenList from "./ChosenList";
import {layout, LayoutProps} from "styled-system";



const ModalcityBox = styled.div<LayoutProps>`
  position: fixed; 
  z-index: 1020;
  padding-top: 100px; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  direction: rtl;
  font-size: 16px;
  ${layout}

`

const ModalContent = styled.div`
  background-color:#f5f6fa;
  margin: auto;
  width: 65%;
  height:85%;
  overflow: hidden;
  border-radius:12px;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
`

const Head = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    font-size: 20px;
    margin:15px 30px 20px 30px;
`


const Span = styled.span`
    position: relative;
    top: 5px;
    right: 14px;
`

const Info = styled.div`
    height:50%;
    overflow: hidden;
    margin:0px 50px 0px 50px;

`

function ModalCity () {
    const icon = {
        position: "absolute",
        left: "5px",
        top: "50%",
        transform: "translate(0,-50%)",
        cursor: "pointer"
    }

    const [show,setShow]=useState(true);

    return (
        <ModalcityBox display={show ?'block':'none'}>
            <ModalContent>
                <Head>
                   <CityF/>
                   <Span>شهر و محله</Span>
                   <Close onClick={()=>setShow(!show)} style={icon}/>
               </Head>
                <Info>
                    <SelectedCity/>
                    <CityForm/>
                    <Neighborhood/>
                </Info>
                <ChosenList/>
            </ModalContent>
        </ModalcityBox>
    )
}

export default ModalCity;