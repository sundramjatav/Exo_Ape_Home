import { motion } from 'framer-motion'
import LocomotiveScroll from 'locomotive-scroll'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
const Img_Video = () => {
   const scroll = new LocomotiveScroll();
   var scrollRef = useRef(null)
  return (
    <div className='w-full min-h-screen relative'>
           <div className=' relative w-full bg-[#FFFFFF] min-h-screen py-40 '>
      <div className='images w-full flex justify-center items-center'>
         <img data-scroll data-scroll-speed='0.2'  className='w-[26vw]' src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/550x940/filters:format(jpeg):quality(70)" alt="" />
      </div>
      <img className='h-64 absolute top-48 right-[30%]' data-scroll data-scroll-speed='0.1' data-scroll-direction="horizontal" src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/550x781/filters:format(jpeg):quality(70)" alt="" />
         <video className='h-60 absolute top-[30%] left-80' muted autoPlay loop src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"/>
        <div className='absolute w-full flex justify-center -bottom-44 gap-80  '>
        <img  className='h-64 w-96 ' src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/550x369/filters:format(jpeg):quality(70)" alt="" />
         <video data-scroll data-scroll-speed='0.2' data-scroll-direction="horizontal" className='h-96  w-96' muted autoPlay loop src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"/>
        </div>
    </div>
    <div className=' bg-white text-black flex flex-col items-center justify-center py-40 '>
    <div className='flex gap-3 items-center mb-16 font-semibold '>
        <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
            <h3>In the media</h3>
        </div>
        <div className='w-1/2 mx-auto mt-10 mb-20 text-center font-semibold'>
                {["Spread ", "the News"].map((i, index) => (
                    <div ref={scrollRef} className='master overflow-hidden'>
                        <motion.h1
                            initial={{ y: "100%", rotate: "10deg", overflow: "hidden" }}
                            whileInView={{ y: "0", rotate: "0deg", overflow: "none" }}
                            viewport={{ once: scrollRef }}
                            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                            className='text-[10vw] leading-[10vw] tracking-tighter text-black font-[600]'>
                            {i}
                        </motion.h1>
                    </div>
                ))}
            </div>
           <h2 className='text-[3.5vh] tracking-tight font-medium text-center my-10'>Find out more about our work on these <br /> leading design and technology platforms.</h2>
        <Link to={"/News"} >
        <h1 className='underline text-right text-lg my-5  '>Browse all news</h1>
        </Link>
     </div>
    </div>
  )
}

export default Img_Video