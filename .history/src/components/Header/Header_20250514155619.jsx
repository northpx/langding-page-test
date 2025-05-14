import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import { menuLink } from "../../constant/constant";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleMenu = () => setIsOpenMenu(!isOpenMenu);
  return (
    <nav className="sticky top-0 z-50">
      <div className="container  mx-auto relative px-5 py-3 md:py-5 md:px-10">
        {/* {navbar} */}
        <div className="flex items-center justify-between">
          {/* {logo} */}
          <div className="flex gap-4 items-center flex-shrink-0">
            <div className="flex gap-2 items-center">
              {/* {menu icon} */}
              <div
                className="lg:hidden transition-all duration-500"
                onClick={handleMenu}
              >
                {isOpenMenu ? <X size={30} /> : <Menu size={30} />}
              </div>
              <img src={logo} alt="" className="w-auto h-8 overflow-hidden" />
            </div>
            {/* {pc links} */}
            <ul className="hidden lg:flex space-x-4">
              {menuLink.map((item) => {
                return (
                  <li className="" key={item.id}>
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
          {/* {buttons} */}
          <div className="flex gap-2">
            <button className="border-none outline-none bg-[#FFC700] rounded-full uppercase px-6 py-2 md: font-semibold text-[16px] leading-6">
              Sign up
            </button>
            <button className="border rounded-full uppercase px-6 py-2 font-semibold text-[14px]">
              Login
            </button>
          </div>
        </div>
        {/* {mobile link} */}
        {isOpenMenu && (
          <ul className="absolute top-full w-full right-0 z-20 flex flex-col justify-center items-center gap-2 lg:hidden text-white px-10">
            {menuLink.map((item) => {
              return (
                <li key={item.id} className="w-full text-center border">
                  {item.name}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;
