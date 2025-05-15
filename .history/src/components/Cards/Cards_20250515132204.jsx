import React from "react";
import TitleCustom from "../Helper/TitleCustom";

const Cards = ({ title, image }) => {
  return (
    <div className="flex flex-col gap-2">
      <TitleCustom title={title} />
      <div className="aspect-[1/1] md:aspect-auto overflow-hidden rounded-lg">
        <img
          src={image}
          alt=""
          className="w-42 h-42 md:w-full md:h-50 lg:w-60 lg:h-60 overflow-hidden object-cover hover:scale-110 transition-all duration-200"
        />
      </div>
    </div>
  );
};

export default Cards;
