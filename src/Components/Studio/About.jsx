import React from 'react'
import LocomotiveScroll from 'locomotive-scroll'

const About = () => {
    return (
        <div className='relative bg-zinc-100 w-full min-h-screen pb-40'>
            <div className='images relative w-full h-[35vw]'>
                <img data-scroll data-scroll-speed=".2" className=' absolute h-full left-[8%] -top-[23%]' src="https://a.storyblok.com/f/133769/1500x2123/637f850b2b/exo-ape-studio-collage-1.jpg/m/650x920/filters:format(webp):quality(70)" alt="" />
                <img className='absolute w-[33vw] bottom-16 right-[24%]' src="https://a.storyblok.com/f/133769/1500x1003/2581b1d31d/exo-ape-studio-collage-2.jpg/m/650x435/filters:format(webp):quality(70)" alt="" />
                <img data-scroll data-scroll-speed="0.1" className='absolute h-1/2 -bottom-20 right-64 ' src="https://a.storyblok.com/f/133769/569x809/dd3f38466e/exo-ape-studio-collage-3.jpg/m/650x924/filters:format(webp):quality(70)" alt="" />
            </div>
            <div className='w-full px-20 text-black  mt-20 flex gap-32 items-center '>
                <div className='left flex gap-5 items-center ml-10  '>
                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg> 
                    <h1>Partners</h1>
                </div>
               
                    <div className='w-1/2 '>
                        <h1 className='text-5xl  leading-snug font-["lausanne-400"]  '>We partner with brands and businesses that create exceptional experiences where people live, work and unwind.</h1>
                        <h4 className='text-lg opacity-50 mb-1 mt-16 '>Interior Design & Furniture</h4>
                        <h4 className='text-lg opacity-50 mb-1'>Architecture & Real Estate</h4>
                        <h4 className='text-lg opacity-50 mb-1'>Hospitality, Travel & Tourism</h4>

                </div>
            </div>

        </div>
    )
}

export default About