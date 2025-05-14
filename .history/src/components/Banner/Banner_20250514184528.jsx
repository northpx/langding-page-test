import React from "react";
import FeatureNav from "./FeatureNav";
import BannerSlider from "./BannerSlider";
const Banner = () => {
  return (
    <div>
      <div className="aspect-[13/6] md:aspect-[32/9] relative">
        {/* <img
          src={banner}
          alt=""
          className="absolute w-full h-full object-cover overflow-hidden"
        /> */}
        <BannerSlider />

      <div className="w-full mx-auto">
        <FeatureNav />
      </div>
    </div>
  );
};

export default Banner;
