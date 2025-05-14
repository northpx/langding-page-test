import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"
import { Navigation } from 'swiper/modules';
import img from '../../assets/image (1).png';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CustomSlider = () => {
    const swiperRef = useRef();
  return (
    <div className='w-full'>
        <div className='flex flex-col gap-2 md:gap-4'>
            <div className='flex justify-between items-center'>
                <span className="italic font-[900] text-[#FFC700] text-2xl md:text-4xl leading-8 uppercase tracking-tight">Nft drops calendar</span>
                {/* {button silder} */}
                <div className='flex gap-2'>
                <a
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="p-1 md:p-2 border-none rounded-md md:rounded-[12px] outline-none bg-[#383A42]"
                          >
                            {/* <ChevronLeft className="m-2"/> */}
                            <IoIosArrowBack size={24} className="text-white/60"/>
                          </a>
                          <a
                            onClick={() => swiperRef.current?.slideNext()}
                            className="p-1 md:p-2 border-none rounded-md md:rounded-[12px] outline-none bg-[#383A42]"
                          >
                            {/* <ChevronRight className="m-2"/> */}
                            <IoIosArrowForward size={24} className="text-white/60"/>
                          </a>
                
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