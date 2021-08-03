import React from 'react';
import styled from "styled-components";
import Search from '../../public/icons/iconly_light_outline_search.svg';
import Cross from '../../public/icons/group_1370.svg';
import Pin from '../../public/icons/push_pin.svg';
import Delete from '../../public/icons/iconly_curved_close_square.svg';
import Mutepin from '../../public/icons/push_pin_mute.svg';
import Dropdown from '../../public/icons/iconly_curved_arrow_left_circle.svg';
import {layout} from "styled-system";


const Form = styled.form `
    position: relative;
    margin: auto;
    display: flex;
`;

const Input = styled.input `
    width: 100%;
    height: 40px;
    border-radius: 15px;
    border: 1px solid white;
    color: #acacac;
    padding-right: 32px;
    font-size: 15px;
    direction: rtl;
    z-index: 2;
    
    &:focus {
    outline-style: none;
    }

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
            
            &::after{
            content: '';
            display: block;
            background-image: linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,1));
            height: 100px;
            left: 0;
            width: 100%;
            bottom: 0;
            position: absolute;
            } 
`;

const Li = styled.li`
    display: flex;
    position: relative;
    font-family: Dana-Medium;
    color: #474546;
    font-size: 16px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Span = styled.span`
    opacity: 58%;
    font-size: 15px;
`;

const Category = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: space-between;
    padding: 50px;
`;

const Pill = styled.div`
    border: 1px solid white;
    border-radius: 12px;
    padding: 6px 6px;
    color: white;
    font-size: 11px;
    cursor: pointer;
    
    &:nth-last-child(n){
    margin-left: 5px;
    }
`;

const Brows = styled.div`
    display: flex;
    background-color: #d1d1d1;
    border: 1px solid current;
    border-radius: 7px;
    opacity: 68%;
    padding: 3px 15px;
    position: relative;
    font-size: 11px;
    cursor: pointer;
    width: 110px;
`

const Content = styled.div(props=>({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginRight: '30px',
}),layout)



class SearchBox extends React.Component {
    state = { isToggle: false, width:'auto' };

    drop = (e) => {
        this.setState({isToggle: !this.state.isToggle });
    }

    scale () {
        this.setState((e)=>{
            return { width:e.width ==='100%'? '110px':'100%' }
        })
    }

    render() {

        const searchicon={
            position: "absolute",
            right: "50%",
            top: "50%",
            transform: "translate(50%,-50%)",
            height: "20px"
        }

        const cross={
            display: this.state.isToggle ? 'block':'none',
            position: "absolute",
            top: "50%",
            transform: "translate(0,-50%)",
            left: "16%",
            cursor: "pointer",
            zIndex: "2"
        }

        const del = {
            position: "absolute",
            top: "50%",
            transform: "translate(0,-50%)",
            left: "0",
            cursor: "pointer"
        }

        const pin = {
            position: "absolute",
            top: "50%",
            transform: "translate(0,-50%)",
            marginLeft: "15px",
        }

        const pin1 = {
            position: "absolute",
            top: "50%",
            transform: "translate(0,-50%)",
            marginLeft: "22px",
            width: "2%"
        }

        const dropdown={
            position: "absolute",
            top: "50%",
            transform: "translate(0,-50%)",
            marginRight: "10px",
            backgroundColor: "#474546",
            borderRadius: "6px",
            left: "10px",
        }

        return(
            <div style={{margin: "auto"}}>
                <Form>
                    <Input onChange={this.drop} style={{ boxShadow: this.state.isToggle ? '2px 7px 60px grey':'none' }} type="text" placeholder="جستجو"/>
                    <Cross style={cross}/>
                    <Button>
                        <Search style={searchicon}/>
                    </Button>
                    <Drop style={{ display: this.state.isToggle ? 'block':'none' }}>
                        <ul style={{listStyleType: "none"}}>
                            <Li>
                                <Pin style={pin}/>
                                <Content>
                                    <span>آپارتمان</span>
                                    <Span>آپارتمان</Span>
                                </Content>
                                <Delete style={del}/>
                            </Li>
                            <Li>
                                <Mutepin style={pin1}/>
                                <Content width={this.state.width}>
                                    <span>آپارتمان</span>
                                    <Span>آپارتمان</Span>
                                    <Brows onClick={this.scale.bind(this)}>
                                        فیلتر آپارتمان
                                        <Dropdown style={dropdown}/>

                                    </Brows>
                                </Content>
                                <Delete style={del}/>
                            </Li>
                            <Li>
                                <Mutepin style={pin1}/>
                                <Content>
                                    <span>آپارتمان</span>
                                    <Span>آپارتمان</Span>
                                </Content>
                                <Delete style={del}/>
                            </Li>
                            <Li>
                                <Mutepin style={pin1}/>
                                <Content>
                                    <span>آپارتمان</span>
                                    <Span>آپارتمان</Span>
                                </Content>
                                <Delete style={del}/>
                            </Li>
                            <Li>
                                <Mutepin style={pin1}/>
                                <Content>
                                    <span>آپارتمان</span>
                                    <Span>آپارتمان</Span>
                                </Content>
                                <Delete style={del}/>
                            </Li>
                            <Li>
                                <Mutepin style={pin1}/>
                                <Content>
                                    <span>آپارتمان</span>
                                    <Span>آپارتمان</Span>
                                </Content>
                                <Delete style={del}/>
                            </Li>
                            <Li>
                                <Mutepin style={pin1}/>
                                <Content>
                                    <span>آپارتمان</span>
                                    <Span>آپارتمان</Span>
                                </Content>
                                <Delete style={del}/>
                            </Li>
                        </ul>
                    </Drop>
                </Form>
                <Category>
            <Pill>خودرو سواری</Pill>
            <Pill>آپارتمان</Pill>
            <Pill>استخدام</Pill>
            <Pill>خودرو سواری</Pill>
            <Pill>آپارتمان</Pill>
            <Pill>استخدام</Pill>
            <Pill>خودرو سواری</Pill>
            <Pill>آپارتمان</Pill>
            <Pill>استخدام</Pill>
        </Category>
            </div>
    )
    }
}

export default SearchBox;