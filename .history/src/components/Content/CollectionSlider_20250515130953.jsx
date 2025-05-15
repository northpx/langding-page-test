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
      slidesPerView: 4,
      spaceBetween: 8,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 16,
    },
  };

  return (
    <section className="flex flex-col gap-2">
      <div className="flex justify-between items-center pt-10 md:pt-15 lg:pt-20 px-5 md:px-0">
        <TitleCustom title={"new nft collections"} />
        <div className="flex gap-2">
          <a
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-1 md:p-2 border-none rounded-md md:rounded-[12px] outline-none bg-[#383A42] cursor-pointer text-white/60 hover:text-re"
          >
            {/* <ChevronLeft className="m-2"/> */}
            <IoIosArrowBack size={24} className="" />
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
      <div className="flex pl-5 md:pl-0">
        <Swiper
          slidesPerView={3.5}
          breakpoints={sliderSettings}
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={8}
          className=""
        >
          {imageCollection.map((item) => {
            return (
              <SwiperSlide key={item.id} className="">
                <div className="">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-35 md:h-60 object-cover overflow-hidden rounded-lg"
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
