import React from 'react'

const Banner = () => {
  return (
    <div>
            <div className="aspect-[13/6] md:aspect-[3/1] relative">
      <img src={banner} alt="" className='absolute top-[110px] w-full h-full object-cover overflow-hidden'/>
    </div>
    </div>
  )
}

export default Banner