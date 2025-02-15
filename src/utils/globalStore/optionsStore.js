import { configureStore } from '@reduxjs/toolkit'

import storage from 'redux-persist/lib/storage'; 
import { persistReducer, persistStore } from 'redux-persist'
import { combineReducers } from 'redux'

import menuReducer from './menuSlice'
import userReducer from './userSlice'
import videoReducer from './videoSlice'
import channelReducer from './channelSlice'
import playlistChannelReducer from './playlistChannelSlice'
import SearchReducer from './searchSlice';



// export const optionStore=configureStore({
//     reducer:{
//         menu:menuReducer,
//         user:userReducer,
//         video:videoReducer,
//         channel:channelReducer,
//         playlist:playlistReducer,
//     }
// })

const rootReducer = combineReducers({
    menu: menuReducer,
    user: userReducer,
    video: videoReducer,
    channel: channelReducer,
    playlistChannel:playlistChannelReducer,
    searchResult:SearchReducer,
});

const persistConfig = {
    key: 'root',
    version:1,
    storage, 
    whitelist: ['video', 'channel','playlistChannel','searchResults'], 
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const optionStore = configureStore({
    reducer:persistedReducer,
});

export const persistor = persistStore(optionStore);

