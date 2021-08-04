import React, {useState} from "react";
import {SearchItem} from '../../types'
import Mutepin from "../../public/icons/push_pin_mute.svg";
import Delete from "../../public/icons/iconly_curved_close_square.svg";
import styled from "styled-components";
import {layout, space, SpaceProps} from "styled-system";
import Dropdown from "../../public/icons/iconly_curved_arrow_left_circle.svg";
import Box from "../utility/Box";

const Pin=styled(Mutepin)`
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
    marginLeft: 22px;
    width: 2;
`

const UnPin=styled(Mutepin)`
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
    marginLeft: 22px;
    width: 2;
`

const Content = styled.div(props=>({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginRight: '30px',
}),layout);

const SpanCategory = styled.span`
    opacity: 58%;
    font-size: 15px;
`;
const DeleteIcon=styled(Delete)({

    position: "absolute",
    top: '50%',
    transform: "translate(0,-50%)",
    left: "0",
    cursor: "pointer"
})

const DropDownIcon=styled(Dropdown)({

    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    marginRight: "10px",
    backgroundColor: "#474546",
    borderRadius: "6px",
    left: "0"
})

const Brows = styled.div<{onclick:Function} | SpaceProps>`
    background-color: #d1d1d1;
    border: 1px solid current;
    border-radius: 7px;
    opacity: 68%;
    padding: 10px 15px;
    position: relative;
    font-size: 11px;
    cursor: pointer;
    width: auto;
    ${space}
`

const Option = styled.div`
    padding: 4px 6px;
    background-color: #474546;
    color: white;
    border: 1px solid current;
    border-radius: 7px;
    opacity: 68%;
    margin: 5px;
`
const SearchItem:React.FC<SearchItem>=(props)=>{

    const [width, setWidth]=useState(false)

    function scale(){
        setWidth(width=>!width)
    }

    return  (<li>
                <Pin/>
                <Content>
                    <span>{props.label}</span>
                    <SpanCategory>{props.category}</SpanCategory>
                    {
                        props.filterName &&
                            <Brows onClick={scale} mt={width ? '10px':'0'}>
                                <div style={{display: "flex",position: "relative"}}>
                                    فیلتر آپارتمان
                                    <DropDownIcon/>
                                </div>
                                <Box flexWrap={'wrap'} display={width? 'flex':'none'}>
                                    {
                                        props.filterItems?.map((filter)=>{
                                            // @ts-ignore
                                            return   <Option>{filter.text}</Option>
                                        })
                                    }

                                </Box>
                            </Brows>
                    }
                </Content>
                <Delete />
            </li>)
}

SearchItem.defaultProps={
    pinned:false
}