import React from "react";
import TitleCustom from "../Helper/TitleCustom";

const Cards = ({ title, image }) => {
  return (
    <div className="flex flex-col gap-2">
      <TitleCustom title={title} />
      <div className="aspect-[1/1]">
        <img
          src={image}
          alt=""
          className="as overflow-hidden object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Cards;
