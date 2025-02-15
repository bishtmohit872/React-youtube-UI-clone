import { createSlice } from "@reduxjs/toolkit";

const  searchSlice = createSlice({
    name:'searchResult',
    initialState:null,
    reducers:{
        addResult:(state,action)=>{
            return action.payload
        },
        removeResult:(state)=>{
            return null
        }
    }
})

export default searchSlice.reducer
export const {addResult,removeResult} = searchSlice.actions