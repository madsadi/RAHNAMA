import React, {ReactChildren} from "react";
import styled from "styled-components";
import Location from '../../public/icons/Location.svg';
import {Filter, Post} from "../../types";
import FilterRow from "./Meta";
import moment from "jalali-moment";
import { uniqueArrayByProperty } from "../../utils/helper";
import Image from 'next/image'


const Card= styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    padding: 12px;
    border-radius: 15px;
     direction:rtl;
    height:100%;
`;

const ImageData = styled.div `
    position: relative;
    height: 127px;
    width: 127px;
    overflow: hidden;
    border-radius: 15px;
    margin: auto;
    object-fit:contain;
    &:after{
        content:'';
        width:127px;
        height:127px;
        z-index:1000;
        background: linear-gradient(to bottom, rgba(71, 69, 70, 0) 8%, #474546 74%);

    }
    & img{
     object-fit: content;
    height: 100%;
    border-radius: 15px;
    }
`;

const BadgeIcon = styled.img<any>`
    position: absolute;
    top: 0;
    right: 10%;
    width: 20%;
`;


const Label = styled.div `
    position: absolute;
    bottom: 5%;
    right: 5%;
    font-size: 12px;
    display:flex;
`;

const Where = styled.label`
    color: white;
    margin-right: 5px;
`;

const Content = styled.div `
    margin-right: 17px;
    flex-basis: 60%;
    flex: 1;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;

const Header = styled.div`
    font-size: 15px;
    color: #474546;
`;

const Descript = styled.div `
    color: #db143d;
    font-size: 11px;
    margin-top: 13px;
`
function CardBox(props:{post:Post}){

    const icon={
        color: "white",
        width: "12px"
    }
    moment.locale("fa");
    const filters= uniqueArrayByProperty(props.post.filters,((f:Filter)=> {
        if (f.label){
            return f.label
        }
        return false
    }))

    let badge=props.post.badges?.includes('realState') ? '/icons/agency_tag.svg'
    : props.post.badges?.includes('carDealership') ? '/icons/car_tag.svg'
     : props.post.badges?.includes('newspaper') ? '/icons/newspaper_tag.svg':null;
    console.log(props.post.badges)

    return (

            <Card>
                <ImageData className={'dard'}>
                    {badge && <BadgeIcon src={badge} alt=""/>}
                    <Image width={'127px'} height={'127px'} src={props.post.pictures?.thumbnail ?props.post.pictures?.thumbnail.thumbnail :'/null.svg'} alt=""/>
                    <Label>
                        <Location style={icon}/>
                        <Where>{props.post.location.cityString}</Where>
                    </Label>
                </ImageData>
                <Content className="content">
                    <Header className="header">{props.post.name}</Header>
                    <div>
                        {
                            Object.keys(filters).map((f:string,i)=><FilterRow key={i} label={f} value={filters[f].options[0].value} />)}
                        <Descript className="description">
                            {moment(parseInt(props.post.releasedAt)).fromNow()}
                        </Descript>
                    </div>
                </Content>
            </Card>

    )
}

export default CardBox;