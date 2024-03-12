import React from 'react'
import Page1 from './HomePage/Page1'
import Nav from './HomePage/Nav'
import Images from './HomePage/Images'
import Video from './HomePage/Video'
import Img_Video from './HomePage/Img_Video'
import Footer from './Footer'
import LastPage from './LastPage'
const Home = () => {

  return (
         <div className='w-full min-h-screen  text-white'>
      <Page1/>
      <Nav/>
      <Images/>
      <Video/>
      <Img_Video/>
      <LastPage/>
      <Footer/>
    </div>
   
  )
}

export default Home