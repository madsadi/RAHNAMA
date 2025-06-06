import React, {ChangeEvent, ChangeEventHandler, useCallback, useEffect, useState, useRef} from "react";
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
import Cross from "../../public/icons/group_1370.svg";
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
    margin: 0 auto;
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
    height: '100%',
    background: 'white',
    borderRadius: '19px',
    zIndex: 1010,
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
    
    &::-webkit-search-cancel-button {
        content: '';
        cursor:pointer;
        background-image: url('/icons/group_1370.svg');
        background-size: contain;
        width:15px;
        height:15px;
        -webkit-appearance: none;
    }
    &::-webkit-input-placeholder {
        font-family: dana;
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
    max-width:100%;
    max-height:100%;
    margin: 5px auto;
`

const Drop = styled.div<DisplayProps | SpaceProps>`
            {
                position: absolute;
                top: 95%;
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
                z-index: ${props=>props.theme.zIndices.dropdown};
                overflow-y: scroll;
            }
            ${display}         
            ${space}         
`;

const List = styled('ul')({
    maxHeight: '469px',
    margin:0,
    paddingRight:0

})


const CubeBox = styled.div<LayoutProps>`
     {
         position: relative;
         right: 90px;
         top:0;
         z-index: 2;
         text-align: right !important;
         direction: rtl;
         animation: spincube ease-in-out 4 4s;
         -webkit-animation: spincube ease-in-out infinite 4s;
         -moz-animation: spincube ease-in-out infinite 4s;
         -ms-animation: spincube ease-in-out infinite 4s;
         transform-style: preserve-3d;
         transform-origin:25px 50% 0;
         }
     & div{
        position:absolute;
        width: auto;
        color:${props => props.theme.colors.lipstick};
        height:100%;
        outline: none;
        border: none;
        display:flex;
        align-items:center;
        text-decoration:none;
        text-shadow: none;
        background:${props => props.theme.colors.paleGrey};
        -webkit-font-smoothing: subpixel-antialiased;
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

    const escape = useRef(null)
    const escapeListener = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            setToggle(false)
        }
    }, [])
    const clickListener = useCallback(
        (e: MouseEvent) => {
            if (!(escape.current! as any).contains(e.target)) {
                setToggle?.(false) // using optional chaining here, change to onClose && onClose(), if required
            }
        },
        [escape.current],
    )


    const dispatch = useDispatch()

    function drop() {

        setToggle(isToggle => !isToggle)
    }


    useEffect(() => {
        const timer = setInterval(() => {
            setTimeExceed(true)
        }, 4000);

        document.addEventListener('click', clickListener)
        document.addEventListener('keyup', escapeListener)

        return () => {
            clearInterval(timer);
            document.removeEventListener('click', clickListener)
            document.removeEventListener('keyup', escapeListener)
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
        <Form ref={escape}>
            <FormControl>
                {value.length===0 &&
                <CubeBox >
                    {props.values.map((str, index) => {
                        return <div key={index} className={`face-${index + 1 % 4}`}>{str}</div>
                    })}
                </CubeBox>}
                <Input value={value} onClick={drop} onChange={autocomplete} boxShadow={{shadow}} type="search" placeholder="جستجو"/>
                <Button bg={'lipstick'}>
                    <SearchIcon />
                </Button>
            </FormControl>
            <Drop  onScroll={onScroll} className={'scroll-d-none'} px={'16px'} pt={items.length>0 && isToggle ?'35px':0} display={isToggle ? 'block':'none' }>
                <List className="scroll-d-none" >
                    {items.map((item, index)=><SearchItem onPin={pinSearchItem}  onDelete={()=>deleteItem(index)} item={item}  key={index}  />)}
                    <After shadow={!scrollEnd} />
                </List>
            </Drop>
        </Form>
    )
}

export default SearchInput