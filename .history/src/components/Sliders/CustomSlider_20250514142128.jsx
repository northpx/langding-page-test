import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"
import { Navigation } from 'swiper/modules';
import img from '../../assets/image (1).png';

const CustomSlider = () => {
  return (
    <div className='w-full'>
        <div className='flex flex-col gap-2 md:gap-4'>
            <div className='flex justify-between items-center'>
                <span className="italic font-[900] text-[#FFC700] text-2xl leading-8 uppercase tracking-tight">Nft drops calendar</span>
                {/* {button silder} */}
                <div className='flex gap-2'>
                
                </div>
            </div>
            {/* {swiper slider} */}
            <div>
                  <Swiper
                      slidesPerView={1}
                      modules={[Navigation]}
                  >
                    <SwiperSlide>
                        <img src={img} alt="" className='w-full h-60 object-fit overflow-hidden rounded-lg'/>
                    </SwiperSlide>

                  </Swiper>
            </div>
        </div>
    </div>
  )
}

export default CustomSlider