import React from "react";
import imgFooter from "../../assets/eacaf7b716ebe0087b19b10bad66561c10276c2c.png";
import TitleFooter from "../Helper/TitleFooter";

const contentFooter = [
    {
        id:1,
        title: 'About us',
        content: [
            'Careers',
            'Company Details',
            'Term & Conditions',
            'Help Center',
            'Privacy Policy',
            'Affiliate'
        ]
    }
]

const Footer = () => {
  return (
    <section className="w-[full] mx-auto border-t-[1px] border-[#383A42] py-10 px-5 md:px-[236px] md:py-10">
      <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid md:grid-cols-4 md:gap-10">
        {
            contentFooter.map((item) => {
                return (
                    <div className="border flex flex-col gap-3" key={item.id}>
                        <TitleFooter title={item.title}/>
                        <ul className="flex flex-col gap">

                        </ul>
                    </div>
                )
            })
        }
        <div className="border flex flex-col gap-3">
          <TitleFooter title={'About us'}/>
          <ul className="flex flex-col gap-2">
            <li className="text-[12px] font-normal leading-4 md:text-sm md:leading-5 text-[#D2D2D2]">
              Careers
            </li>
            <li>Company Details</li>
            <li>Term & Conditions</li>
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Affiliate</li>
          </ul>
        </div>
        <div className="border">
          <span>Products</span>
          <ul>
            <li>NFT Marketplace</li>
            <li>Slingshot</li>
            <li>Swaps</li>
            <li>NFT Lauchpad</li>
            <li>Runes Platform</li>
            <li>Creator Dashboard</li>
          </ul>
        </div>
        <div className="border">
          <span>Resources</span>
          <ul>
            <li>Support</li>
            <li>API</li>
            <li>Feature Requests</li>
            <li>Trust & Safety</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className="border flex flex-col gap-3">
          <span>Contact us</span>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <span>support@tech.mail</span>
              <span>affiliate@tech.com</span>
            </div>
            <div>
              <img src={imgFooter} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
