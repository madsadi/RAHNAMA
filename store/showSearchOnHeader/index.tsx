import {createSlice, PayloadAction } from "@reduxjs/toolkit"
import { PinnedSearch } from "../../types"

const initialState: boolean=false;
const searchSlice = createSlice({
    name: 'showSearchOnHeader',
    initialState,
    reducers: {
        showOnHeader:(state:boolean,action:PayloadAction<boolean>)=>{
            return action.payload
        }

    }
})

// Action creators are generated for each case reducer function
export const { showOnHeader } = searchSlice.actions

export default searchSlice.reducer