import React, {ChangeEvent, ChangeEventHandler, useCallback, useEffect, useState} from "react";
import styled from "styled-components";
import {
    color,
    ColorProps,
    display,
    DisplayProps,
    layout,
    LayoutProps,
    shadow,
    ShadowProps,
    space,
    SpaceProps
} from "styled-system";
import Search from "../../public/icons/iconly_light_outline_search.svg";
import SearchItem from "./SearchItem";
import _ from "lodash";
import {query} from "../../utils/request";
import Box from "../utility/Box";
import { UIEvent } from 'react';
import {useDispatch} from "react-redux";
import {pinSearch} from "../../store/search";
import { PinnedSearch } from "../../types";


const Form = styled.form`
    position: relative;
    margin: auto;
    display: flex;
    flex: 1 1 100%;
    max-width:800px;
`;


// @ts-ignore
const FormControl = styled.div({
    display: 'flex',
    flexFlow: 'row wrap',
    width: '100%',
    direction: 'rtl',
    height: '50px',
    background: 'white',
    borderRadius: '19px',
    zIndex: 2,
    backgroundColor: (props: { theme: any }) => props.theme.colors.paleGrey,
    overflow: "hidden"
})


const Input = styled.input<HTMLInputElement | ShadowProps>`
    {
        flex:1 1;
        border-radius: 15px;
        border: 1px solid white;
        color: #acacac;
        padding-right: 32px;
        font-size: 15px;
        direction: rtl;
        background-color: ${props => props.theme.colors.paleGrey};
        border:none;
    }
    
    &:focus {
         outline-style: none;
    }
    ${shadow}
`

const Button = styled.div<ColorProps>`
  flex: 1 1;
  max-width: 118px;
  display:flex;
  justify-content:center;
  align-items:center;
  margin:4px;
  border-radius:19px;
  ${color}
`;

const SearchIcon = styled(Search)`
    width:20px;
    height:20px;
`

const Drop = styled.div<DisplayProps | SpaceProps>`
            {
                position: absolute;
                top: 49px;
                width: 95%;
                max-height: 469px;
                background-color: white;
                float: center;
                direction: rtl;
                right: 50%;
                transform: translate(50%,0);
                border-bottom-right-radius: 15px;
                border-bottom-left-radius: 15px;
                box-shadow: inset 0 20px 20px -20px rgba(0,0,0,0.34), 6px 7px 9px #1323372b ;
                z-index: 1;
                overflow-y: scroll;
            }
            ${display}         
            ${space}         
`;

const List = styled('ul')({
    maxHeight: '469px',

})


const CubeBox = styled.div<LayoutProps>`
     {
         position: relative;
         right: 13%;
         z-index: 2;
         text-align: right !important;
         direction: rtl;
         animation: spincube ease-in-out 4 4s;
         -webkit-animation: spincube ease-in-out 1 4s;
         -moz-animation: spincube ease-in-out 1 4s;
         -ms-animation: spincube ease-in-out 1 4s;
         transform-style: preserve-3d;
         transform-origin:25px 25px 0;
         }
     & div{
        position:absolute;
        width: auto;
        color:${props => props.theme.colors.lipstick};
        height:50px;
        outline: none;
        border: none;
        line-height:50px;
        text-decoration:none;
        text-shadow: none;
     }
      & .face-1{
        -webkit-transform:translateZ(30px);
        -moz-transform:translateZ(30px);
        -ms-transform:translateZ(30px);
        transform:translateZ(30px);
        -webkit-backface-visibility: hidden;
        }
    
        & .face-2{
            -webkit-transform: rotateX(120deg) translateZ(30px) ;
            -moz-transform: rotateX(120deg) translateZ(30px);
            -ms-transform: rotateX(120deg) translateZ(30px) ;
            transform: rotateX(120deg) translateZ(30px);
            -webkit-backface-visibility: hidden;
        }
        & .face-3{
            -webkit-transform:rotateX(240deg)  translateZ(30px);  ;
            -moz-transform:rotateX(240deg)  translateZ(30px);  ;
            -ms-transform:rotateX(240deg)  translateZ(30px);  ;
            transform:rotateX(240deg)  translateZ(30px);;
            -webkit-backface-visibility: hidden;
        }
     
    
    ${layout}
`

// @ts-ignore
const After = styled.div<HTMLElement | { shadow: boolean }>(props => {
    console.log(props)
    return {
        position: 'sticky',
        bottom: '-3px',
        width: '100%',
        height: '1px',
        boxShadow: props.shadow ? '0 -19px 10px 20px #fdfdfdba' : 'none'
    }
})

type SearchProps = {
    values: string[]
}
const SearchInput: React.FC<SearchProps> = (props) => {
    const [isToggle, setToggle] = useState(false);
    const [value, setValue] = useState('')
    const [items, setItems] = useState([])
    const [timeExceed, setTimeExceed] = useState(false)
    const [scrollEnd, setScrollEnd] = useState(false)

    const dispatch = useDispatch()

    function drop() {

        setToggle(isToggle => !isToggle)
    }


    useEffect(() => {
        const timer = setInterval(() => {
            setTimeExceed(true)
        }, 4000);

        return () => {
            clearInterval(timer);
        }
    }, [])

    function empty() {
        setValue('')
    }

    const shadow = isToggle ? '2px ,7px ,60px, grey' : 'none'


    function _lookforwardResult(str: string) {
        query('searchSuggest', {text: str}, {
            data: {
                name: true,
                category: {categoryId: true, categoryString: true}
            }
        }).then(res => {
            const {data} = res;
            console.log(res)
            setItems(data);
            setToggle(true)
        })
    }

    const lookingForSearchSuggest = useCallback(_.debounce(_lookforwardResult, 1000), [])

    function autocomplete(e: React.ChangeEvent<HTMLInputElement>) {
        const str = e.target.value;
        setValue(str)
        if (str.length > 2)
            lookingForSearchSuggest(str)
    }

    function deleteItem(index: number) {
        const filtered = items.filter((v, i) => i !== index);
        setItems(filtered)
    }

    function _onScroll(event: UIEvent<HTMLDivElement>) {
        const target = event.target as HTMLDivElement;
        console.log(target.scrollHeight, target.scrollTop)
        if (target.scrollHeight - target.scrollTop === target.clientHeight) {
            setScrollEnd(true)
        } else {
            setScrollEnd(false)
        }

    }

    const onScroll = useCallback(_.debounce(_onScroll, 100), [])

    function pinSearchItem(item: PinnedSearch){
        dispatch(pinSearch(item))
    }

    return  (
        <Form>
            <FormControl>
                {value.length===0 &&
                <CubeBox display={timeExceed ? 'none':'block'}>
                    {props.values.map((str, index) => {
                        return <div key={index} className={`face-${index + 1 % 4}`}>{str}</div>
                    })}
                </CubeBox>}
                <Input value={value} onClick={drop} onChange={autocomplete} boxShadow={{shadow}} type="text" placeholder="جستجو"/>
                <Button bg={'lipstick'}>
                    <SearchIcon />
                </Button>
            </FormControl>
            <Drop onScroll={onScroll} className={'scroll-d-none'} px={'16px'} pt={items.length>0 && isToggle ?'35px':0} display={isToggle ? 'block':'none' }>
                <List className="scroll-d-none" >
                    {items.map((item, index)=><SearchItem onPin={pinSearchItem}  onDelete={()=>deleteItem(index)} item={item}  key={index}  />)}
                    <After shadow={!scrollEnd} />
                </List>

            </Drop>
        </Form>
    )
}

export default SearchInput