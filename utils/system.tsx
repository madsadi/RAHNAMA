import React, {FC} from 'react'
import { ThemeProvider } from 'styled-components'
import App from "next/app";
import theme from "./theme";

interface Props{}
export const ThemeSystem:FC<Props>= (props) => (
    <ThemeProvider theme={theme}>
        {props.children}
    </ThemeProvider>
)

export default App