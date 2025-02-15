import { useState,useEffect } from 'react'
import Header from './components/header/Header.jsx'
import Sideoptions from './components/sidebar/Sideoptions.jsx'

import { Outlet,useNavigate } from 'react-router-dom'

import { auth } from './utils/firebase.js'
import { onAuthStateChanged } from "firebase/auth";

import { useDispatch } from 'react-redux'
import { addUser } from './utils/globalStore/userSlice.js'


const App=()=>{


  const [showSidebar,setShowSidebar]=useState(true)
  const [hideSideBar,setHideSideBar]=useState(false)
  const navigate=useNavigate()
  const dispatch=useDispatch()

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        
        console.log("signin")
        const user=auth.currentUser
        dispatch(addUser(user.toJSON()))

      } else {
        console.log("signOut")
        // dispatch(removeUser())
        // navigate("/")     //ye manhoos signout hai jo mere kaam ko bigaad rha hai
      }
    });
  },[])
  
 
  return (
    <>
      <Header setShow={setShowSidebar}/>
      <div className='h-[100%] w-full flex items-center justify-between [&::-webkit-scrollbar]:hidden'>
        <Sideoptions sidebar={showSidebar} hidesidebar={hideSideBar}/>
        <Outlet context={{setSideBar:setHideSideBar}}/>
      </div>
    </>
  )
}
 
export default App
