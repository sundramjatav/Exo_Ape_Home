import React from 'react'

const detail = () => {
  return (
    <div className='flex justify-between px-32 py-28 '>
      <div className='left flex flex-col gap-5'>
      <p className='mb-16'>Ready for lift-off? Ping, tweet, message or poke <br /> — and we will get back as soon as possible.</p>
      <a href="" className='underline'>hello@exoape.com</a>
      <a href="">+31 772 086 200</a>
      </div>
      <div className='right mt-16 mr-6 flex flex-col gap-14 items-start font-light'>
      <a href=''>
        Willem II Singel 8<br/>
        6041 HS, Roermond<br/>
        The Netherlands
      </a>
      <a href="" className='underline'>View on maps</a>
      </div>
    </div>
  )
}

export default detail