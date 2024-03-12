import { motion } from 'framer-motion'
import gsap, { Expo, Power4 } from 'gsap/all'
import React, { useEffect, useRef, useState } from 'react'

const image = () => {
// const [move, setmove] = useState({top:"50%",left:"60%"})
const img = useRef(null);
useEffect(()=>{
  window.addEventListener("mousemove",function(e){
   if (e.clientX<window.innerWidth/2) {
    var val = gsap.utils.mapRange(0,window.innerWidth/2,0,1,e.clientX);
   const lerp = (x, y, a) => x * (1 - a) + y * a;
   let move = lerp(-200,0,val)

   gsap.to(img.current,{
    x:move+"px",
    ease:Power4,
    duration:1.5
   })
   }
   else{
    var val = gsap.utils.mapRange(window.innerWidth/2,window.innerWidth,1,0,e.clientX);
   const lerp = (x, y, a) => x * (1 - a) + y * a;
   let move = lerp(200,0,val)

   gsap.to(img.current,{
    x:move+"px",
    ease:Power4,
    duration:1.5
   })
   }
  })
})
  return (
    <div className='w-full  relative overflow-hidden '>
  <img ref={img}  className='fixed z-[1] top-1/2 left-[60%] -translate-x-[50%] -translate-y-[50%] w-96' src="https://a.storyblok.com/f/133769/758x1134/002f93a9b3/exo-ape-contact.jpg/m/660x987/filters:format(jpeg):quality(90)" srcset="https://a.storyblok.com/f/133769/758x1134/002f93a9b3/exo-ape-contact.jpg/m/270x404/filters:format(jpeg):quality(90) 270w, https://a.storyblok.com/f/133769/758x1134/002f93a9b3/exo-ape-contact.jpg/m/337x504/filters:format(jpeg):quality(90) 337w, https://a.storyblok.com/f/133769/758x1134/002f93a9b3/exo-ape-contact.jpg/m/660x987/filters:format(jpeg):quality(90) 660w" sizes="(max-width: 1024px) 270px, (max-width: 1280px) 337px, 660px" width="758" height="1134" alt="exo ape contact" loading="eager"></img>
    </div>
  )
}

export default image