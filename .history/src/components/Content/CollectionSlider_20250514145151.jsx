import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { imageCollection } from "../../constant/constant";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import TitleCustom from "../Helper/TitleCustom";

const CollectionSlider = () => {
  const swiperRef = useRef();

  const sliderSettings = {
    440: {
      slidesPerView: 3.5,
      spaceBetween: 8,
    },
    680: {
      slidesPerView: 3.5,
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
        <h3 className="italic font-[900] text-[#FFC700] text-2xl md:text-3xl leading-8 md:leading-12 uppercase tracking-tight">
          New Nft Collections
        </h3>
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
      <div>
        <Swiper
          slidesPerView={3}
          breakpoints={sliderSettings}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className=""
        >
          {imageCollection.map((item) => {
            return (
              <SwiperSlide key={item.id} className="w-full h-50">
                <img
                  src={item.image}
                  alt=""
                  className="max-w-full h-35 md:h-60 overflow-hidden object-cover rounded-lg "
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default CollectionSlider;
