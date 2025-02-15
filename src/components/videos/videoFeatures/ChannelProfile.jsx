import { formatYouTubeCount } from "../../../utils/constant";

const ChannelProfile=({index,videos,channels})=>{
    return(
        <div className='h-full w-[40%] flex items-center justify-start overflow-x-hidden md:w-[150px]'>

            <img className='h-[40px] w-[40px] mr-2 object-cover rounded-full' src={channels[index]?.value?.items[0]?.snippet?.thumbnails?.default?.url} alt="profile" /> 

            <div className='h-max'>
                <p className='text-sm font-bold whitespace-nowrap capitalize dark:text-white'>{channels[index]?.value?.items[0]?.snippet?.title}</p>
                <p className='text-xs whitespace-nowrap dark:text-gray-200'>{formatYouTubeCount(channels[index]?.value?.items[0]?.statistics?.subscriberCount)} Subscriber</p>
            </div>

        </div>
    )
}

export default ChannelProfile