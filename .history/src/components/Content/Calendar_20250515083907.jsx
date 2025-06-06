import React, { useRef } from "react";
import Cards from "../Cards/Cards";
import imageContent from "../../assets/image (1).png";
import TitleCustom from "../Helper/TitleCustom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Calendar = () => {
  const swiperRef = useRef();
  return (
    <section className="max-w-full mx-auto px-5 md:px-59 pb-10 md:pb-20 border border-white">
      <div className="max-w-full mx-auto border border-white ">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex-1 border border-red-400">
            <div className="flex flex-col gap-2">
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
              <div className="max-w-auto">
                <Swiper
                  slidesPerView={1}
                  modules={[Navigation]}
                  onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  spaceBetween={0}
                  className=""
                >
                  <SwiperSlide className="">
                    <div>
                      <img
                        src={imageContent}
                        alt=""
                        className="w-full h-35 md:h-60 object-fill overflow-hidden rounded-lg"
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
