const ShimmerUi=()=>{
    const totalCards=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    return(
        <div className='h-full w-full px-0 py-10 flex flex-wrap justify-center gap-0 overflow-y-scroll animate pulse sm:justify-start md:justify-start lg:justify-start animate-pulse dark:bg-black dark:animate-none'>
            {
                totalCards.map((value,index)=>(
                    <div key={index} className="h-[260px] w-[360px] ml-5 mb-8 flex flex-col justify-around lg:w-[320px] dark:animate-pulse">
                        <div className="h-[200px] w-[360px] rounded-xl bg-gray-300 lg:w-[320px] lg:h-[180px]"></div>
                        
                        <div className="h-[40px] w-[370px] flex justify-between items-center lg:w-[320px]">
                            <div className="h-[42px] w-[42px] rounded-full bg-gray-300 "/>  
                            
                            <div className="h-[40px] w-[320px] flex flex-col justify-between lg:w-[260px]">
                                <div className="h-[15px] w-[310px] rounded-sm bg-gray-300 lg:w-[260px]"></div>
                                <div className="h-[15px] w-[310px] rounded-sm bg-gray-300 lg:w-[260px]"></div>
                            </div>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    )
}
export default ShimmerUi