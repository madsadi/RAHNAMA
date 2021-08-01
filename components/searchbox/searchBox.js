import React from 'react';

class SearchBox extends React.Component {
    render() {
        const form={
            position: "relative",
            width: "40%",
            margin: "auto",
            display: "flex",
            ':hover': {
                color: 'red'
            }
        }

        const input={
            width: "100%",
            height: "40px",
            borderRadius: "15px",
            border: "1px solid white",
            color: "#acacac",
            paddingRight: "15px",
            fontSize: "15px",
            ':hover': {
                width: '50%'
            }
        }

        const button={
            position: "absolute",
            left: "0",
            top: "50%",
            transform: "translate(2px,-50%)",
            borderRadius: "15px",
            border: "1px solid white",
            backgroundColor: "#db143d",
            height: "85%",
            width: "15%",
            color: "white",
            cursor: "pointer"
        }

        const searchicon={
            position: "absolute",
            right: "50%",
            top: "50%",
            transform: "translate(50%,-50%)"
        }
        return(

                <form style={form}>
                    <input type="text" placeholder="جستجو" style={input}/>
                    <div style={button}>
                        <svg style={searchicon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                             className="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </div>
                </form>

        )
    }
}

export default SearchBox;