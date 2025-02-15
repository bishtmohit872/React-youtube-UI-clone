import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addVideo,removeVideo } from '../../utils/globalStore/videoSlice.js'
import { YOUTUBE_API_KEY } from '../../utils/constant.js'

export const useYouTubeVideoApi=()=>{
    const dispatch=useDispatch()

    const fetchData= async ()=>{
        const response=await fetch(`https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&part=snippet,statistics&chart=mostPopular&maxResults=20`)
        const data=await response.json()
        dispatch(addVideo(data?.items))
    }
    useEffect(()=>{
        fetchData()
    },[])
}

