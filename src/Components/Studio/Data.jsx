import { motion } from 'framer-motion'
import React from 'react'

const Data = () => {
    
  return (
    <div className='w-full py-10 bg-[#FFFFFF] text-black'>
        <div className='w-1/2 mx-auto'>
        {["Data","Informs,","Emotion","Converts"].map((item,index)=>{
            return (<div className='masker overflow-hidden'>
                <motion.h1 
                initial={{y:"100%",rotate:"8deg",opacity:0}}
                 whileInView={{y:"0",rotate:"0deg", opacity:1}} 
                //  viewport={{once:true}}
                transition={{ease:[0.76, 0, 0.24, 1],duration:1}}
                key={index}
                  className='text-[10vw] origin-right flex items-center font-extralight tracking-tighter leading-[10vw] '>
                    {index===2 &&(<span className='inline-block h-3 w-28 bg-black mt-10 mr-10'></span>)}
                    {item}
                    </motion.h1>
            </div>
            )
        })
    }
        </div>
        <div className='flex w-full px-32 justify-around my-20 items-start '>
          <h2 className='flex items-center gap-3'> <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg> What we believe</h2>
          <p className='w-1/3 text-zinc-600 tracking-tighter  mt-10 text-2xl leading-snug'>We believe that the most effective outcomes are achieved when data-driven insights are used to inspire emotive experiences. Leading to increased brand loyalty, long-term customer engagement, and higher conversion rates.</p>
          <h5 className='w-44 mt-44 text-xs leading-snug'>
      "Our approach is informed by insight and research, but at the end of the day, we focus on making people feel."

    </h5>
        </div>
     </div>
  )
}

export default Data