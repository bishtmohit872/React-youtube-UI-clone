import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addResult } from "../../utils/globalStore/searchSlice"
import { YOUTUBE_API_KEY } from "../../utils/constant"

export const useYouTubeSearchApi=(string)=>{
    const dispatch=useDispatch()
    const fetchData= async ()=>{
        const response=await fetch(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&q=${string}&type=video&part=snippet&maxResults=10`)
        const data=await response.json()
        dispatch(addResult(data?.items))
        // console.log("render youtube search api")
    }
    useEffect(()=>{
        fetchData()
    },[])
}


 