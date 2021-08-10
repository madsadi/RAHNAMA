import React, {ReactChildren} from "react";
import styled from "styled-components";
import Location from '../../public/icons/Location.svg';
import {Filter, Post} from "../../types";
import FilterRow from "./Meta";
import moment from "jalali-moment";
import { uniqueArrayByProperty } from "../../utils/helper";




const Card= styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    padding: 12px;
    border-radius: 15px;
     direction:rtl;
    height:100%;
`;

const Image = styled.div `
    position: relative;
    height: 127px;
    width: 127px;
    overflow: hidden;
    border-radius: 15px;
    margin: auto;
`;

const RedIcon = styled.img`
    position: absolute;
    top: 0;
    right: 10%;
    width: 20%;
`;

const Img = styled.img`
    object-fit: content;
    height: 100%;
    border-radius: 15px;
`;

const Label = styled.div `
    position: absolute;
    bottom: 5%;
    right: 5%;
    font-size: 12px;
`;

const Icon = styled.label`
    color: white;
`;

const Content = styled.div `
    margin-right: 17px;
    flex-basis: 60%;
    flex: 1;
`;

const Header = styled.div`
    fontSize: 15px;
    margin-bottom: 32px;
    color: #474546;
`;

const Descript = styled.div `
    color: #db143d;
    font-size: 11px;
    margin: 5px 0;
`
function CardBox(props:{post:Post}){

    const icon={
        color: "white",
        width: "12px"
    }
    moment.locale("fa");
    console.log(uniqueArrayByProperty(props.post.filters,((f:Filter)=>f.label)))
    return (

            <Card>
                <Image>
                    <RedIcon src={'/agency_tag_2.png'} alt=""/>
                    <Img src={'/hi.jpg'} alt=""/>
                    <Label>
                        <Location style={icon}/>

                    </Label>
                </Image>
                <Content className="content">
                    <Header className="header">{props.post.name}</Header>
                        {uniqueArrayByProperty(props.post.filters,((f:Filter)=>f.label))
                            .map((f:Filter)=><FilterRow label={f.label} value={f.options[0].value} />)}
                    <Descript className="description">
                        {moment(parseInt(props.post.releasedAt)).fromNow()}
                    </Descript>
                </Content>
            </Card>

    )
}

export default CardBox;