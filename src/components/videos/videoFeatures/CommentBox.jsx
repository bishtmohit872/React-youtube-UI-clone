import {useState} from 'react'

const CommentBox=({commentCount})=>{

    const [show,setShow]=useState(false)

    return(
        <div className="h-max w-full dark:text-white">
            <div className="h-max py-2 flex items-center">
                <p className="text-xl font-bold">{commentCount} Comments</p>
                <p className="ml-8 text-lg">Sort by</p>
            </div>

            <div className="py-4 flex items-center justify-between">
                <img className='h-[40px] w-[40px] cursor-pointer object-cover rounded-full dark:invert' src="https://static.thenounproject.com/png/7503665-200.png" alt="profile"/>

                <div className="h-[60px] w-[94%] flex flex-col" onClick={()=>{setShow(!show)}}>
                    <input className="h-[20px] w-full mt-1 ml-2 py-5 border-b-1 border-gray-300 outline-none lg:ml-0" type="text" placeholder="Add a comment..."/>
                    
                    <div className={`h-max w-full py-1 ${show?'flex':'hidden'} items-center justify-end dark:text-black`}>
                        <button className="py-1 px-4 mr-4 hover:bg-gray-300 rounded-full text-md font-semibold dark:text-white">cancel</button>
                        <button className="py-1 px-4 bg-gray-300 rounded-full">comment</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CommentBox