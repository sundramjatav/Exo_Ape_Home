import { motion } from 'framer-motion'
import React from 'react'

const Images = () => {
  return (
    <div className='w-full  bg-white text-black pl-48 px-20 pb-28'>
<div className='topdiv'>
<div className='overflow-hidden'>
     <motion.h1
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        //  viewport={{once:true}}
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 2}} className='  origin-right text-[33vh] my-10 tracking-tight'>Work</motion.h1>
     </div>
<div className='w-full flex gap-36 '>
<div className='left w-[62%] flex flex-col '> 
<img src="https://a.storyblok.com/f/133769/2880x3588/5c50befb8e/pixel-flakes-hero.jpg/m/1300x1620/filters:format(jpeg):quality(70)" alt="" />
<p className='my-2'><b>Lorem ipsum - </b> dolor sit amet consectetur, adipisicing elit. Nemo, delectus?</p>
</div>
<div className='right w-1/2'>
<div className='flex gap-3 items-center mb-16 font-semibold text-slate-700'>
        <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
            <h2>Featured Projects</h2>
        </div>
<div className='text-2xl font-medium w-[75%]  leading-normal mb-48'>
  <h2>Highlights of cases that we passionately built with forward-thinking clients and friends over the years.</h2>
</div>
<img className='w-[85%]' src="https://a.storyblok.com/f/133769/2500x3113/78edf86efd/rino-pelle-hero.jpg/m/1300x1619/filters:format(jpeg):quality(70)" alt="" />  
<p className='my-2 overflow-hidden'><b>Lorem ipsum - </b> dolor sit amet consectetur, adipisicing elit. Nemo.</p>
</div>

</div>
</div>
<div className='bottomdiv mt-40 flex w-full min-h-screen justify-start ml-14 gap-36 '>
  <div className='w-72 h-[43vh] mt-[65vh]'>
  <img className='' src="https://a.storyblok.com/f/133769/3000x3735/1ff245392f/the-st-regis-venice-hero.jpg/m/900x1121/filters:format(jpeg):quality(70) " alt="" />
  <p className='my-2 overflow-hidden'><b>Lorem ipsum - </b> dolor sit amet const.</p>
  </div>
  <div className='w-[42%] my-10 h-[83%] '>
  <img className='' src="https://a.storyblok.com/f/133769/1606x2000/09a30057bd/aebele-interiors-hero.jpg/m/900x1121/filters:format(jpeg):quality(70) " alt="" />
  <p className='my-2 overflow-hidden'><b>Lorem ipsum - </b> dolor sit amet consectetur, adipisicing elit. Nemo.</p>
  </div>
</div>
<h1 className='underline text-right text-lg mt-20 mr-56'>Browse all work</h1>
    </div>
  )
}

export default Images