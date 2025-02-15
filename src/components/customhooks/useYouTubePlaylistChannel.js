import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPlaylist,addPlaylistChannel } from "../../utils/globalStore/playlistChannelSlice";
import { YOUTUBE_API_KEY } from "../../utils/constant";

export const useYouTubePlaylistChannel=(channel_id)=>{

    const dispatch=useDispatch()

    const fetchPlaylist=async()=>{
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlists?key=${YOUTUBE_API_KEY}&part=snippet,contentDetails&channelId=${channel_id}&maxResults=10`)
        const data =  await response.json()
        dispatch(addPlaylist(data?.items))

        let urls=[]

        data?.items?.map((playlist,index)=>{
            urls.push(`https://www.googleapis.com/youtube/v3/channels?key=${YOUTUBE_API_KEY}&part=snippet,contentDetails,statistics&id=${playlist?.snippet?.channelId}`)
        })
        return urls
    }

    const fetchChannels=async(urls)=>{
        const responses=await Promise.allSettled(urls.map(url => fetch(url).then(res => res.json())));
        dispatch(addPlaylistChannel(responses))
    }

    const execute=async()=>{
        const urls=await fetchPlaylist()
        await fetchChannels(urls)
    }

    useEffect(()=>{
        execute()
    },[])
}

