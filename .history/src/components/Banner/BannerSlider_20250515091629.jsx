import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import banner from "../../assets/86c6662b79ebea7468e4c0415707fd9f44ab6b4b.png";

const BannerSlider = () => {
  const pagination = {
    clickable: true,
  };
  return (
    <div className="">
      <div className="">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={pagination}
          className="aspect-[13/6] md:aspect-[32/9] relative"
        >
          <SwiperSlide>
            <div className="">
              <img
                src={banner}
                alt=""
                className="absolute w-full h-full object-cover md:object-[100%_40%] overflow-hidden"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src={banner}
                alt=""
                className="absolute w-full h-full object-cover md:object-[100%_40%] overflow-hidden"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src={banner}
                alt=""
                className="absolute w-full h-full object-cover md:object-[100%_40%] overflow-hidden"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src={banner}
                alt=""
                className="absolute w-full h-full object-cover md:object-[100%_40%] overflow-hidden"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src={banner}
                alt=""
                className="absolute w-full h-full object-cover md:object-[100%_40%] overflow-hidden"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src={banner}
                alt=""
                className="absolute w-full h-full object-cover overflow-hidden"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src={banner}
                alt=""
                className="absolute w-full h-full object-cover overflow-hidden"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src={banner}
                alt=""
                className="absolute w-full h-full object-cover overflow-hidden"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src={banner}
                alt=""
                className="absolute w-full h-full object-cover overflow-hidden"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BannerSlider;
