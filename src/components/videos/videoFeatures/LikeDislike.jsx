import { useState,useEffect } from "react"
import { useSelector } from "react-redux"

import { formatYouTubeCount } from "../../../utils/constant"

const LikeDislike=({index})=>{

    const [like,setLike]=useState(false)
    const [disLike,setDisLike]=useState(false)
    const videos=useSelector(store=>store.video)

    useEffect(()=>{
        like==disLike?(setLike(false),setDisLike(false)):""
    },[like,disLike])
    

    return(
        <div className="h-[40px] w-[150px] ml-[10px] bg-gray-200 rounded-full flex items-center justify-center">
            <img className={`h-[25px] w-[25px] ml-1  ${like?"":"invert"} drop-shadow-lg cursor-pointer`} src="https://static.thenounproject.com/png/7526695-200.png" onClick={()=>{
                setLike(!like)
            }}/>
            <p className="px-2 py-1 text-md border-r-1 border-gray-300">{formatYouTubeCount(videos[index]?.statistics?.likeCount)}</p>
            <img className={`h-[25px] w-[25px] scale-y-[-1] ml-2 ${disLike?"":"invert"} drop-shadow-lg cursor-pointer`} src="https://static.thenounproject.com/png/7526695-200.png" onClick={()=>{
                setDisLike(!disLike)
            }}/>
        </div>
    )
}
export default LikeDislike