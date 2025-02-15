import { createSlice } from "@reduxjs/toolkit";

const playlistChannelSlice = createSlice({
    name:'playlistChannel',
    initialState:{
        playlistChannel:null,
        playlist:null,
    },
    reducers:{
        addPlaylistChannel:(state,action)=>{
            state.playlistChannel=action.payload
        },
        addPlaylist:(state,action)=>{
            state.playlist=action.payload
        },
    }
})

export default playlistChannelSlice.reducer
export const { addPlaylistChannel,addPlaylist }=playlistChannelSlice.actions