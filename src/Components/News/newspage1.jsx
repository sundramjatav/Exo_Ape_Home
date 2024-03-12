import React from 'react'
import Videohome from '../../Video/news-revolt.mp4'

const newspage1
  = () => {
    return (
      <div className='relative w-full h-screen bg-black overflow-hidden'>
        <div className=' w-full h-full'>
          <video src={Videohome} loop muted autoPlay></video>
        </div>
        <div className=' overflow-hidden w-full h-full pl-[30vw] absolute z-10 left-28 mx-auto top-0 flex items-start gap-5 justify-center py-40 flex-col'>
          <div className='flex items-center gap-3 mb-20'>
            <img className='rounded-full h-14' src="https://a.storyblok.com/f/133769/x/3982bd5abb/avatar-awwwards.svg" alt="" />
            <h4>Awwwards</h4>
          </div>
          <h1 className='w-full pr-60 text-[3.3vw] '>  Revolt — Changing the landscape of merchandising. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, adipisci. Holographik x Exo Ape. </h1>
          <h3 className='underline cursor-pointer'>Read case stud y</h3>
        </div>
      </div>
    )
  }

export default newspage1
