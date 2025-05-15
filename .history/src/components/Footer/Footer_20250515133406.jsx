import React from "react";
import imgFooter from "../../assets/eacaf7b716ebe0087b19b10bad66561c10276c2c.png";
import TitleFooter from "../Helper/TitleFooter";

const contentFooter = [
  {
    id: 1,
    title: "About us",
    content: [
      "Careers",
      "Company Details",
      "Term & Conditions",
      "Help Center",
      "Privacy Policy",
      "Affiliate",
    ],
  },
  {
    id: 2,
    title: "Products",
    content: [
      "NFT Marketplace",
      "Slingshot",
      "Swaps",
      "NFT Lauchpad",
      "Runes Platform",
      "Creator Dashboard",
    ],
  },
  {
    id: 3,
    title: "Resources",
    content: [
      "Support",
      "API",
      "Feature Requests",
      "Trust & Safety",
      "Sitemap",
    ],
  },
];

const Footer = () => {
  return (
    <section className="w-[full] mx-auto border-t-[1px] border-[#383A42] py-10 px-5 md:px-10 lg:px-59">
      <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid md:grid-cols-4 md:gap-10">
        {contentFooter.map((item) => {
          return (
            <div className="flex flex-col gap-3" key={item.id}>
              <TitleFooter title={item.title} />
              <ul className="flex flex-col gap-2">
                {item.content.map((content,index) => {
                  return (
                    <li key={index} className="relative text-[12px] font-normal leading-4 md:text-sm md:leading-5 text-[#D2D2D2] w-fit block cursor-pointer after:block after:content-[''] after:absolute after:h-[1px] after:bg-white after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-75 after:origin-left">
                      {content}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
        <div className="flex flex-col gap-3">
          <TitleFooter title={'contact us'}/>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-[12px] font-normal leading-4 md:text-sm md:leading-5 text-[#D2D2D2]">support@tech.mail</span>
              <span className="text-[12px] font-normal leading-4 md:text-sm md:leading-5 text-[#D2D2D2]">affilate@tech.com</span>
            </div>
            <div className="mr-4 md:mr-0 overflow-hidden">
              <img src={imgFooter} alt="" className="w-auto h-auto md:w-[151px] md:h-[44px] object-cover"/>
            </div>
          </div>
        </div>  
      </div>
    </section>
  );
};

export default Footer;
