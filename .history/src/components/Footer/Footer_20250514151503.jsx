import React from 'react'
import imgFooter from '../../assets/eacaf7b716ebe0087b19b10bad66561c10276c2c.png';

const Footer = () => {
    return (
        <section className='w-[full] mx-auto border-t-[1px] border-[#383A42] py-10 px-5 md:px-[236px] md:py-10'>
            <div className='grid grid-cols-2 md:grid md:grid-cols-4'>
                <div className='border'>
                    <h5>About us</h5>
                    <ul>
                        <li>Careers</li>
                        <li>Company Details</li>
                        <li>Term & Conditions</li>
                        <li>Help Center</li>
                        <li>Privacy Policy</li>
                        <li>Affiliate</li>
                    </ul>
                </div>
                <div className='border'>
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
                <div className='border'>
                    <span>Resources</span>
                    <ul>
                        <li>Support</li>
                        <li>API</li>
                        <li>Feature Requests</li>
                        <li>Trust & Safety</li>
                        <li>Sitemap</li>

                    </ul>
                </div>
                <div className='border'>
                    <span>Contact us</span>
                    <ul>
                        <li>support@tech.mail</li>
                        <li>affiliate@tech.com</li>
                        <li>
                            <img src={imgFooter} alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer