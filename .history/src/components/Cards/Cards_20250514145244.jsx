import React from 'react'
import TitleCustom from '../Helper/TitleCustom'

const Cards = ({title, image}) => {
  return (
    <div className='w-full'>
        <div className='flex flex-col  gap-2'>
            <TitleCustom title={title}/>
            <div className=''>
                <img src={image} alt="" className='w-full h-60 overflow-hidden object-cover rounded-lg'/>
            </div>
        </div>
    </div>
  )
}

export default Cards