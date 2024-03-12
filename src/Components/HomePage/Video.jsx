import gsap, { Power4, ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react'

const Video = () => {
  var image = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(image.current, {
      scrollTrigger: {
        trigger: image.current,
        start: "0 60%",
        scrub: 1,
        // markers: true
      },
      ease: Power4,
      clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)"
    })
  })
  return (

    <div className=' relative w-full min-h-screen  text-white '>
      <div className='relative w-full h-screen bg-[#0D0E13]'>
        <div className='absolute top-0 z-[999] w-full h-screen bg-[#0d0e136f] opacity-80'>
          <div className='h-full py-12 px-44 w-full flex flex-col items-center justify-between'>
            <div className='flex gap-3 items-center mb-16 font-medium  justify-center'>
              <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
              <h3 className='opacity-80 '>Work in motion</h3>
            </div>
            <div className='flex justify-between w-full text-[20vh] '>
              <h1>Play</h1>
              <h1>Reel</h1>
            </div>
            <div className='text-center font-medium'>
              <h3>Our work is best experienced in motion. Don’t <br /> forget to put on your headphones.</h3>
            </div>
          </div>
        </div>
        <div className='w-[100vw] h-[120vh] absolute'>
          <video ref={image} className='h-full w-[100%]' style={{ clipPath: "polygon(25% 0%, 75% 0, 75% 100%, 25% 100%)" }} src="https://player.vimeo.com/progressive_redirect/playback/603779353/rendition/1080p/file.mp4?loc=external&log_user=0&signature=337d5ef928573dea5d91cba21ed640625325b0d757fcece6e45c633f87dff887" muted loop autoPlay />
        </div>

      </div>

    </div>
  )
}

export default Video