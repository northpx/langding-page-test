import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { imageCollection } from "../../constant/constant";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import TitleCustom from "../Helper/TitleCustom";


const CollectionSlider = () => {
  const swiperRef = useRef();

  const sliderSettings = {
    440: {
      slidesPerView: 3.2,
      spaceBetween: 8,
    },
    680: {
      slidesPerView: 3.2,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 16,
    },
  };

  return (
    <section className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <TitleCustom title={'new nft collections'}/>
        <div className="flex gap-2">
          <a
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-1 md:p-2 border-none rounded-md md:rounded-[12px] outline-none bg-[#383A42]"
          >
            {/* <ChevronLeft className="m-2"/> */}
            <IoIosArrowBack size={24} className="text-white/60" />
          </a>
          <a
            onClick={() => swiperRef.current?.slideNext()}
            className="p-1 md:p-2 border-none rounded-md md:rounded-[12px] outline-none bg-[#383A42]"
          >
            {/* <ChevronRight className="m-2"/> */}
            <IoIosArrowForward size={24} className="text-white/60" />
          </a>
        </div>
      </div>
      <div className="relative z-100">
        <Swiper
          slidesPerView={3.2}
          breakpoints={sliderSettings}
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className=""
        >
          {imageCollection.map((item) => {
            return (
              <SwiperSlide key={item.id} className="w-full h-50">
                {/* <img
                  src={item.image}
                  alt=""
                  className="max-w-full h-35 md:h-60 object-cover overflow-hidden rounded-lg "
                /> */}
                <div className="rounded-xl overflow-hidden border-2 border-blue-500">
                  <img
                    src={item.image}
                    alt={`NFT ${item}`}
                    className="w-full h-35 md:h- object-cover"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default CollectionSlider;
