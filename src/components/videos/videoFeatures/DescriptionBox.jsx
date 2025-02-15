// import { useSelector } from 'react-redux'

import { formatYouTubeCount } from '../../../utils/constant'
import { formatDateTime } from '../../../utils/constant'
import { useEffect, useState } from 'react'

const DescriptionBox=({index,videos})=>{

    const [isExpand,setIsExpand]=useState(false)
    const [stringSize,setStringSize]=useState(150)
    const [moreLess,setMoreLess]=useState("More")
 
    useEffect(()=>{
        isExpand?setStringSize(videos[index]?.snippet?.description.length+1):setStringSize(150)
        isExpand?setMoreLess("Less"):setMoreLess("More")
    },[isExpand])

    return (
        <div className='h-max w-full p-3 rounded-lg bg-gray-200 text-gray-600 text-left dark:bg-gray-700 dark:text-white'>
            <p className='text-md font-medium text-gray-700 dark:text-gray-200'>{formatYouTubeCount(videos[index]?.statistics?.viewCount)+" views"} {formatDateTime(videos[index]?.snippet?.publishedAt)}</p>
            
            <p className='h-max w-full text-sm font-semibold cursor-pointer' onClick={()=>{setIsExpand(!isExpand)}}>
                {videos[index]?.snippet?.description.substring(0,stringSize)+" ... "+moreLess}
            </p>
        </div>
    )
}

export default DescriptionBox