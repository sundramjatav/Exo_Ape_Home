import { motion } from 'framer-motion'
import React from 'react'

const marque = () => {
  return (
    <div className='w-full pt-48 whitespace-nowrap overflow-hidden  flex   '> 
      <motion.div className='line text-[9vw] font-light leading-none tracking-tight' initial = {{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity  , ease:"linear", duration:30}}  >
          Get in touch · 保持联系 · Ponerse en contacto · Neem contact op ·&nbsp;
        </motion.div>
        <motion.div className='line text-[9vw] font-light leading-none tracking-tight' initial = {{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity  , ease:"linear", duration:30}}  >
          Get in touch · 保持联系 · Ponerse en contacto · Neem contact op ·&nbsp;
        </motion.div>
        
      </div>
  )
}

export default marque