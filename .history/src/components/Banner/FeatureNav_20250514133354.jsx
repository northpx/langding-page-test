import React from 'react';
import { features } from '../../constant/constant';




const FeatureNav = () => {
  return (
    <div className="bg-[#1F2023] text-white py-4 px-1 md:px-[236px] md:py-6 overflow-x-auto">
      <div className="flex space-x-6 justify-between">
        {features.map((item, idx) => (
          <div key={idx} className="relative flex flex-col items-center text-center gap-2">
            {/* Badge */}
            {item.badge && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-[5px] md:text-xs leading-2 uppercase text-white px-0 md:px-2 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}

            {/* Icon */}
            <div className="text-yellow-400 text-3xl mb-1">
              <img src={item.icon} alt="" className='h-7 md:h-10 w-full object-cover overflow-hidden'/>
            </div>

            {/* Label */}
            <span className="text-white text-[10px] leading-3 uppercase">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureNav;