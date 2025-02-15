import { useDispatch } from 'react-redux';
import { removeUser } from '../../utils/globalStore/userSlice'
import {  useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux'

import { auth } from '../../utils/firebase';
import { signOut,GoogleAuthProvider } from "firebase/auth";


const Profile=()=>{

    const user=useSelector(store=>store.user)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    
    const signOutHandler=()=>{
        signOut(auth).then(() => {
            dispatch(removeUser())
        }).catch((error) => {
        });
        navigate("/")
    }


    return (
        <div className='h-full w-[calc(100%-85px)] py-20 px-8 bg-gray-100 flex flex-col md:items-center dark:bg-black dark:text-white'>

            <div className='w-full flex items-center justify-between border-b-1 md:w-[540px]'>
                <h1 className='mb-2 text-4xl font-medium font-sans capitalize'>profile</h1>
                <button className='h-[40px] w-max p-1 px-4 text-center bg-gray-500 rounded-full text-white' onClick={()=>{signOutHandler()}}>Sign Out</button>
            </div>

            <div className='h-[200px] w-full mb-2 flex items-center justify-evenly border-b-1 bg-gray-200 md:w-[540px] rounded-xl'>
                
                <img className='h-[150px] w-[150px] cursor-pointer object-cover rounded-full' src={user?.data?.photoURL}alt="profile"/>

                <div className='h-[140px] py-4 flex flex-col items-left justify-evenly text-sm font-serif text-white'>
                    <p className='w-max p-1 px-4 text-center rounded-full bg-gray-500 uppercase'>{user?.data?.displayName}</p>
                    <p className='w-max p-1 px-4 text-center bg-gray-500 rounded-full'>Language:English</p>
                    <p className='w-max p-1 px-4 text-center bg-gray-500 rounded-full'>{user?.data?.email}</p>
                </div>
            </div>

            <div className='h-[150px] w-full px-2 flex flex-col items-left justify-between bg-gray-200 md:w-[540px] rounded-xl'>
                
                <div className='mt-1 px-1 w-full flex items-center justify-between rounded-lg dark:text-black'>
                    <img className='h-[40px] w-[40px] cursor-pointer object-cover rounded-full' src={user?.data?.photoURL}alt="profile"/>
                    <p>Visiblity:  Public</p>
                </div>

                <div className='h-[150px] w-full flex flex-col items-center justify-between'>
                    
                    <div className='h-[50px] w-full px-1 flex items-center justify-between'>
                        <input type="text" className='h-[40px] w-[420px] px-2 outline-none' placeholder='Share BTS, Shorts and lots more...'/>

                        <button className='p-2 px-3 bg-gray-300 rounded-md dark:text-black'>Post</button>
                    </div>

                    <div className='h-[50px] px-1 w-full flex items-center justify-evenly'>
                        {
                            user?.options.map((option,index)=>(
                                <div key={index} className='flex items-center'>
                                    <img src={option[0]} className='h-[20px] w-[20px]'/>
                                    <p className='px-2 py-1 text-sm hover:bg-gray-500 hover:text-white rounded-md dark:text-black'>{option[1]}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>

        </div> 
    )
}

export default Profile