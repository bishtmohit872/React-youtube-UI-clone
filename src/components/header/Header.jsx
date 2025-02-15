
import { useRef, useState } from 'react';
import { LOGO,MENU,SEARCH,MIC,DOT_MENU } from '../../utils/constant'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

import { auth } from '../../utils/firebase';
import { signInWithPopup,GoogleAuthProvider } from "firebase/auth";

const Header=({setShow})=>{

    const [query,setQuery]=useState("")
    const userData=useSelector(store=>store.user.data)
    // console.log("userData:",userData.photoURL)
    
    // console.log("this is user Data:",userData)
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    const signInHandler=()=>{
        signInWithPopup(auth,provider)
    }
    
    return (
        <div className="h-[60px] w-full p-2 bg-white flex items-center justify-between gap-1 sticky top-0 z-50 dark:bg-black">

            <div className='h-[60%] w-[160px] border-white flex items-center justify-start sm:justify-around dark:bg-black'>
                <img className='h-[25px] w-[20%] hidden sm:block dark:invert' src={MENU} alt="OPTIONS" onClick={ ()=>{setShow((prevState)=>!prevState)} }/>
                <Link to="/"><img className='h-[22px] w-[35px] ml-2 mr-2' src={LOGO} alt="LOGO"/></Link>
                <Link to="/"><p className='text-md uppercase font-medium tracking-tighter dark:text-white'>Youtube</p></Link>
            </div>
            
            <div className='h-[90%] w-[160px] grow flex items-center justify-end md:justify-center dark:bg-black'>
                <div className='h-[40px] w-[150px] px-4 mr-1 border-2 rounded-full flex items-center justify-end border-gray-400
                                 overflow-x-hidden sm:border-2 sm:w-[300px] md:w-[350px] lg:w-[500px] dark:border-white'>
                    <input type='text' value={query} onChange={(e)=>{setQuery(e.target.value)}} placeholder="Search" className='h-[30px] w-[90px] px-1 text-xs overflow-x-hidden sm:w-full sm:border-r-2 sm:border-gray-400 outline-none dark:bg-black dark:text-white'/>
                    {
                        query!=""?<Link to={`/search/results/${query}`}><img className='h-[20px] w-[30px] ml-2 cursor-pointer dark:invert' src={SEARCH} alt="SEARCH"/></Link>:<img className='h-[20px] w-[30px] ml-2 cursor-pointer dark:invert' src={SEARCH} alt="SEARCH"/>  
                        // search.current!=null?console.log("null nhi hai"):console.log(search.current)
                    }
                     
                </div>
                <img className='w-[35px] ml-1 p-1 bg-gray-200 rounded-full cursor-pointer dark:invert dark:bg-gray-400' src={MIC} alt="MIC"/>
            </div>
            
            <div className='h-[90%] w-[100px] flex items-center justify-end dark:bg-black'>
                <img className="h-[30px] w-[30px] mr-1 dark:invert" src={DOT_MENU} alt="user"/>

                <div className='h-[50px] w-[50px] flex items-center justify-evenly rounded-full font-semibold'>
                    {
                        userData==null?(
                            <img className='h-[30px] w-[30px] cursor-pointer object-cover rounded-full dark:invert' src="https://static.thenounproject.com/png/7503665-200.png" alt="profile" onClick={()=>{signInHandler()}}/>
                        ):
                        (
                            <Link to="/profile">
                                <img className='h-[30px] w-[30px] cursor-pointer object-cover rounded-full' src={userData?.photoURL} alt="profile"/>
                            </Link>
                        )
                    }
                </div> 

            </div>
        </div>
    )
}

export default Header