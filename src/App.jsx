import React from 'react'
import Page1 from './Components/HomePage/Page1'
import Nav from './Components/HomePage/Nav'
import LocomotiveScroll from 'locomotive-scroll'
import Images from './Components/HomePage/Images'
import Video from './Components/HomePage/Video'
import Img_Video from './Components/HomePage/Img_Video'
import Footer from './Components/Footer'
import LastPage from './Components/LastPage'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import News_Home from './Components/news_Home'
import Contact_Home from './Components/Contact_Home'
import Studio_Home from './Components/studio_Home'

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen  text-white'>
   <Routes>
    <Route path="/"  element={<Home/>} />
    <Route path="/News"  element={<News_Home/>} />
    <Route path="/Contact"  element={<Contact_Home/>} />
    <Route path="/Studio"  element={<Studio_Home/>} />
   </Routes>
    </div>
  )
}

export default App