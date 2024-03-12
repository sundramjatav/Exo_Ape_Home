import { motion } from 'framer-motion'
import React, { useRef } from 'react'

const Design = () => {
    var scrollRef = useRef(null)
  return (
    <div className='w-full h-[100vh] bg-black py-32'>
        <div className='w-1/2 mx-auto'>
                {["Design &","Technology","Enthusiasts"].map((i, index) => (
                    <div ref={scrollRef} className='master overflow-hidden'>
                        <motion.h1
                            initial={{ y: "100%", rotate: "10deg", overflow: "hidden" }}
                            whileInView={{ y: "0", rotate: "0deg" ,overflow: "none"}}
                            viewport={{ once: scrollRef }}
                            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                            className='text-[10vw] leading-[10vw] tracking-tighter '>
                            {i}
                        </motion.h1>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Design