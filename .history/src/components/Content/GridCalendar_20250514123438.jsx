import React from 'react'
import CustomSlider from '../Helper/CustomSlider'
import Card from '../Helper/Card'
import image1 from '../../assets/image (2).png';
import image2 from '../../assets/image (3).png';

const GridCalendar = () => {
  return (
      <div className='grid grid-cols-1 md:grid md:grid-cols-2 gap-4'>
          <div className='border'>
            <CustomSlider />
          </div>
          <div className='grid grid-cols-2 gap-4'>
              <div className='border'>
                <Card title={'Hot Nft'} image={image1}/>
              </div>
              <div className='border border-red-400'>
                <Card title={'Promotion'} image={image2}/>
              </div>
          </div>
      </div>
  )
}

export default GridCalendar