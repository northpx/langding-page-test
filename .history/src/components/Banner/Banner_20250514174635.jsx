import React from "react";
import banner from "../../assets/86c6662b79ebea7468e4c0415707fd9f44ab6b4b.png";
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
      </div>
      <div className="w-full mx-auto">
        <FeatureNav />
      </div>
    </div>
  );
};

export default Banner;
