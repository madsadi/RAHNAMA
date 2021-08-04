import {createSlice, PayloadAction } from "@reduxjs/toolkit"
import { PinnedSearch } from "../../types"

const initialState: PinnedSearch[]=[];
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        unpinSearch: (state:PinnedSearch[],action:PayloadAction<number>) => {
            return state.filter(pinned=>pinned.id!==action.payload)

        },
        pinSearch: (state, action:PayloadAction<PinnedSearch>) =>{
            return [...state,action.payload]
        }

    }
})

// Action creators are generated for each case reducer function
export const { unpinSearch, pinSearch } = searchSlice.actions

export default searchSlice.reducer