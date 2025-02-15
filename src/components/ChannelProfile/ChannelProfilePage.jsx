import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { formatYouTubeCount,formatDateTime,convertTo24HourFormat } from "../../utils/constant"
import PlaylistCards from '../videos/videoFeatures/playlistCards'

const ChannelProfilePage=()=>{
    const {index}=useParams()
    const channels=useSelector(store=>store.channel)

    const [isExpand,setIsExpand]=useState(false)
    const [stringSize,setStringSize]=useState(20)
    const [moreLess,setMoreLess]=useState("More")
    
    const playlistChannels=useSelector(store=>store.playlistChannel.playlistChannel)
    const playlist=useSelector(store=>store.playlistChannel.playlist)

    useEffect(()=>{
            isExpand?setStringSize(channels[index]?.value?.items[0]?.snippet?.description.length+1):setStringSize(150)
            isExpand?setMoreLess("Less"):setMoreLess("More")
        },[isExpand])

    return(

        <div className='h-full w-full px-3 rounded-lg text-gray-600 text-left flex flex-col items-center justify-center lg:flex-col overflow-hidden dark:bg-black '>
            <div className='h-max w-full rounded-lg text-gray-600 text-left flex flex-col items-center justify-center lg:flex-row overflow-hidden'>
                
                <img className='h-[30vw] w-[30vw] object-cover rounded-full lg:h-[250px] lg:w-[250px]' src={channels[index]?.value?.items[0]?.snippet?.thumbnails?.medium?.url} alt="profile" />

                <div className='text-center p-4 lg:h-max lg:w-[60vw] lg:text-left dark:text-white'>

                    <p className='text-4xl font-bold whitespace-nowrap capitalize'>{channels[index]?.value?.items[0]?.snippet?.title}</p>

                    <p className='text-md font-bold whitespace-nowrap capitalize'>From: {formatDateTime(channels[index]?.value?.items[0]?.snippet?.publishedAt)}</p>

                    <p className='text-lg dark:text-white'>{formatYouTubeCount(channels[index]?.value?.items[0]?.statistics?.subscriberCount)} Subscriber</p>

                    <p className='text-lg'>Handle:{channels[index]?.value?.items[0]?.snippet?.customUrl}</p>
                    
                    <p className='h-max w-[50vw] pt-4 text-sm font-semibold cursor-pointer text-justify lg:w-[400px]' onClick={()=>{setIsExpand(!isExpand)}}>
                        {channels[index]?.value?.items[0]?.snippet?.description.substring(0,stringSize)+" ... "+moreLess}
                    </p>

                </div>
            </div>

            <div className="h-[500px] w-full mt-10 flex justify-between flex-wrap overflow-y-scroll md:justify-around lg:justify-start [&::-webkit-scrollbar]:hidden dark:text-white">
                {
                    playlist.map((playlistItem,index)=>(
                        <div key={playlistItem.id} className="h-[40vw] w-[35vw] flex flex-col items-center justify-start md:h-[250px] md:w-[200px] lg:mr-2 lg:w-[250px]">
                            
                            <img className="h-[20vw] w-[40vw] object-cover rounded-lg" src={playlistItem?.snippet?.thumbnails?.medium?.url} alt="images" />
                            
                            <div className='h-[90px] w-[150px] ml-2 flex flex-col overflow-hidden lg:items-start lg:-ml-22 lg:h-[300px] '>
                                <p className="h-max w-full rounded-lg font-semibold text-md dark:text-white">{playlistItem?.snippet?.localized?.title}</p>

                                <p className="h-max w-max text-sm font-sans font-medium text-gray-500 lg:text-sm lg:w-[300px] dark:text-gray-300">{playlistItem?.snippet?.channelTitle}</p>
                                
                                <p className="h-max w-max text-sm font-sans font-medium text-gray-500 lg:text-xs lg:w-[270px] dark:text-gray-300">
                                    {
                                        formatYouTubeCount(playlistChannels[index]?.value?.items[0]?.statistics?.viewCount)
                                    } Views .
                                    {
                                        convertTo24HourFormat(playlistChannels[index]?.value?.items[0]?.snippet?.publishedAt)
                                    } Hours ago
                                </p>    
                                
                            </div>
                        </div>
                    ))
                }
                        
            </div>
            
        </div>

    )
}

export default ChannelProfilePage