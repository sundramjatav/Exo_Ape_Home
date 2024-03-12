import { motion } from 'framer-motion'
import React from 'react'

const landingpage = () => {

    return (
        <div className='w-full bg-zinc-900' >
            <div className="bgimage">
                <img data-scroll data-scroll-speed="-1.2" className='opacity-[80%]' src="https://a.storyblok.com/f/133769/2500x2626/63a902ce2b/exo-ape-studio-hero.jpg/m/1920x2017/filters:format(jpeg):quality(70)" sizes="(max-width: 1024px) 1024px, (max-width: 1280px) 1280px, 1920px" width="2500" height="2626" alt="exo ape" loading="eager"></img>
            </div>
            <div className='contain w-[88%] absolute top-72 left-28'>
                <div className="top-page flex justify-between">
                    <div className="left flex flex-col gap-10">
                        <div className='text-[10vw]  tracking-tight leading-none '>
                            {["Building", "Digital", "Presence"].map((item, index) => {
                                return <motion.h1
                                    initial={{ y: "100%", rotate: "7", opacity: 0 }}
                                    whileInView={{ y: "0", rotate: "0", opacity: 1 }}
                                     viewport={{once:true}}
                                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                                    key={index} className='origin-right'>{item}</motion.h1>
                            })}

                        </div>
                        <h2 className='ml-3 tracking-wide'> Digital experiences with maximum emotional impact</h2>
                    </div>
                    <div className="right mt-96 ">
                        <h2 className='text-zinc-300 mt-5'>Scroll to explore</h2>
                    </div>
                </div>
                <div className='bottom-page flex justify-end mr-32 mt-64'>
                    <div className=" w-1/2 p-11  flex flex-col gap-8 ">
                        <h3 className='text-2xl '>We explore and push the boundaries of digital for brands and businesses that strive to enhance people's lives through exceptional experiences.</h3>
                        <p className=' text-lg text-[#d0d0d6]'>For over a decade, we've been using profound design aesthetics, meticulously crafted details, and surprising interactions to create digital experiences that spark conversation, inspire action, and drive desirability.</p>
                        <a className='underline text-xl'> Our Story</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default landingpage