import { useYouTubePlaylistChannel } from "../../customhooks/useYouTubePlaylistChannel"
import { useSelector,useDispatch } from "react-redux"
import { formatYouTubeCount,convertTo24HourFormat } from "../../../utils/constant"
import ShimmerPlaylist from "../ShimmerPlaylist"

const Playlist=({channelId})=>{
    
    useYouTubePlaylistChannel(channelId)
    const playlistChannels=useSelector(store=>store.playlistChannel.playlistChannel)
    const playlist=useSelector(store=>store.playlistChannel.playlist)
    // console.log("this is modified playlist:",playlistChannels,playlist)
    
    return playlist!=null?(
        <div className="h-max w-full flex flex-col justify-between overflow-y-hidden">
            {
                playlist.map((playlistItem,index)=>(
                    <div key={playlistItem.id} className="h-max w-full flex items-center justify-start p-1">
                        
                        <img className="h-[90px] w-[160px] object-cover rounded-lg" src={playlistItem?.snippet?.thumbnails?.medium?.url} alt="images" />
                        
                        <div className='h-[90px] w-full ml-2 flex flex-col overflow-hidden dark:text-white'>
                            <p className="h-max w-full rounded-lg font-semibold text-md">{playlistItem?.snippet?.localized?.title}</p>
                            <p className="h-max w-max text-sm font-sans font-medium text-gray-500 lg:text-sm lg:w-[270px] dark:text-gray-300">{playlistItem?.snippet?.channelTitle}</p>
                            
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
    ):<ShimmerPlaylist/>
}

export default Playlist