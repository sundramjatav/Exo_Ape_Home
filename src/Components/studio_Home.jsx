import React from 'react'
import Nav from './HomePage/Nav'
import Landingpage from './Studio/landingpage'
import About from './Studio/About'
import Content from './Studio/content'
import Data from './Studio/Data'
import LastPage from './LastPage'
import Footer from './Footer'
import Page2 from './Studio/Page2'
import Design from './Studio/Design'
import Img from './Studio/Img'

const studio_Home = () => {
  return (
    <div className='relative  w-full text-[#F8F8F8] min-h-full '>
        <Nav/>
      <Landingpage/>
      <About/>
      <Content/>
      <Data/>
      <Img/>
      <Design/>
      <Page2/>
      <LastPage/>
      <Footer/>
    </div>
  )
}

export default studio_Home