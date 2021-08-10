import React from "react";
import styled from "styled-components";
import Location from '../../public/icons/Location.svg';


const Contain = styled.div`
    direction:rtl;
`;

const Card= styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    padding: 12px;
    border-radius: 15px;
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

const Meta = styled.div`
    display: flex;
    flex-direction: row;
`;

const Descript = styled.div `
    color: #db143d;
    font-size: 11px;
    margin: 5px 0;
`
function CardBox () {

    const icon={
        color: "white",
        width: "12px"
    }

    return (
        <Contain className="card">
            <Card>
                <Image>
                    <RedIcon src={'/agency_tag_2.png'} alt=""/>
                    <Img src={'/hi.jpg'} alt=""/>
                    <Label>
                        <Location style={icon}/>
                        <Icon>چهار محال و بختیاری</Icon>
                    </Label>
                </Image>
                <Content className="content">
                    <Header className="header">پژو 206 تیپ 5 مدل 1397</Header>
                    <Meta className="meta">
                        <div>کارکرد:</div>
                        <div>200,000</div>
                        <div>کیلومتر</div>
                    </Meta>
                    <Meta className="meta">
                        <div>قیمت:</div>
                        <div>157,000,000</div>
                        <div>تومان</div>
                    </Meta>
                    <Descript className="description">
                        دقایقی پیش
                    </Descript>
                </Content>
            </Card>
        </Contain>
    )
}

export default CardBox;