import React from 'react'
import Nav from './Contact/Nav'
import Marque from './Contact/marque'
import Detail from './Contact/detail'
import Image from './Contact/image'
import Footer from './Footer'
import LastPage from './LastPage'

const Contact_Home = () => {
  return (
    <div className='w-full min-h-screen bg-slate-900 text-white relative '>
      <Nav/>
      <Marque/>
      <Detail/>
      <Image/>
      <LastPage/>
      <Footer/>
    </div>
  )
}

export default Contact_Home