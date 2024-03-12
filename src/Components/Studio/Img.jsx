import gsap, { Power4, ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef } from 'react'

const Img = () => {
    var image = useRef(null)
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(image.current,{
            scrollTrigger:{
                trigger:image.current,
                start:"0 100%",
                scrub:1,
                // markers: true
            },
            ease: Power4,
            clipPath:"polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)"
        })
    })
  return (
    <div className='w-full h-[140vh] bg-white'>

    <div ref={image} style={{clipPath:"polygon(25% 0%, 75% 0, 75% 100%, 25% 100%)"}} className='absolute w-full'>
    <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/2500x1667/5224da023b/exo-ape-studio-mood.jpg/m/1920x1280/filters:format(webp):quality(70)" alt="" />
    </div>
        <div className='w-full h-[60%] bg-white'></div>
        <div className='w-full h-[40%] bg-black'></div>
    </div>
  )
}

export default Img
