import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { imageCollection } from "../../constant/constant";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CollectionSlider = () => {
  const swiperRef = useRef();

  const sliderSettings = {
    440: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  };

  return (
    <section className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h3 className="italic font-[900] text-[#FFC700] text-2xl leading-8 uppercase tracking-tight">New Nft Collections</h3>
        <div className="flex gap-2">
          <a
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-1 border-none rounded-xl md:rounded-2xl outline-none bg-[#383A42]"
          >
            {/* <ChevronLeft className="m-2"/> */}
            <IoIosArrowBack size={24} />
          </a>
          <a
            onClick={() => swiperRef.current?.slideNext()}
            className="p-1 border-none rounded-2 md:rounded-2xl outline-none bg-[#383A42]"
          >
            {/* <ChevronRight className="m-2"/> */}
            <IoIosArrowForward size={24} />
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
        >
          {imageCollection.map((item) => {
            return (
              <SwiperSlide key={item.id} className="w-full h-50">
                <img
                  src={item.image}
                  alt=""
                  className="object-cover w-full h-60 overflow-hidden rounded-lg"
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
