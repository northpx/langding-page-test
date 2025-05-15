import React from "react";
import FeatureNav from "./FeatureNav";
import BannerSlider from "./BannerSlider";
const Banner = () => {
  return (
    <div className="max-w-full">
      <BannerSlider />
      <div className="w-full mx-auto">
        <FeatureNav />
      </div>
    </div>
  );
};

export default Banner;
