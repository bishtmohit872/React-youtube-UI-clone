import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:'video',
    initialState:null,
    reducers:{
        addVideo:(state,action)=>{
            return action.payload
        },
        removeVideo:(state,action)=>{
            return null
        }
    }
})

export default videoSlice.reducer
export const { addVideo,removeVideo } = videoSlice.actions