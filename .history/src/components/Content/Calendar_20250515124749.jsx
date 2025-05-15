import React, { useRef } from "react";
import Cards from "../Cards/Cards";
import imageContent1 from "../../assets/image (1).png";
import imageContent2 from "../../assets/image (2).png";
import imageContent3 from "../../assets/image (3).png";
import TitleCustom from "../Helper/TitleCustom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Calendar = () => {
  const swiperRef = useRef();
  return (
    <section className="max-w-full px-5 md:px-10 lg:px-59 pb-10 md:pb-20">
      <div className="max-w-full">
        <div className="flex flex-col gap-6 md:flex-col md:gap lg:flex-row">
          <div className="flex-1 ">
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
                        src={imageContent1}
                        alt=""
                        className="w-full h-[171px] md:h-60 object-cover md:object-top overflow-hidden rounded-lg"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="shrink-0">
            <div className="flex justify-between gap-0 md:gap-6">
              <Cards title={"Hot nft"} image={imageContent2} />
              <Cards title={"Promotion"} image={imageContent3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
