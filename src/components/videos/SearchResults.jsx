import { useMemo } from "react"
import { useParams,Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useYouTubeSearchApi } from '../customhooks/useYouTubeSearchApi'
import { useYouTubeChannelApi } from "../customhooks/useYouTubeChannelApi"
import { YOUTUBE_API_KEY } from "../../utils/constant"
import { formatDateTime,formatYouTubeCount,convertTo24HourFormat } from "../../utils/constant"
import ShimmerPlaylist from "./ShimmerPlaylist"

const SearchResults=()=>{

    const {setSideBar} = useOutletContext()
    
    useEffect(()=>{
        setSideBar((prev)=>!prev)
        return (()=>{
            setSideBar((prev)=>!prev)
        })
    },[])

    const {string}=useParams()
    useYouTubeSearchApi(string)
    const searchResults=useSelector(store=>store.searchResult)
    console.log("search hua kya",searchResults)

    const urls = useMemo(() => {
            if (!searchResults) return [];
            return searchResults.map((data) =>
                `https://www.googleapis.com/youtube/v3/channels?key=${YOUTUBE_API_KEY}&part=snippet,contentDetails,statistics&id=${data.snippet.channelId}`
            );
          }, [searchResults])
 
 
    useYouTubeChannelApi(urls) 
    const channels=useSelector(store=>store.channel)

    return searchResults!=null?(
        <div className="h-full w-full py-6 px-4 flex flex-col overflow-y-scroll dark:bg-black text-white">

            {  
                searchResults.map((searchResult,index)=>(

                    <Link key={searchResult.id.videoId} to={`/video/${index}/${searchResult.id.videoId}/${searchResult?.snippet?.title}`}>
                        <div className="h-[25vw] mb-4 flex items-start justify-center lg:h-[300px] lg:w-full">
                            
                            <img className="h-[100%] w-[50%] object-cover rounded-xl lg:h-[250px] lg:w-[450px]" src={searchResult?.snippet?.thumbnails?.high?.url}/>
                            

                            <div className="h-max w-[50%] pt-1 pl-4 pr-6 text-xs sm:text-xl lg:text-xl">
                                <p className="font-medium">{searchResult?.snippet?.title}</p>
                                <p className="sm:text-sm lg:text-md">{formatYouTubeCount(channels[index]?.value?.items[0]?.statistics?.viewCount)} views .{formatDateTime(searchResult?.snippet?.publishedAt)}</p>
                                
                                <div className="py-1 flex items-center justify-start text-xs">
                                    {
                                        channels==null?  (<img className='h-[20px] w-[20px] cursor-pointer object-cover rounded-full dark:invert' src="https://static.thenounproject.com/png/7503665-200.png" alt="profile"/>) :
                                        (<img className='h-[20px] w-[20px] mr-2 object-cover rounded-full sm:h-[30px] sm:w-[30px]' src={channels[index]?.value?.items[0]?.snippet?.thumbnails?.default?.url} alt="profile" />)    
                                    } 
                                    <p className="sm:text-sm">{channels[index]?.value?.items[0]?.snippet?.title}</p>
                                </div>

                                <div className="h-[20px] w-[100%] overflow-hidden text-xs">
                                    {searchResult?.snippet?.description}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    ):(<ShimmerPlaylist/>)
}

export default SearchResults