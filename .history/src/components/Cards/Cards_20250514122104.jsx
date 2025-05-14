import React from 'react'

const Card = ({title, image}) => {
  return (
    <div className='w-full'>
        <div className='flex flex-col  gap-4'>
            <div className=''>{title}</div>
            <div className=''>
                <img src={image} alt="" className='w-full h-60 overflow-hidden object-cover rounded-lg'/>
            </div>
        </div>
    </div>
  )
}

export default Card