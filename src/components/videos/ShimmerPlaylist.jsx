const ShimmerPlaylist=()=>{
    const totalCards=[1,2,3,4,5,6]
    return(
        <div className='h-full w-full px-0 py-10 flex flex-col items-center justify-center gap-0 overflow-y-scroll animate pulse sm:justify-start md:justify-start lg:justify-start animate-pulse dark:bg-black dark:animate-none'>
            {
                totalCards.map((value,index)=>(
                    <div key={index} className="h-[260px] w-[360px] ml-2 mb-8 flex flex-row justify-around lg:w-[720px] dark:animate-pulse">
                        <div className="h-[120px] w-[360px] rounded-xl bg-gray-300 lg:w-[320px] lg:h-[180px]"></div>
                        
                        <div className="h-full w-[180px] flex justify-between items-center lg:w-[380px]">
                            <div className="h-[40px] w-[40px] rounded-full bg-gray-300 hidden sm:block"/>  
                            
                            <div className="h-[40px] w-[320px] ml-6 flex flex-col justify-between lg:w-[260px]">
                                <div className="h-[15px] w-[120px] rounded-sm bg-gray-300 lg:w-[260px]"></div>
                                <div className="h-[15px] w-[120px] rounded-sm bg-gray-300 lg:w-[260px]"></div>
                            </div>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    )
}
export default ShimmerPlaylist