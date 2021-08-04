import React from "react";
import { Post } from "../../types";
import Box from "../utility/Box";
import styled from "styled-components";
import {border, BorderProps} from "styled-system";

const BoxPOst=styled(Box)<BorderProps>(border)

export const Wizard: React.FC<Post> = (props)=>{

    return(
       <Box display={"flex"} flexDirection={"row"}  >

       </Box>
    )
}