import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import { menuLink } from "../../constant/constant";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleMenu = () => setIsOpenMenu(!isOpenMenu);
  return (
    <nav className="z-50">
      <div className="container mx-auto relative ">
        {/* {navbar} */}
        <div className="flex items-center justify-between px-5 py-3 md:py-5 md:px-10">
          {/* {logo} */}
          <div className="flex gap-6 items-center flex-shrink-0">
            <div className="flex gap-2 items-center justify-center">
              {/* {menu icon} */}
              <div
                className="lg:hidden transition-all duration-500"
                onClick={handleMenu}
              >
                {isOpenMenu ? <X size={30} /> : <Menu size={30} />}
              </div>
              <img
                src={logo}
                alt=""
                className="w-auto h-8 object-cover overflow-hidden"
              />
            </div>
            {/* {pc links} */}
            <ul className="hidden lg:flex gap-1 text-[#D2D2D2]">
              {menuLink.map((item) => {
                return (
                  <li
                    className="relative px-[18px] py-2 uppercase text-sm leading-5 font-medium first:text-[#FFC700] first:bg-[#383A42] rounded-full cursor-pointer hover:text-[#FFC700] hover:bg-[#383A42] transition-all duration-500"
                    key={item.id}
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
          {/* {buttons} */}
          <div className="flex gap-2">
            <button className="disabled:opacity-40 border-none outline-none bg-[#FFC700] rounded-full px-6 py-2 md:px-8 md:py-3 cursor-pointer hover:bg-[#C79B12] transition-all duration-500">
              <h6 className="uppercase font-black italic text-[#1F1F1F] text-[16px] leading-6">
                sign up
              </h6>
            </button>
            <button className="disabled:opacity-40 border-[1px] outline-none rounded-full  px-6 py-2 md:px-8 md:py-3 border-[#FFC700] cursor-pointer hover:border-[#FFE8AB] transition-all duration-500" disabled>
              <h6 className="uppercase font-black italic text-[#D2D2D2] text-[16px] leading-6">
                log in
              </h6>
            </button>
          </div>
        </div>
        {/* {mobile link} */}
        {isOpenMenu && (
          <div className="absolute top-[100%] h-screen bg-[#1F2023] w-full z-20 mx-auto p-5 lg:hidden">
            <ul
              className="right-0 z-20 flex flex-col justify-center items-center gap-4 text-[#D2D2D2]
            "
            >
              {menuLink.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="w-full mx-auto text-center rounded-full px-5 py-[14px] text-sm leading-5 font-medium uppercase first:text-[#FFC700] first:bg-[#383A42] hover:bg-[#383A42] hover:text-[#FFC700]"
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
