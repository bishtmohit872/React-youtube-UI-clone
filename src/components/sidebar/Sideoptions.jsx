import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const SideOptions=({sidebar,hidesidebar})=>{
   
    // const mainMenu=useSelector(store=>store.menu)
    const mainMenu=useSelector(store=>store.menu)
    
    return(
        // <div className={`h-full w-[100px] flex flex-col items-center overflow-y-scroll overflow-x-hidden md:w-[200px] [&::-webkit-scrollbar]:hidden ${sidebar?'block':'hidden'} `}>
        <div className={`h-full w-[100px] flex flex-col items-center overflow-y-scroll overflow-x-hidden md:${sidebar?'w-[200px]':'w-[85px]'} [&::-webkit-scrollbar]:hidden ${hidesidebar?'hidden':'block'} dark:bg-black`}>
           {
            Object.keys(mainMenu).map((tag,index)=>(
                // <ul key={index} className={`w-[85px] pt-2 pb-8 flex flex-col items-center ${index!=0?"hidden":""} md:block md:ml-2 md:border-b-1 md:border-gray-300 md:w-[180px] md:items-start md:p-1`}>
                <ul key={index} className={`w-[85px] pt-2 pb-2 flex flex-col items-center ${index!=0?"hidden":""} md:${sidebar?'block md:ml-2 md:border-b-1 md:border-gray-500 md:w-[180px] md:items-start md:p-1':'w-[85px] pt-2 pb-4 flex flex-col items-center ${index!=0?"hidden":""}'} dark:text-white `}>

                    <div className={`mt-4 pt-1 px-4 mb-2 font-bold text-xl text-left flex items-center rounded-lg ${index==1?"cursor-pointer hover:bg-gray-100 dark:hover:bg-white dark:hover:text-black":""}`}>
                        {
                            <p className="text-lg font-medium pb-1 mr-2">{index!=0?tag.charAt(0).toUpperCase()+tag.slice(1):""}</p>
                        }
                        {
                            index==1?<img src="https://img.icons8.com/?size=512w&id=60671&format=png" className="inline h-[10px] w-[15px] dark:invert dark:hover:invert"/>:""
                        }
                    </div>
                    
                    {
                        
                        Object.values(mainMenu[tag]).map((option,index)=>(
                            <Link to="/" key={index}>
                                {/* <li className={`w-[35px] py-2 px-0 flex flex-col items-center justify-center rounded-lg md:py-2 md:px-4 md:flex-row md:w-[165px] md:justify-start md:hover:bg-gray-100`}> */}
                                <li className={`w-[75px] py-2 px-0 flex flex-col items-center justify-center rounded-lg hover:bg-gray-100 md:${sidebar?'md:py-2 md:px-4 md:flex-row md:w-[165px] md:justify-start md:hover:bg-gray-100':'w-[35px] py-2 px-0 flex flex-col items-center justify-center'} dark:hover:bg-black dark:hover:invert`}>
                                    {/* <img src={option[0]} alt='icon' className="h-[25px] w-[25px] drop-shadow-md md:h-[24px] md:w-[24px] md:mr-6"/>  */}
                                    <img src={option[0]} alt='icon' className={`h-[25px] w-[25px] md:${sidebar?'md:h-[24px] md:w-[24px] md:mr-6 md:drop-shadow-xl':"h-[25px] w-[25px]"} dark:invert`}/> 
                                    <p className="text-xs md:text-sm dark:text-white">{option[1]}</p> 
                                </li>
                            </Link>    
                        ))    
                    }

                </ul>
            ))
           }
        </div>
    )
}
 
export default SideOptions