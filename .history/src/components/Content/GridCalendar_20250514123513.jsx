import React from 'react'
import CustomSlider from '../Helper/CustomSlider'

import image1 from '../../';
import image2 from '../../assets/image (3).png';
import Cards from '../Cards/Cards';

const GridCalendar = () => {
  return (
      <div className='grid grid-cols-1 md:grid md:grid-cols-2 gap-4'>
          <div className='border'>
            <CustomSlider />
          </div>
          <div className='grid grid-cols-2 gap-4'>
              <div className='border'>
                <Cards title={'Hot Nft'} image={image1}/>
              </div>
              <div className='border border-red-400'>
                <Cards title={'Promotion'} image={image2}/>
              </div>
          </div>
      </div>
  )
}

export default GridCalendar