import { createSlice } from "@reduxjs/toolkit";


const menuSlice = createSlice({
    name:'menu',
    initialState:{
                    Main:[
                            ['https://static.thenounproject.com/png/1526055-200.png','Home'],
                            ['https://static.thenounproject.com/png/7261114-200.png','Shorts'],
                            ['https://static.thenounproject.com/png/257930-200.png','Subscriptions'],
                        ],

                    You:[
                            ['https://static.thenounproject.com/png/5502397-200.png','History'],
                            ['https://static.thenounproject.com/png/6050195-200.png','Playlists'],
                            ['https://static.thenounproject.com/png/1591055-200.png','Your videos'],
                            ['https://static.thenounproject.com/png/4026107-200.png','Your courses'],
                            ['https://static.thenounproject.com/png/7216905-200.png','Watch later'],
                            ['https://static.thenounproject.com/png/7514416-200.png','Liked videos'],
                        ],

                        
                    subscriptions:[
                            ['https://static.thenounproject.com/png/1526055-200.png',"CodeWithHarry"]
                        ],    
                    
                    Explore:[
                            ['https://static.thenounproject.com/png/6170765-200.png','Trending'],
                            ['https://static.thenounproject.com/png/7461088-200.png','Shopping'],
                            ['https://static.thenounproject.com/png/699575-200.png','Music'],
                            ['https://static.thenounproject.com/png/7525280-200.png','Movies'],
                            ['https://static.thenounproject.com/png/5373251-200.png','Live'],
                            ['https://static.thenounproject.com/png/6291417-200.png','Gaming'],
                            ['https://static.thenounproject.com/png/6861357-200.png','News'],
                            ['https://static.thenounproject.com/png/7485677-200.png','Sports'],
                            ['https://static.thenounproject.com/png/4026107-200.png','Courses'],
                            ['https://static.thenounproject.com/png/5828364-200.png','Fashion & Beauty'],
                            ['https://static.thenounproject.com/png/7406448-200.png','Podcasts'],
                        ],

                    More:[
                            ['https://play-lh.googleusercontent.com/6am0i3walYwNLc08QOOhRJttQENNGkhlKajXSERf3JnPVRQczIyxw2w3DxeMRTOSdsY=s64-rw','YouTube Premium'],
                            ['https://play-lh.googleusercontent.com/YA5XLQwLfrZG7_yv3n00wkJ8wLE3pkyy9dlAkZb7lGNoZOssQqE-f_2w4WMmTwnP974z=w240-h480-rw','YouTube Studio'],
                            ['https://play-lh.googleusercontent.com/zD8UA5CRdiPzbvTwGKtzR4KjQpxqEK6X0tGDpzEaOo0xPEvG6HUiC_0qkpTfzpuMTqU=s64-rw','YouTube Music'],
                            ['https://play-lh.googleusercontent.com/OxNGx8LU6gm8aLfJcwcJxunvj2a7zDgDyPOD4J9HRSIc6N_1O1iZ2dLr3xQMbuMy_wE=s48-rw','YouTube Kids'],
                        ],
                        
                    Settings:[
                                ['https://static.thenounproject.com/png/7532895-200.png','Settings'],
                                ['https://static.thenounproject.com/png/7392515-200.png','Report History'],
                                ['https://static.thenounproject.com/png/7518263-200.png','Help'],
                                ['https://static.thenounproject.com/png/7366351-200.png','Send Feedback'],
                            ],
                    // LEFT_ARROW:'https://img.icons8.com/?size=512w&id=60671&format=png',
    },

    reducers:{
        addSubscription:(state,action)=>{
            state.subscriptions.push(action.payload)
        },
        removeSubscription:(state,action)=>{
            if(subscriptionOptions.length>0)
            {
                let index=state.subscriptions.indexOf(action.payload)
                state.subscriptions.pop(index)
            }
        }
    }

})

export default menuSlice.reducer
export const { addSubscription,removeSubscription } = menuSlice.actions