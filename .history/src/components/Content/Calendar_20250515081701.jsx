import React, { useRef } from "react";
import GridCalendar from "./GridCalendar";
import Cards from "../Cards/Cards";
import imageContent from "../../assets/image (2).png";
import TitleCustom from "../Helper/TitleCustom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Calendar = () => {
  const swiperRef = useRef();
  return (
    <section className="w-full mx-auto px-5 md:px-59 pb-10 md:pb-20 border border-white">
      <div className="w-full mx-auto border border-white ">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 border border-red-400">
            <div className="flex flex-col">
              {/* {title} */}
              <div className="flex justify-between items-center">
                <TitleCustom title={"Nft Drops Calendar"} />
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
              {/* {slider} */}
              <div>
                      <Swiper
          slidesPerView={3.5}
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={8}
          className=""
        >

              <SwiperSlide key={item.id} className="">
                <div className="">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-35 md:h-60 object-cover overflow-hidden rounded-lg"
                  />
                </div>
              </SwiperSlide>
        </Swiper>
              </div>
            </div>
          </div>
          <div className="border shrink-0">
            <div className="flex justify-between gap-0 md:gap-6">
              <Cards title={"Hot nft"} image={imageContent} />
              <Cards title={"Hot nft"} image={imageContent} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
