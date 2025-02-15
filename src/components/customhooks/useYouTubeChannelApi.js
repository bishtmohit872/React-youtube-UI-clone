import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addChannel } from '../../utils/globalStore/channelSlice';

export const useYouTubeChannelApi=(urls)=>{
    const dispatch=useDispatch()
    const fetchChannels=async()=>{
        const responses=await Promise.allSettled(urls.map(url => fetch(url).then(res => res.json())));
        dispatch(addChannel(responses))
        // console.log("render channel api")
    }
    useEffect(()=>{
        fetchChannels()
    },[urls])
    
}







// const fetchData= async ()=>{
//     const data=await fetch(`https://www.googleapis.com/youtube/v3/channels?key=AIzaSyBUIiT2Wx2rwkG1QevcGAO7cvrAZmDmR10&part=snippet,contentDetails,statistics&id=${channelId}`)
//     const response=await data.json()
//     setChannel(response?.items?.snippet?.thumbnails?.default)
// }