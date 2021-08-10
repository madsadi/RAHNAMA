import React from "react";
import Selected from "../../public/icons/arrow right.svg";
import styled from "styled-components";

const Span = styled.div `
    display: flex;
    position: relative;
    margin-bottom: 21px;
    padding-bottom: 8px;
    
    &::after {
    content: '';
    display: block;
    height: 1px;
    background:#FCC155;
    position:absolute;
    bottom: 0;
    width:100%;
    }

`

function SelectedCity(){
    const icon = {
        cursor: "pointer",
        marginLeft: "12px"
    }
    return(
        <Span>
            <Selected style={icon}/>
            تهران
        </Span>
    )
}

export default SelectedCity;