import React from 'react'

const Page2 = () => {
  return (
    <div className='w-full h-[130vh] bg-black'>
        <div data-scroll data-scroll-speed= "0.1" className='w-1/4 ml-96'>
            <p className='text-[24px] text-zinc-300 font-semibold leading-[2.3vw]'>We are a team* of like-minded design enthusiasts and tech aficionados that explore the digital frontier with grit and dedication. Intrigued by beauty, fascinated by technology and fuelled with an everlasting devotion to digital craftsmanship and meaningful aesthetics.</p>
        </div>
        <div className='w-full h-[80vh] flex items-center justify-center gap-40'>
            <div className='w-1/3 h-[55vh] mt-36 mr-20'>
                <img className='h-full w-full object-cover' src="https://a.storyblok.com/f/133769/1920x1280/b13859fdad/exo-ape-studio-mood-team-04.jpg/m/650x433/filters:format(webp):quality(70)" alt="" />
            </div>
            <div  data-scroll data-scroll-speed= "0.1"  className='w-1/5 h-full'>
                <div className='w-full h-[80%] mb-7'>
                    <img className='h-full w-full object-cover' src="https://a.storyblok.com/f/133769/1200x1790/ac2f6934ee/exo-ape-studio-mood-team-03.jpg/m/650x970/filters:format(webp):quality(70)" alt="" />
                </div>
                <div className='w-full h-[2px] bg-zinc-500 mb-5'></div>
                <div>
                    <p className='text-xs leading-none'>*We believe in a fluid team approach that allows us to bring together the best designers, developers and agencies in the world in order to serve the needs of today’s clients.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page2