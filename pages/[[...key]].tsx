import * as React from "react";
import {AppBar} from "../components/header/appBar";
import Card from "../components/wizard/wizardbox";
import Box from "../components/utility/Box";
import {TopSearch} from "../components/search/TopSearch";
interface Props {

}

const Home: React.FC<Props> = (props) => {

    return(
            <Box display={'flex'} flexDirection={'column'}>
                <AppBar/>

                <TopSearch/>

                <Card/>
            </Box>
    )
}

export default Home