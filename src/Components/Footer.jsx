import React from 'react'

const Footer = () => {
    return (
        <div className='relative z-[999] top-[114.5vh] w-full h-[100vh] bg-[#080708] px-28' >
            <div className='w-full h-[70%] flex items-center justify-between border-b-2'>
                <div className='w-[40%] h-full'>
                    <h1 className='text-[8vw] leading-[9vw] tracking-tighter '>Our</h1>
                    <h1 className='text-[8vw] leading-[9vw] tracking-tighter mb-5'>Story</h1>
                    <p className='text-[2vw] leading-[3vw] tracking-tighter '>The story behind Exo Ape is one of exploration, creativity and curiosity.</p>
                </div>
                <div className='w-[60%] h-full'>
                    <video className='w-full h-[100%]' autoPlay muted loop src="https://www.exoape.com/video/video-6.mp4"></video>
                </div>
            </div>
            <div className='w-full h-[30%] flex py-5'>
                <div className='w-[20%]'>
                    <p className='font-semibold leading-9'>Willem II Singel 8</p>
                    <p className='font-semibold leading-9'>6041 HS, Roermond</p>
                    <p className='font-semibold leading-9'>The Netherlands</p>
                    <p className='font-semibold leading-9'>hello@exoape.com</p>
                </div>
                <div className='w-[20%]'>
                    <p className='font-semibold leading-9'>Work</p>
                    <p className='font-semibold leading-9'>Studio</p>
                    <p className='font-semibold leading-9'>News</p>
                    <p className='font-semibold leading-9'>Contact</p>
                </div>
                <div className='w-[50%]'>
                    <p className='font-semibold leading-9'>Behance</p>
                    <p className='font-semibold leading-9'>Dribbble</p>
                    <p className='font-semibold leading-9'>Twitter</p>
                    <p className='font-semibold leading-9'>Instagram</p>
                </div>
                <div>
                    <p className='font-semibold leading-9 mt-28'>Our Story.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer