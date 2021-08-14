import React from 'react'
import styled from "styled-components";
import Plus from '../../public/icons/Group 1414.svg';
import Show from "./Show";

const ShowButton = styled.button`
    marginRight: auto;
    marginTop: 3px;
    cursor: pointer;
`


const AddTripButton = (props) => {


    return (
        <ShowButton onClick={props.addTrip}>
            <Plus/>
        </ShowButton>
    )
}

export default AddTripButton;