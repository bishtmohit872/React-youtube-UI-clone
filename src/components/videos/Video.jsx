import { useEffect, useMemo } from 'react'
import { useOutletContext,useParams,Link } from 'react-router-dom' 
import { useSelector } from 'react-redux'

import VideoFrame from './videoFeatures/videoFrame'
import SubscriptionDropdown from './videoFeatures/SubscriptionDropdown'
import ChannelProfile from './videoFeatures/ChannelProfile'
import LikeDislike from './videoFeatures/LikeDislike'
import ShareVideo from './videoFeatures/ShareVideo'
import MoreOption from './videoFeatures/MoreOption'
import DownloadVideo from './videoFeatures/DownloadVideo'
import DescriptionBox from './videoFeatures/DescriptionBox' 
import PlaylistCards from './videoFeatures/playlistCards'
import CommentBox from './videoFeatures/commentBox'



const Video=()=>{

    const {index,id,title}=useParams()
    const {setSideBar} = useOutletContext()
    
    useEffect(()=>{
        setSideBar((prev)=>!prev)
        return (()=>{
            setSideBar((prev)=>!prev)
        })
    },[])
    
    const videos=useSelector(store=>store.video)
    const channels=useSelector(store=>store.channel)

    return (
        <div className='h-full w-full overflow-y-scroll [&::-webkit-scrollbar]:hidden relative dark:bg-black'>
            
            <div className='h-[100%] w-full flex flex-col overflow-y-scroll [&::-webkit-scrollbar]:hidden lg:flex-row'>

                <div className='h-max w-[100vw] pt-4 flex flex-col px-8'>

                    <div className='h-[50vw] w-full rounded-xl lg:h-[35vw]'>
                        <VideoFrame id={id}/>
                    </div>
                    
                    <div className='h-max w-full mt-4 text-[3.2vw] sm:text-[3vw] font-bold text-gray-800 md:text-[22px] lg:w-[90%] dark:text-white'>
                        {title=="null"?videos[index].snippet.title:title}
                    </div>

                    <div className='h-max w-full py-1 flex flex-col items-center justify-between sm:h-[60px] sm:flex-row lg:text-sm '>
                        <div className='h-[60px] w-full flex items-center justify-between sm:h-[60px] sm:w-[60%] sm:justify-start'>
                            <Link to={`/channel/profile/${index}`}><ChannelProfile index={index} channels={channels}/></Link>
                            <SubscriptionDropdown/>
                        </div>

                        <div className='h-[60px] w-full flex items-center justify-start sm:h-[60px] sm:justify-end'>
                            <LikeDislike index={index} videos={videos}/>
                            <ShareVideo/>
                            <DownloadVideo/>
                            <MoreOption/>
                        </div>
                    </div>

                    <DescriptionBox index={index} videos={videos}/>
                    
                    <div className='h-max w-full mt-6 hidden lg:block'>
                        <CommentBox commentCount={videos[index]?.statistics?.commentCount}/>
                    </div>
                </div>

                <div className='h-max w-full py-6 px-6 lg:h-max lg:w-[680px] lg:px-5 relative'> {/*playlist*/}
                    <PlaylistCards channelId={channels[index]?.value?.items[0]?.id}/>
                </div>
                
                <div className='h-max w-full mt-2 lg:hidden px-6'>
                    <CommentBox commentCount={videos[index]?.statistics?.commentCount}/>
                </div>
 
            </div>

        </div>        
    )
}

export default Video