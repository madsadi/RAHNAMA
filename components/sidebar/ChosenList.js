import React from "react";
import styled from "styled-components";
import Remove from "../../public/icons/remove.svg";
import WhiteRemove from "../../public/icons/white remove.svg";


const Content = styled.div`
    background: #474546;
    width:100%;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding-top: 10px;
`

const Head = styled.div`
    display: flex;
    margin:0px 50px;
    padding-bottom:10px; 
    position:relative;
    
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

const DeleteALl = styled.button`
    border-radius: 12px;
    padding: 1px 14px;
    margin-right: auto;
    border: 1px solid #fcc155;
    color:#fcc155;
    font-size:14px;
    background: transparent;
    cursor:pointer;
`

const Selected = styled.div`
    display: flex;
    margin: 10px 19px;
`

const SelectedCity = styled.div`
    color:#fcc155;
    display:flex;
    margin-left:16px;
    padding-left:10px;
    background: transparent;
    border-radius:12px;
    padding:3px 12px;
    position:relative;

        
    &::after {
    content: '';
    display: block;
    height: 100%;
    background:#FCC155;
    position:absolute;
    left: 0;
    width:2px;
    top:0;
    }
`

const SelectedNeighbor = styled.div`
    background: #FCC155;
    border-radius:12px;
    padding:3px 12px;
    display:flex;
    margin-left:5px;
    margin-bottom:5px;
`

const Confirm = styled.div`
    display:flex;
    margin: 3px 30px 10px 30px;
`

const Total = styled.div`
    margin-right: auto;
    text-align: center;
`

const Approve = styled.div`
    background:#707070;
    color:white;
    padding:6px 20px;
    border-radius:14px;
    cursor: pointer;
`

const Result = styled.div`
    margin-top:8px;
    color:white;
`

const Span = styled.span`
    color:#FCC155;
    font-weight:bolder;
`

const ChosenNeighborhood = styled.div`
    display: flex;
    flex-flow:wrap;
    width:65%;
`

function ChosenList(){
    const icon = {
        marginRight: "5px",
        marginTop: "3px",
        cursor: "pointer"
    }

    return(
        <Content>
            <Head>
                <DeleteALl>
                    حذف همه
                </DeleteALl>
            </Head>
            <Selected>
                <SelectedCity>
                    تهران
                    <Remove style={icon}/>
                </SelectedCity>
                <ChosenNeighborhood>
                    <SelectedNeighbor>
                        انقلاب
                        <WhiteRemove style={icon}/>
                    </SelectedNeighbor>
                    <SelectedNeighbor>
                        انقلاب
                        <WhiteRemove style={icon}/>
                    </SelectedNeighbor>
                    <SelectedNeighbor>
                        انقلاب
                        <WhiteRemove style={icon}/>
                    </SelectedNeighbor>
                    <SelectedNeighbor>
                        انقلاب
                        <WhiteRemove style={icon}/>
                    </SelectedNeighbor>
                    <SelectedNeighbor>
                        انقلاب
                        <WhiteRemove style={icon}/>
                    </SelectedNeighbor>
                    <SelectedNeighbor>
                        انقلاب
                        <WhiteRemove style={icon}/>
                    </SelectedNeighbor>
                    <SelectedNeighbor>
                        انقلاب
                        <WhiteRemove style={icon}/>
                    </SelectedNeighbor>
                    <SelectedNeighbor>
                        انقلاب
                        <WhiteRemove style={icon}/>
                    </SelectedNeighbor>
                </ChosenNeighborhood>
            </Selected>
            <Confirm>
                <Total>
                    <Approve>
                        تایید
                    </Approve>
                    <Result>
                        تعداد <Span>1 شهر</Span> و <Span>2 محله</Span>
                    </Result>
                </Total>
            </Confirm>
        </Content>
    )
}

export default ChosenList;