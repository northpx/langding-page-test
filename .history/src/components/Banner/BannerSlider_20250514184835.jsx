import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import banner from "../../assets/86c6662b79ebea7468e4c0415707fd9f44ab6b4b.png";


const BannerSlider = () => {
  const pagination = {
    clickable: true,
  };
  return (
    <div>
      <Swiper
        modules={[Pagination]}
        pagination={pagination}
        className="mySwiper w-full "
      >
        <SwiperSlide className="aspect-[13/6] md:aspect-[32/9] relative">
                  <img
                    src={banner}
                    alt=""
                    className="absolute w-full h-full object-cover overflow-hidden"
                  />
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
