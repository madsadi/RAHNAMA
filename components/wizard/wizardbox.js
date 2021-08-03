import React from 'react';
import Box from "../utility/Box";
import {marginTop} from "styled-system";
import Container from "../utility/Container";


class Card extends React.Component{
    render() {

        const row={
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
        }

        const card={
            display: "flex",
            flexDirection: "row",
            backgroundColor: "white",
            padding: "12px",
            borderRadius: "15px",
        }

        const contain={
            direction:'rtl',
            flex: "25%",
            maxWidth: "25%",
            padding: "8px"
        }

        const image={
            position: "relative",
            height: "127px",
            width: "127px",
            overflow: "hidden",
            borderRadius: "15px",
            margin: "auto"
        }

        const img={
            objectFit: "content",
            height: "100%",
            borderRadius: "15px",
        }

        const content={
            marginRight: "17px",
            flexBasis: "60%",
            flex: "1"
        }

        const header={
            fontSize: "15px",
            marginBottom: "32px",
            color: "#474546"
        }

        const meta={
            display: "flex",
            flexDirection: "row",
        }

        const descript={
            color: "#db143d",
            fontSize: "11px",
            margin: "5px 0"
        }

        const icon={
            color: "white"
        }

        const label={
            position: "absolute",
            bottom: "5%",
            right: "5%",
            fontSize: "12px"
        }

        const redIcon={
            position: "absolute",
            top: "0",
            right: "10%",
            width: "20%"
        }

        const redIcon2={
            position: "absolute",
            top: "0",
            right: "35%",
            width: "20%"
        }



        return (
            <Container>
                <div className="row" style={row}>
                    <div className="card" style={contain}>
                        <div style={card}>
                            <div className="image" style={image}>
                                <img src={'/agency_tag_2.png'} alt="" style={redIcon}/>
                                <img src={'/hi.jpg'} alt="" style={img}/>
                                <div style={label}>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={icon} width="14" height="14" fill="currentColor"
                                         className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path
                                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    </svg>
                                    <label style={icon}>چهار محال و بختیاری</label>
                                </div>
                            </div>
                            <div className="content" style={content}>
                                <div className="header" style={header}>پژو 206 تیپ 5 مدل 1397</div>
                                <div className="meta" style={meta}>
                                    <div>کارکرد:</div>
                                    <div>200,000</div>
                                    <div>کیلومتر</div>
                                </div>
                                <div className="meta" style={meta}>
                                    <div>قیمت:</div>
                                    <div>157,000,000</div>
                                    <div>تومان</div>
                                </div>
                                <div className="description" style={descript}>
                                    دقایقی پیش
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={contain}>
                        <div style={card}>
                            <div className="image" style={image}>
                                <img src={'/agency_tag_2.png'} alt="" style={redIcon}/>
                                <img src={'/hi.jpg'} alt="" style={img}/>
                                <div style={label}>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={icon} width="14" height="14" fill="currentColor"
                                         className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path
                                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    </svg>
                                    <label style={icon}>تهران</label>
                                </div>
                            </div>
                            <div className="content" style={content}>
                                <div className="header" style={header}>پژو 206 تیپ 5 مدل 1397</div>
                                <div className="meta" style={meta}>
                                    <div>کارکرد:</div>
                                    <div>200,000</div>
                                    <div>کیلومتر</div>
                                </div>
                                <div className="meta" style={meta}>
                                    <div>قیمت:</div>
                                    <div>157,000,000</div>
                                    <div>تومان</div>
                                </div>
                                <div className="description" style={descript}>
                                    دقایقی پیش
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={contain}>
                        <div style={card}>
                            <div className="image" style={image}>
                                <img src={'/agency_tag_2.png'} alt="" style={redIcon}/>
                                <img src={'/hi.jpg'} alt="" style={img}/>
                                <div style={label}>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={icon} width="14" height="14" fill="currentColor"
                                         className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path
                                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    </svg>
                                    <label style={icon}>چهار محال و بختیاری</label>
                                </div>
                            </div>
                            <div className="content" style={content}>
                                <div className="header" style={header}>پژو 206 تیپ 5 مدل 1397</div>
                                <div className="meta" style={meta}>
                                    <div>کارکرد:</div>
                                    <div>200,000</div>
                                    <div>کیلومتر</div>
                                </div>
                                <div className="meta" style={meta}>
                                    <div>قیمت:</div>
                                    <div>157,000,000</div>
                                    <div>تومان</div>
                                </div>
                                <div className="description" style={descript}>
                                    دقایقی پیش
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={contain}>
                        <div style={card}>
                            <div className="image" style={image}>
                                <img src={'/agency_tag_2.png'} alt="" style={redIcon}/>
                                <img src={'/hi.jpg'} alt="" style={img}/>
                                <div style={label}>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={icon} width="14" height="14" fill="currentColor"
                                         className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path
                                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    </svg>
                                    <label style={icon}>چهار محال و بختیاری</label>
                                </div>
                            </div>
                            <div className="content" style={content}>
                                <div className="header" style={header}>پژو 206 تیپ 5 مدل 1397</div>
                                <div className="meta" style={meta}>
                                    <div>کارکرد:</div>
                                    <div>200,000</div>
                                    <div>کیلومتر</div>
                                </div>
                                <div className="meta" style={meta}>
                                    <div>قیمت:</div>
                                    <div>157,000,000</div>
                                    <div>تومان</div>
                                </div>
                                <div className="description" style={descript}>
                                    دقایقی پیش
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={row}>
                    <div className="card" style={contain}>
                        <div style={card}>
                            <div className="image" style={image}>
                                <img src={'/agency_tag_2.png'} alt="" style={redIcon}/>
                                <img src={'/hi.jpg'} alt="" style={img}/>
                                <div style={label}>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={icon} width="14" height="14" fill="currentColor"
                                         className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path
                                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    </svg>
                                    <label style={icon}>سیستان و بلوچستان</label>
                                </div>
                            </div>
                            <div className="content" style={content}>
                                <div className="header" style={header}>پژو 206 تیپ 5 مدل 1397</div>
                                <div className="meta" style={meta}>
                                    <div>کارکرد:</div>
                                    <div>200,000</div>
                                    <div>کیلومتر</div>
                                </div>
                                <div className="meta" style={meta}>
                                    <div>قیمت:</div>
                                    <div>157,000,000</div>
                                    <div>تومان</div>
                                </div>
                                <div className="description" style={descript}>
                                    دقایقی پیش
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={contain}>
                        <div style={card}>
                            <div className="image" style={image}>
                                <img src={'/agency_tag_2.png'} alt="" style={redIcon}/>
                                <img src={'/hi.jpg'} alt="" style={img}/>
                                <div style={label}>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={icon} width="14" height="14" fill="currentColor"
                                         className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path
                                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    </svg>
                                    <label style={icon}>چهار محال و بختیاری</label>
                                </div>
                            </div>
                            <div className="content" style={content}>
                                <div className="header" style={header}>پژو 206 تیپ 5 مدل 1397</div>
                                <div className="meta" style={meta}>
                                    <div>کارکرد:</div>
                                    <div>200,000</div>
                                    <div>کیلومتر</div>
                                </div>
                                <div className="meta" style={meta}>
                                    <div>قیمت:</div>
                                    <div>157,000,000</div>
                                    <div>تومان</div>
                                </div>
                                <div className="description" style={descript}>
                                    دقایقی پیش
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={contain}>
                        <div style={card}>
                            <div className="image" style={image}>
                                <img src={'/agency_tag_2.png'} alt="" style={redIcon}/>
                                <img src={'/hi.jpg'} alt="" style={img}/>
                                <div style={label}>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={icon} width="14" height="14" fill="currentColor"
                                         className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path
                                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    </svg>
                                    <label style={icon}>چهار محال و بختیاری</label>
                                </div>
                            </div>
                            <div className="content" style={content}>
                                <div className="header" style={header}>پژو 206 تیپ 5 مدل 1397</div>
                                <div className="meta" style={meta}>
                                    <div>کارکرد:</div>
                                    <div>200,000</div>
                                    <div>کیلومتر</div>
                                </div>
                                <div className="meta" style={meta}>
                                    <div>قیمت:</div>
                                    <div>157,000,000</div>
                                    <div>تومان</div>
                                </div>
                                <div className="description" style={descript}>
                                    دقایقی پیش
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={contain}>
                        <div style={card}>
                            <div className="image" style={image}>
                                <img src={'/agency_tag_2.png'} alt="" style={redIcon}/>
                                <img src={'/hi.jpg'} alt="" style={img}/>
                                <div style={label}>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={icon} width="14" height="14" fill="currentColor"
                                         className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path
                                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    </svg>
                                    <label style={icon}>چهار محال و بختیاری</label>
                                </div>
                            </div>
                            <div className="content" style={content}>
                                <div className="header" style={header}>پژو 206 تیپ 5 مدل 1397</div>
                                <div className="meta" style={meta}>
                                    <div>کارکرد:</div>
                                    <div>200,000</div>
                                    <div>کیلومتر</div>
                                </div>
                                <div className="meta" style={meta}>
                                    <div>قیمت:</div>
                                    <div>157,000,000</div>
                                    <div>تومان</div>
                                </div>
                                <div className="description" style={descript}>
                                    دقایقی پیش
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={row}>
                    <div className="card" style={contain}>
                        <div style={card}>
                            <div className="image" style={image}>
                                <img src={'/agency_tag_2.png'} alt="" style={redIcon}/>
                                <img src={'/hi.jpg'} alt="" style={img}/>
                                <div style={label}>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={icon} width="14" height="14" fill="currentColor"
                                         className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path
                                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    </svg>
                                    <label style={icon}>چهار محال و بختیاری</label>
                                </div>
                            </div>
                            <div className="content" style={content}>
                                <div className="header" style={header}>پژو 206 تیپ 5 مدل 1397</div>
                                <div className="meta" style={meta}>
                                    <div>کارکرد:</div>
                                    <div>200,000</div>
                                    <div>کیلومتر</div>
                                </div>
                                <div className="meta" style={meta}>
                                    <div>قیمت:</div>
                                    <div>157,000,000</div>
                                    <div>تومان</div>
                                </div>
                                <div className="description" style={descript}>
                                    دقایقی پیش
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={contain}>
                        <div style={card}>
                            <div className="image" style={image}>
                                <img src={'/agency_tag_2.png'} alt="" style={redIcon}/>
                                <img src={'/hi.jpg'} alt="" style={img}/>
                                <div style={label}>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={icon} width="14" height="14" fill="currentColor"
                                         className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path
                                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    </svg>
                                    <label style={icon}>چهار محال و بختیاری</label>
                                </div>
                            </div>
                            <div className="content" style={content}>
                                <div className="header" style={header}>پژو 206 تیپ 5 مدل 1397</div>
                                <div className="meta" style={meta}>
                                    <div>کارکرد:</div>
                                    <div>200,000</div>
                                    <div>کیلومتر</div>
                                </div>
                                <div className="meta" style={meta}>
                                    <div>قیمت:</div>
                                    <div>157,000,000</div>
                                    <div>تومان</div>
                                </div>
                                <div className="description" style={descript}>
                                    دقایقی پیش
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={contain}>
                        <div style={card}>
                            <div className="image" style={image}>
                                <img src={'/agency_tag_2.png'} alt="" style={redIcon}/>
                                <img src={'/hi.jpg'} alt="" style={img}/>
                                <div style={label}>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={icon} width="14" height="14" fill="currentColor"
                                         className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path
                                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    </svg>
                                    <label style={icon}>چهار محال و بختیاری</label>
                                </div>
                            </div>
                            <div className="content" style={content}>
                                <div className="header" style={header}>پژو 206 تیپ 5 مدل 1397</div>
                                <div className="meta" style={meta}>
                                    <div>کارکرد:</div>
                                    <div>200,000</div>
                                    <div>کیلومتر</div>
                                </div>
                                <div className="meta" style={meta}>
                                    <div>قیمت:</div>
                                    <div>157,000,000</div>
                                    <div>تومان</div>
                                </div>
                                <div className="description" style={descript}>
                                    دقایقی پیش
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={contain}>
                        <div style={card}>
                            <div className="image" style={image}>
                                <img src={'/agency_tag_2.png'} alt="" style={redIcon}/>
                                <img src={'/hi.jpg'} alt="" style={img}/>
                                <div style={label}>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={icon} width="14" height="14" fill="currentColor"
                                         className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path
                                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    </svg>
                                    <label style={icon}>چهار محال و بختیاری</label>
                                </div>
                            </div>
                            <div className="content" style={content}>
                                <div className="header" style={header}>پژو 206 تیپ 5 مدل 1397</div>
                                <div className="meta" style={meta}>
                                    <div>کارکرد:</div>
                                    <div>200,000</div>
                                    <div>کیلومتر</div>
                                </div>
                                <div className="meta" style={meta}>
                                    <div>قیمت:</div>
                                    <div>157,000,000</div>
                                    <div>تومان</div>
                                </div>
                                <div className="description" style={descript}>
                                    دقایقی پیش
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Card;

