import React from "react";
import FeatureNav from "./FeatureNav";
import BannerSlider from "./BannerSlider";
const Banner = () => {
  return (
    <div>
    <BannerSlider />
      <div className="w-full mx-auto">
        <FeatureNav />
      </div>
    </div>
  );
};

export default Banner;
