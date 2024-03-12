import React from 'react'
import Nav from './HomePage/Nav'
import NewsPage1 from './News/newspage1'
import Content from './News/Content'

import LastPage from './LastPage'
import Footer from '../Components/Footer'
const news_Home = () => {
  return (
    <div className=' relative w-full min-h-screen bg-white '>
        <Nav/>
        <NewsPage1/>
        <Content/>
        <LastPage/>
        <Footer/>
    </div>
  )
}

export default news_Home