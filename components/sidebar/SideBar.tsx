import React, {UIEvent, useCallback, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {DisplayProps, layout, LayoutProps, position, PositionProps, SpaceProps} from "styled-system";
import ModalCity from "./Modalcity";
import Ipro from '../../public/icons/Group 1403.svg';
import Categ from '../../public/icons/iconly_light_outline_category.svg';
import ArrowLeft from '../../public/icons/Stroke 3.svg';
import RealState from '../../public/icons/1402.svg';
import Transportation from '../../public/icons/Group 1404.svg';
import Hire from '../../public/icons/Group 1405.svg';
import Stuff from '../../public/icons/Group 1406.svg';
import Furniture from '../../public/icons/Group 1407.svg';
import Service from '../../public/icons/1408.svg';
import Personalstuff from '../../public/icons/Group 1409.svg';
import Business from '../../public/icons/Group 1410.svg';
import Industry from '../../public/icons/Group 1411.svg';
import Tourist from '../../public/icons/Group 1412.svg';
import Ficon from '../../public/icons/Group 1413.svg';
import Plus from '../../public/icons/Group 1414.svg';
import CheckedOut from '../../public/icons/Group 1415.svg';
import Check from '../../public/icons/Stroke 2.svg';
import Taarif from '../../public/icons/Subtraction 10.svg';
import Rules from '../../public/icons/Group 1416.svg';
import Branch from '../../public/icons/Path_34175.svg';
import About from '../../public/icons/Path 128.svg';
import Customer from '../../public/icons/Path 103.svg';
import ISoftware from '../../public/icons/Download.svg';
import Licence from '../../public/icons/Group 1418.svg';
import Android from '../../public/icons/Group 1419.svg';
import Ios from '../../public/icons/Group 1420.svg';
import Bazar from '../../public/icons/Group 1421.svg';
import He from '../../public/icons/Path 135.svg';
import Pull from '../../public/icons/Group 1422.svg';
import Whiteremove from '../../public/icons/white remove.svg';
import Blackremove from '../../public/icons/black remove.svg';
import Dots from '../../public/icons/dots.svg';
import _ from "lodash";
import Image from 'next/image'
import {useRouter} from "next/router";

const SideContent = styled.div<PositionProps>`
    right: 0;
    max-width:500px;
    z-index: 1015; 
    margin-bottom:30px;
    display:flex;
    top:12vh;
    ${position}
`

const Side = styled.div `
    background-color: rgba(71,69,70,0.7);
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    padding: 16px;
    backdrop-filter: blur(50px);   
`

const User = styled.div`
    direction:rtl;
    background-color: #474546;
    border-radius: 30px;
    height: 128px;
    padding: 19px;
    position: relative;
`

const Profile = styled.div`
    display: flex;
    color: white;   
`

const Login = styled.button`
    background:#2d2c2c;
    border-radius: 10px;
    padding: 4px 15px;
    color: white;
    position: absolute;
    left: 19px;
    bottom: 19px;
    border-color: #2d2c2c;
    z-index: 1;
    cursor: pointer;
`

const Span = styled.div`
    margin: auto;
    margin-right: 10px;
`

const Section = styled.div`
    color: white;
    background-color: #474546;
    border-radius: 30px;
    padding: 19px;
    position: relative;
    margin-top:5px;
    direction:rtl;

`

const Head = styled.div `
    position: relative;
    margin-bottom: 20px;
    
    &::before{
    content: '';
    position: absolute;
    right: 0;
    height: 14px;
    display: block;
    width: 3px;
    background: #fcc155;
    top: 50%;
    transform: translate(0,-50%);
    border-radius: 4px;
    }
`

const Li = styled.li `
    position: relative;
    cursor: pointer;
    display:flex;
    margin:10px 0;
    padding-bottom:10px;
    &:not(:last-child)::after {
    content: '';
    display: block;
    height: 1px;
    background: #f5f6fa;
    opacity: 9%;
    position:absolute;
    width: 100%;
    bottom:0;
    }
`

const Lii = styled.li `
    margin:20px 0;
    cursor: pointer;
    display:flex;
    
`

const Liii = styled.li<LayoutProps>`
    cursor: pointer;
    flex:1 1;
    max-width:3.4vh;
    &:not(:last-child)::after {
    content: '';
    display: block;
    background: #f5f6fa;
    opacity: 9%;
    position: 50%;
    bottom:4px;
    right:50%;
    transform: translate(50%,0);
}    
${layout}
&.category{
      position:relative;
      &::after {
        content: "";
        display: block;
        background-color: #f5f6fa;
        height: 2px;
        border-radius: 2px;
        width: 12px;  
        position: absolute;
        bottom:4px;
        right:50%;
        transform: translate(50%,0);

    }
}
    
&.main-divider{
  position:relative;
  margin-bottom:5px;
  &::after {
    margin-top:5px;
    opacity:1;
    content: "";
    display: block;
    background-color: #2d2c2c;
    height: 3px;
    border-radius: 2px;
    width: 100%;  
    position: absolute;
    bottom:0;
    right:50%;
    transform: translate(50%,0);

  }
}
`


const Ul = styled.ul<LayoutProps>`
        list-style-type: none;
        direction:rtl;
        padding-right:0;
        margin: 0 2vh 0 2.4vh;
        display:flex;
        flex-direction:column;
        ${layout}
`

const CityPrice = styled.div`
    background: rgba(255,255,255,0.1);
    position: relative;
    padding: 12px 19px;
    color: white;
    margin: 5px -19px;
`

const WithFilter = styled.div`
    display: flex;
    flex-direction:column;
`

const Yellow = styled.span`
    color:#fcc155;
    font-size:12px;
    margin-right:10px;
`

const Heading = styled.div`
    display:flex;
`

const WithoutFilter = styled.div`
    display: flex;
`
const FiltersContain = styled.div`
    display: flex;
`

const Ones = styled.div`
    display: flex;
    flex-flow:wrap;
    width:80%;
    margin:4px;

`
const CityFilter = styled.div`
    background: #fcc155;
    border-radius:12px;
    padding:3px 5px 0 5px;
    margin:3px;
    display:flex;
    color:#474546;
    font-size:14px;
`

const Feature = styled.div `
    position: relative;
    margin:30px 5px  0 0;
`

const Line = styled.div`
    background: rgba(255,255,255,0.1);
    height: 1px;
    margin: 10px 0;
`

const Footer = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    direction:rtl;

`

const Software = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    background:#474546;
    border-radius: 20px;
    padding: 12px;
    position: relative;
    width: 75%;
    height: 80px;
`

const Apps = styled.div`
    border-radius: 10px;
    padding: 4px 15px;
    color: white;
    position: absolute;
    left: 0;
    bottom: 0;
`

const Div = styled.div`
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    position: relative;
    background-color: rgba(71,69,70,0.7);
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    cursor: pointer;
    width:40px;
    height: 120px;
    `;


const Shown = styled.div<DisplayProps | SpaceProps| HTMLElement>`
    width: 390px;
    overflow-y: scroll;
    padding-right: 10px;
    height:85vh;
    margin-bottom: 30px;
    display:flex;
    flex-direction:column;
    ${layout}
`

const CurvedTop = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  position: relative;
  
  &::after{
  content: "";
  display: block;
  width: 200%;
  height: 200%;
  position: absolute;
  border-radius: 20%;
  bottom: 0;
  right: 0;
 box-shadow: 50px 50px 0 0  rgba(71,69,70,0.7);
   }
`

const CurvedBottom = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  position: relative;
  
  &::after{
  content: "";
  display: block;
  width: 200%;
  height: 200%;
  position: absolute;
  border-radius: 20%;
  bottom: 0;
  right: 0;
  top: 0;
  right: 0;
  box-shadow: 50px -50px 0 0  rgba(71,69,70,0.7);

  }

`

const PullDiv = styled.div`   
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    padding-bottom:10vh;
`

export default function SideBar() {
    const icon = {
        position: "absolute",
        left: "0",
        top: "50%",
        transform: "translate(0,-50%)",
        cursor: "pointer"
    }

    const icon2 = {
        position: "absolute",
        left: "8px",
        top: "50%",
        transform: "translate(0,-50%)"
    }

    const icon3 = {
        marginRight: "auto",
        marginTop: "3px",
        cursor: "pointer"
    }

    const icon33 = {
        margin: "1px 5px 0 0",
        cursor: "pointer"
    }


    const icon1 = {
        position: "relative",
    }

    const iconicon = {
        position: "relative",
        top: "3px"
    }

    const he={
        position: "absolute",
        left: "0",
        top: "0"
    }

    const pullbutton = {
        width: "auto",
        height: "auto",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        borderTopLeftRadius: "50px",
        borderBottomLeftRadius: "50px",
        cursor: "pointer"
    }

    const [display,setDisplay]=useState(true);
    const [show,setShow]=useState(false);

     const router=useRouter()

    const onShow = () => {
        if(!show) setShow(true);
        else setShow(false);
    }

    const sideRef=useRef<HTMLDivElement|null>(null)

    function _onScroll() {
        console.log(sideRef.current?.offsetTop , window)
        setDisplay(false);

    }

    const onScroll = useCallback(_.throttle(_onScroll, 100), [])

    useEffect(() => {

        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }


    }, []);

    const shownRef=useRef<HTMLDivElement>(null)

    const stopBubblingScroll=function (e:React.SyntheticEvent<HTMLDivElement>){

        if (shownRef.current===null){
            return;
        }
        let height = shownRef.current?.clientHeight,
            scrollHeight = shownRef.current?.scrollHeight,
            scrollTop = shownRef.current?.scrollTop
        ;

        if (scrollTop+height === scrollHeight || scrollTop===0){
            e.preventDefault()
        }
        e.stopPropagation();

    }




    return (
        // @ts-ignore
        <div>
            <SideContent position={'fixed'}>
                <PullDiv>
                    <CurvedTop></CurvedTop>
                        <Div onClick={()=>setDisplay(!display)}>
                        <Pull style={pullbutton}/>
                    </Div>
                    <CurvedBottom></CurvedBottom>
                </PullDiv>
                <Side >
                    <Shown ref={shownRef} display={display ?'block':'none'} onWheel={stopBubblingScroll} onScroll={stopBubblingScroll} >
                        <User>
                            <Profile>
                                <Ipro></Ipro>
                                <Span>کاربر میهمان</Span>
                            </Profile>
                            <Login>
                                ورود و ثبت نام
                            </Login>
                            <He style={he}/>
                        </User>
                        <Section>
                            <Head>
                                <Span>دسته بندی ها</Span>
                                <Categ style={icon}></Categ>
                            </Head>
                            <Ul>
                                <Li>
                                    <RealState style={icon1}/>
                                    <Span>املاک</Span>
                                    <ArrowLeft style={icon2}/>
                                </Li>
                                <Li>
                                    <Transportation style={icon1}/>
                                    <Span>وسایل نقلیه</Span>
                                    <ArrowLeft style={icon2}/>
                                </Li>
                                <Li>
                                    <Hire style={icon1}/>
                                    <Span>استخدام</Span>
                                    <ArrowLeft style={icon2}/>
                                </Li>
                                <Li>
                                    <Stuff style={icon1}/>
                                    <Span>لوازم</Span>
                                    <ArrowLeft style={icon2}/>
                                </Li>
                                <Li>
                                    <Furniture style={icon1}/>
                                    <Span>لوازم خانه</Span>
                                    <ArrowLeft style={icon2}/>
                                </Li>
                                <Li>
                                    <Service style={icon1}/>
                                    <Span>خدمات</Span>
                                    <ArrowLeft style={icon2}/>
                                </Li>
                                <Li>
                                    <Personalstuff style={icon1}/>
                                    <Span>لوازم شخصی</Span>
                                    <ArrowLeft style={icon2}/>
                                </Li>
                                <Li>
                                    <Business style={icon1}/>
                                    <Span>کسب و کار،صنعت</Span>
                                    <ArrowLeft style={icon2}/>
                                </Li>
                                <Li>
                                    <Industry style={icon1}/>
                                    <Span>کسب و کار،صنعت</Span>
                                    <ArrowLeft style={icon2}/>
                                </Li>
                                <Li>
                                    <Tourist style={icon1}/>
                                    <Span>گردشگری</Span>
                                    <ArrowLeft style={icon2}/>
                                </Li>
                            </Ul>
                        </Section>
                        <Section>
                            <Head>
                                <Span>فیلتر ها</Span>
                                <Ficon style={icon}></Ficon>
                            </Head>
                            <CityPrice>
                                <WithFilter>
                                    <Heading>
                                        <Span>شهر ،محله<Yellow>( 2شهر و 10 محله )</Yellow></Span>
                                        <Blackremove style={icon3}/>
                                    </Heading>
                                    <FiltersContain>
                                        <Ones>
                                            <CityFilter>
                                                تهران انقلاب
                                                <Whiteremove style={icon33}></Whiteremove>
                                            </CityFilter>
                                            <CityFilter>
                                                تهران انقلاب
                                                <Whiteremove style={icon33}></Whiteremove>
                                            </CityFilter>
                                            <CityFilter>
                                                تهران انقلاب
                                                <Whiteremove style={icon33}></Whiteremove>
                                            </CityFilter>
                                            <CityFilter>
                                                تهران انقلاب
                                                <Whiteremove style={icon33}></Whiteremove>
                                            </CityFilter>
                                        </Ones>
                                        <Dots style={{marginTop: "auto",marginRight: "auto", cursor: "pointer"}}/>
                                    </FiltersContain>
                                </WithFilter>
                                <WithoutFilter>
                                    <Span>شهر ،محله</Span>
                                    <Plus onClick={onShow} style={icon3}></Plus>
                                </WithoutFilter>
                            </CityPrice>
                            <CityPrice>
                                {/*<WithFilter>*/}
                                {/*    <Heading>*/}
                                {/*        <Span>قیمت</Span>*/}
                                {/*        <Blackremove style={icon3}></Blackremove>*/}
                                {/*    </Heading>*/}
                                {/*    <FiltersContain>*/}
                                {/*        <Yellow>از</Yellow>*/}
                                {/*        <InputPrice type="text" placeholder="مثلا 70،000،000 تومان"></InputPrice>*/}
                                {/*    </FiltersContain>*/}
                                {/*</WithFilter>*/}
                                <WithoutFilter>
                                    <Span>قیمت</Span>
                                    <Plus style={icon3}></Plus>
                                </WithoutFilter>
                            </CityPrice>
                            <Feature>
                                <Span style={{marginRight: "0"}}>عکس دار</Span>
                                <CheckedOut style={icon}></CheckedOut>
                            </Feature>
                            <Feature>
                                <Span style={{marginRight: "0"}}>فوری</Span>
                                <Check style={icon}></Check>
                            </Feature>
                            <Feature>
                                <Span style={{marginRight: "0"}}>روزنامه</Span>
                                <Check style={icon}></Check>
                            </Feature>
                            <Feature>
                                <Span style={{marginRight: "0"}}>گرافیکی</Span>
                                <Check style={icon}></Check>
                            </Feature>
                        </Section>
                        <Line></Line>
                        <Ul style={{color: "white", marginRight: "20px"}}>
                            <Lii>
                                <Taarif style={iconicon}/>
                                <Span>تعرفه ها</Span>
                            </Lii>
                            <Lii>
                                <Rules style={iconicon}/>
                                <Span>قوانین و مقررات</Span>
                            </Lii>
                            <Lii>
                                <Branch style={iconicon}/>
                                <Span>دفاتر همشهری</Span>
                            </Lii>
                            <Lii>
                                <About style={iconicon}/>
                                <Span>درباره همشهری</Span>
                            </Lii>
                            <Lii>
                                <Customer style={iconicon}/>
                                <Span>پشتیبانی</Span>
                            </Lii>
                        </Ul>
                        <Footer>
                            <Software>
                                <Profile>
                                    <ISoftware style={icon1}/>
                                    <Span>دانلود اپلیکیشن</Span>
                                </Profile>
                                <Apps>
                                    <Android style={{cursor: "pointer"}} />
                                    <Ios style={{cursor: "pointer"}}/>
                                    <Bazar style={{cursor: "pointer"}}/>
                                </Apps>
                            </Software>
                            <div>
                                <Licence style={{cursor: "pointer"}}/>
                            </div>
                        </Footer>
                    </Shown>
                     <Ul display={display ?'none':'flex'}>
                                <Liii className={'main-divider'}>
                                    <Image src={'/icons/profile.svg'} width={'100%'} height={'100%'}/>
                                </Liii>

                                <Liii  className={"category"}>
                                    <Image src={'/icons/pro.svg'} width={'100%'} height={'100%'}/>
                                </Liii>
                                <Liii  className={"category"}>
                                    <Image src={'/icons/real.svg'} width={'100%'} height={'100%'}/>
                                </Liii>
                                <Liii  className={"category"}>
                                    <Image src={'/icons/trans.svg'} width={'100%'} height={'100%'}/>
                                </Liii>
                                <Liii  className={"category"}>
                                    <Image src={'/icons/5.svg'} width={'100%'} height={'100%'}/>
                                </Liii>
                                <Liii  className={"category"}>
                                    <Image src={'/icons/4.svg'} width={'100%'} height={'100%'}/>
                                </Liii >
                                <Liii  className={"category"}>
                                    <Image src={'/icons/rules.svg'} width={'100%'} height={'100%'}/>
                                </Liii >
                                <Liii  className={"category"}>
                                    <Image src={'/icons/pricing.svg'} width={'100%'} height={'100%'}/>
                                </Liii >
                                <Liii  className={"category"}>
                                    <Image src={'/icons/pricing.svg'} width={'100%'} height={'100%'}/>
                                </Liii >
                                <Liii  className={"category"}>
                                    <Image src={'/icons/pricing.svg'} width={'100%'} height={'100%'}/>
                                </Liii >

                                <Liii className={"main-divider"}>
                                    <Image src={'/icons/pricing.svg'} width={'100%'} height={'100%'}/>
                                </Liii>

                                <Liii className={'main-divider'}>
                                    <Image src={'/icons/filters.svg'} width={'100%'} height={'100%'} />
                                </Liii>

                                <Liii >
                                    <Image src={'/icons/pricing.svg'} width={'100%'} height={'100%'}/>
                                </Liii>
                                <Liii >
                                    <Image src={'/icons/pricing.svg'} width={'100%'} height={'100%'}/>
                                </Liii>
                                <Liii >
                                    <Image src={'/icons/pricing.svg'} width={'100%'} height={'100%'}/>
                                </Liii>
                                <Liii >
                                    <Image src={'/icons/pricing.svg'} width={'100%'} height={'100%'}/>
                                </Liii>
                                <Liii className={'main-divider'}>
                                    <Image src={'/icons/pricing.svg'} width={'100%'} height={'100%'}/>
                                </Liii>
                                <Liii >
                                    <Image src={'/icons/6.svg'} width={'100%'} height={'100%'}/>
                                </Liii>
                            </Ul>

                </Side>
            </SideContent >
            {show ? <ModalCity/> : null }
        </div>
    )
}