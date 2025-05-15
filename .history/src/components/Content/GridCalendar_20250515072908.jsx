import React from 'react'
import image1 from '../../assets/image (2).png';
import image2 from '../../assets/image (3).png';
import Cards from '../Cards/Cards';
import CustomSlider from '../Sliders/CustomSlider';

const GridCalendar = () => {
  return (
      <div className='grid grid-cols-1 gap-y-10 md:grid md:grid-cols-3 md:gap-4'>
          <div className='w-full col-span-2'>
            <CustomSlider />
          </div>
          <div className='w-full col-span-1'>
              <div className=''>
                <Cards title={'Hot Nft'} image={image1}/>
              </div>
              <div className=''>
                <Cards title={'Promotion'} image={image2}/>
              </div>
          </div>
          <div className='w-full col'>

          </div>
      </div>
  )
}

export default GridCalendar