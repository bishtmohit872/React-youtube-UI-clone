import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        data:null,
        options:[
            ['https://static.thenounproject.com/png/7528537-200.png','Image'],
            ['https://static.thenounproject.com/png/6942000-200.png','Image Poll'],
            ['https://static.thenounproject.com/png/6942000-200.png','Text Poll'],
            ['https://static.thenounproject.com/png/7078931-200.png','Quiz'],
            ['https://static.thenounproject.com/png/2567866-200.png','Video'],
        ]
    },
    reducers:{
        addUser:(state,action)=>{
            state.data=action.payload
        },
        removeUser:(state)=>{
            state.data=null
        }
    }
})

export default userSlice.reducer
export const {addUser,removeUser} = userSlice.actions