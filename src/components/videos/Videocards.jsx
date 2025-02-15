import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { useYouTubeVideoApi } from '../customhooks/useYouTubeVideoApi' 
import { useYouTubeChannelApi } from '../customhooks/useYouTubeChannelApi.js' 
import  ShimmerUi  from './ShimmerUi.jsx'
import { Link } from 'react-router-dom'

import { formatYouTubeCount, YOUTUBE_API_KEY } from '../../utils/constant.js'
import { convertTo24HourFormat } from '../../utils/constant'

const Videocards=()=>{

    useYouTubeVideoApi()
    const videos=useSelector(store=>store.video)
    
    const urls = useMemo(() => {
        if (!videos) return [];
        return videos.map(
            (data) =>
                `https://www.googleapis.com/youtube/v3/channels?key=${YOUTUBE_API_KEY}&part=snippet,contentDetails,statistics&id=${data.snippet.channelId}`
        );
    },[])
    useYouTubeChannelApi(urls)
    const channels=useSelector(store=>store.channel)
    // console.log(channels)

    return videos==null?<ShimmerUi/>:
    (
        <div className='h-full w-full px-0 py-10 flex flex-wrap gap-0 overflow-y-scroll [&::-webkit-scrollbar]:hidden sm:justify-start md:justify-start lg:justify-start xl:justify-start dark:bg-black'>
            {
                videos?.map((video,index)=>(
                    <Link to={`/video/${index}/${video.id}/${null}`} key={video.id} >
                        <div className="h-[340px] w-[420px] ml-5 mb-2 flex flex-col lg:h-[280px] lg:w-[310px] overflow-x-hidden rounded-xl">
                            <img src={video?.snippet?.thumbnails?.high.url} className="h-[220px] w-[420px] rounded-xl bg-gray-300 object-cover lg:h-[170px] lg:w-[340px]"></img>
    
                            <div className='h-[200px] w-[420px] flex flex-col lg:w-[310px] overflow-y-hidden'>
                                
                                <div className='h-[200px] w-[420px] py-2 flex justify-start md:w-[420px] lg:h-[180px] lg:w-[310px]'>
                                    {
                                        channels==null?"":<img className='h-[30px] w-[30px] mr-2 object-cover rounded-full' src={channels[index]?.value?.items[0]?.snippet?.thumbnails?.default?.url} alt="profile" />
                                    } 
                                    <div className='h-[100px] w-[380px] flex flex-col md:w-[380px] lg:w-[270px]'>
                                        <p className="h-max w-[380px] rounded-lg font-semibold text-md sm:text-lg lg:text-md lg:w-[270px] xl:text-[17px] dark:text-white">{video?.snippet?.localized?.title.substring(0,50)+"..."}</p>
                                        <p className="h-max w-[380px] text-sm font-sans font-medium text-gray-500 lg:text-sm lg:w-[270px] dark:text-gray-400">{video?.snippet?.channelTitle}</p>
                                        <p className="h-max w-[380px] text-sm font-sans font-medium text-gray-500 lg:text-sm lg:w-[270px] dark:text-gray-400">{formatYouTubeCount(video?.statistics?.viewCount)} views . {convertTo24HourFormat(video?.snippet?.publishedAt)} hours ago</p>
                                    </div>
                                </div>

                            </div> 
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}
export default Videocards