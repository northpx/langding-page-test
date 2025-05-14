import React from 'react';
import { features } from '../../constant/constant';




const FeatureNav = () => {
  return (
    <div className="bg-[#1F2023] text-white py-4 px- md:px-[236px]">
      <div className="flex space-x-6 justify-between">
        {features.map((item, idx) => (
          <div key={idx} className="relative flex flex-col items-center text-center">
            {/* Badge */}
            {item.badge && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white px-2 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}

            {/* Icon */}
            <div className="text-yellow-400 text-3xl mb-1">
              <img src={item.icon} alt="" className='h-10 w-full object-cover overflow-hidden'/>
            </div>

            {/* Label */}
            <span className="text-xs">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureNav;