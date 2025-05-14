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
    <section className="w-[full] mx-auto border-t-[1px] border-[#383A42] py-10 px-5 md:px-[236px] md:py-10">
      <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid md:grid-cols-4 md:gap-10">
        {contentFooter.map((item) => {
          return (
            <div className="flex flex-col gap-3" key={item.id}>
              <TitleFooter title={item.title} />
              <ul className="flex flex-col gap-2">
                {item.content.map((content,index) => {
                  return (
                    <li key={index} className="text-[12px] font-normal leading-4 md:text-sm md:leading-5 text-[#D2D2D2]">
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
              <span className="text-[12px] font-normal leading-4 md:text-sm md:leading-5 text-[#D2D2D2]">affiliate@tech.com</span>
            </div>
            <div className="aspect-[38/11] md:aspect-[757/220]">
              <img src={imgFooter} alt="" className="w-757 h-full md:w-38 md:h-11 object-cover overflow-hidden"/>
            </div>
          </div>
        </div>  
      </div>
    </section>
  );
};

export default Footer;
