import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { RouterProvider,createBrowserRouter,Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import { optionStore,persistor } from './utils/globalStore/optionsStore.js'
import { PersistGate } from 'redux-persist/integration/react';

import Videocards from './components/videos/Videocards.jsx'
import Video from './components/videos/Video.jsx'
import Profile from './components/userprofile/Profile.jsx'
import SearchResults from './components/videos/SearchResults.jsx'
import ChannelProfilePage from './components/ChannelProfile/ChannelProfilePage.jsx'
import Error from './components/ErrorPage/Error.jsx'



const AppRoute=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Videocards/>,
        errorElement:<Error/>,
      },
      {
        path:"/profile",
        element:<Profile/>,
        errorElement:<Error/>,
      },
      {
        path:"/video/:index/:id/:title",
        element:<Video/>,
        errorElement:<Error/>,
      },
      {
        path:"/search/results/:string",
        element:<SearchResults/>,
        errorElement:<Error/>,
      },
      {
        path:"/channel/profile/:index",
        element:<ChannelProfilePage/>,
        errorElement:<Error/>,
      }
    ],
    errorElement:<Error/>
  },

  
])


createRoot(document.getElementById('root')).render(
  <Provider store={optionStore}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={AppRoute}><App/></RouterProvider>
    </PersistGate>
  </Provider >,
)
