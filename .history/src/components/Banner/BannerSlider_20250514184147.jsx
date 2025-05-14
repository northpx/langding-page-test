import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";


const BannerSlider = () => {
  const pagination = {
    clickable: true,
  };
  return (
    <div>
      <Swiper
        modules={[Pagination]}
        pagination={pagination}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* <div className="h-64 bg-blue-300">Slide 1</div> */}
                <div className="aspect-[13/6] md:aspect-[32/9] relative">
                  {/* <img
                    src={banner}
                    alt=""
                    className="absolute w-full h-full object-cover overflow-hidden"
                  /> */}
                  <BannerSlider />
                </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-64 bg-green-300">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-64 bg-red-300">Slide 3</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
