import { motion } from 'framer-motion'
import React, { useRef } from 'react'

const LastPage = () => {
    var scrollRef = useRef(null)
    return (
        <div data-scroll data-scroll-speed="0.5" className='absolute z-[9999] w-full h-[150vh] bg-white'>
            <div className='w-1/2 mx-auto mt-10 mb-20'>
                {["Awards &", "Publications"].map((i, index) => (
                    <div ref={scrollRef} className='master overflow-hidden'>
                        <motion.h1
                            initial={{ y: "100%", rotate: "10deg", overflow: "hidden" }}
                            whileInView={{ y: "0", rotate: "0deg", overflow: "none" }}
                            viewport={{ once: scrollRef }}
                            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                            className='text-[10vw] leading-[10vw] tracking-tighter text-black font-[500]'>
                            {i}
                        </motion.h1>
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-center gap-[230px] text-black'>
                <div>
                    <p className='text-[18px] leading-8 text-gray-700'>Exo Ape</p>
                    <p className='text-[18px] leading-8 text-gray-700'>Webby Nominee '23</p>
                    <p className='text-[18px] leading-8 text-gray-700'>The Webby Awards</p>
                    <br />
                    <p className='text-[18px] leading-8 text-gray-700'>Ali Ali</p>
                    <p className='text-[18px] leading-8 text-gray-700'>Site of the Month</p>
                    <p className='text-[18px] leading-8 text-gray-700'> Awwwards</p>
                    <br />
                    <p className='text-[18px] leading-8 text-gray-700'>Ottografie</p>
                    <p className='text-[18px] leading-8 text-gray-700'>Photography Site of the Year</p>
                    <p className='text-[18px] leading-8 text-gray-700'>CSSDA</p>
                </div>
                <div>
                    <h1 className='text-2xl leading-10'>Awwwards <span className='text-[15px]'>x25</span></h1>
                    <h1 className='text-2xl leading-10'>The FWA <span className='text-[15px]'>x07</span></h1>
                    <h1 className='text-2xl leading-10'>CSSDA <span className='text-[15px]'>x06</span></h1>
                    <h1 className='text-2xl leading-10'>Behance <span className='text-[15px]'>x22</span></h1>
                    <h1 className='text-2xl leading-10'>Commarts <span className='text-[15px]'>x04</span></h1>
                    <h1 className='text-2xl leading-10'>Typewolf <span className='text-[15px]'>x02</span></h1>
                </div>
            </div>
        </div>
    )
}

export default LastPage