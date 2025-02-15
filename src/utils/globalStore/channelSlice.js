import { createSlice } from '@reduxjs/toolkit'

const channelSlice=createSlice({
    name:'channel',
    initialState:null,
    reducers:{
        addChannel:(state,action)=>{
            return action.payload
        }
    }
})

export default channelSlice.reducer
export const {addChannel} = channelSlice.actions