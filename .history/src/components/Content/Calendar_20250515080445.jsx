import React from "react";
import GridCalendar from "./GridCalendar";
import Cards from "../Cards/Cards";
import imageContent from "../../assets/image (2).png";

const Calendar = () => {
  return (
    <section className="w-full mx-auto px-5 md:px-59 pb-10 md:pb-20 border border-white">
      <div className="w-full mx-auto border border-white ">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 border border-red-400">
            <div className="flex flex-col">
                
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
