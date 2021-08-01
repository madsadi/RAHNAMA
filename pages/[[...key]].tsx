import * as React from "react";
import {AppBar} from "../components/header/appBar";
import Box from "../components/utility/Box";
interface Props {

}

const Home: React.FC<Props> = (props) => {

    return(
            <Box>
                <AppBar/>
            </Box>
    )
}

export default Home