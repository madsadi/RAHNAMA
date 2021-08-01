import * as React from "react";
import {AppBar} from "../components/header/appBar";
import Box from "../components/utility/Box";
import {TopSearch} from "../components/search/TopSearch";
interface Props {

}

const Home: React.FC<Props> = (props) => {

    return(
            <Box display={'flex'} flexDirection={'column'}>
                <AppBar/>
                <TopSearch/>
            </Box>
    )
}

export default Home