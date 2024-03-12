import gsap, { ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Page1 = () => {
    var img = useRef(null)
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.set(img.current, {
            opacity: .8
        })
        gsap.to(img.current, {
            scrollTrigger: {
                trigger: img.current,
                start: "0% 0%",
                scrub: .5
            },
            ease: "liener",
            opacity: 0.2
        })
    })
    return (
        <div className='w-full min-h-screen relative bg-zinc-900 overflow-hidden'>
            <img ref={img} data-scroll data-scroll-speed="-1" className='opacity-[80%] w-full h-full object-cover object-top' src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/1920x2716/filters:format(webp):quality(70)" alt="" />
            <div className='w-full h-[180vh] absolute top-[14%]'>
                <div className='px-28 py-36 font-["TWK Lausanne 400"]'>
                    <h2 className=' ml-3 w-[45%] text-2xl leading-tighter  font-medium mb-20'>Global Digital Design Studio Partnering With <br /> Brand and business thats creates exceptional <br /> experiences where people live,workand unwind.</h2>
                    <h1 className='text-[32vh] leading-none tracking-tighter font-medium'>Digital</h1>
                    <h1 className='text-[32vh] leading-none tracking-tighter font-medium'>Design</h1>
                    <h1 className='text-[32vh] leading-none tracking-tighter font-medium'>Experience</h1>
                    <h3 className='ml-3 text-[3.5vh] mt-36 w-[40%] font-[500] leading-snug  '>We explore and push the boundaries of digital for brands and businesses that strive to enhance people's lives through exceptional experiences lives through life , Start with a click.</h3>
                    <div className='mt-12 mx-3 w-full flex justify-between text-lg font-medium'>
                        <div><h1 className='underline  mt-7'>The Studio</h1></div>
                        <div className='flex justify-center gap-40 w-1/2'>
                            <div className='flex flex-col gap-2'>
                                <h1>Work</h1>
                                <h1>Studio</h1>
                            <h1>News</h1>
                                <h1>Contact</h1>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1>hello@exoape.com</h1>
                                <h1>+31 772 086 200</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page1