import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import wechat_icon from '../Assets/wechat_icon.png'
import xhs_icon from '../Assets/xhs_icon.png'
import tiktok_icon from '../Assets/tiktok_icon.png'
import twitter_icon from '../Assets/twitter_icon.png'
import './Footer.css'

// const Footer = () => {
//     return (
//         <div className='text-gray-300 bg-black p-18 '>
//             <div className='flex flex-col sm:flex-row justify-around '>

//                 {/* <div className="footer-logo flex items-center gap-5">
//                     <img src={footer_logo} alt="" />
//                 </div> */}

//                 <ul className="footer-links flex justify-around space-x-4 ">
//                     <li className='cursor-pointer text-lg hover:text-white hover:underline'>About
//                         <ul className="footer-sub-menu-list">
//                             <li className="cursor-pointer text-sm hover:text-white hover:underline">About us</li>
//                             <li className="cursor-pointer text-sm hover:text-white hover:underline">Privacy Policy</li>
//                             <li className="cursor-pointer text-sm hover:text-white hover:underline">Terms of Service</li>
//                         </ul>
//                     </li>
//                     <li className='cursor-pointer text-lg hover:text-white hover:underline'>More Info
//                         <ul className="footer-sub-menu-list">
//                             <li className="cursor-pointer text-sm hover:text-white hover:underline">Shipping Policy</li>
//                             <li className="cursor-pointer text-sm hover:text-white hover:underline">Return Policy</li>
//                             <li className="cursor-pointer text-sm hover:text-white hover:underline">Terms of Service</li>
//                         </ul>
//                     </li>
//                     <li className='cursor-pointer text-lg hover:text-white hover:underline'>Contact
//                         <ul className="footer-sub-menu-list ">
//                             <li className="footer-sub-menu-link cursor-pointer hover:text-white text-sm">customer@anotherstory.com</li>
//                         </ul>
//                     </li>
//                 </ul>

//                 <div className="footer-social-icon ">
//                     <div className="footer-icons-container flex ">
//                         <img className='cursor-pointer bg-white rounded-full p-1 w-12 h-12' src={instagram_icon} alt="" />
//                         <img className='cursor-pointer bg-white rounded-full p-1 w-12 h-12' src={xhs_icon} alt="" />
//                         <img className='cursor-pointer bg-white rounded-full p-1 w-12 h-12' src={wechat_icon} alt="" />
//                         <img className='cursor-pointer bg-white rounded-full p-1 w-12 h-12' src={tiktok_icon} alt="" />
//                         <img className='cursor-pointer bg-white rounded-full p-1 w-12 h-12' src={twitter_icon} alt="" />
//                         <img className='cursor-pointer bg-white rounded-full p-1 w-12 h-12' src={pintester_icon} alt="" />
//                         <img className='cursor-pointer bg-white rounded-full p-1 w-12 h-12' src={whatsapp_icon} alt="" />
//                     </div>
//                 </div>
//             </div>

//             <div className="footer-copyright justify-center flex mt-5 border-t-2 border-white">
//                 <p className='pt-5'>@Coupyright 2024 - All</p>
//             </div>
//         </div>
//     )
// }

// export default Footer

const Footer = () => {
    return (
        <footer className="footer">
            <nav className="footer-menu">
                <ul className='footer-menu-list'>
                    <li className='footer-menu-item'><a className='footer-menu-link'>About</a>
                        <ul className='footer-sub-menu'>
                            <li className='footer-sub-menu-item'><a className='footer-sub-menu-link'>About us</a></li>
                            <li className='footer-sub-menu-item'><a className='footer-sub-menu-link'>Privacy Policy</a></li>
                            <li className='footer-sub-menu-item'><a className='footer-sub-menu-link'>Terms of Service</a></li>
                        </ul>
                    </li>
                    <li className='footer-menu-item'><a className='footer-menu-link'>More Info</a>
                        <ul className='footer-sub-menu'>
                            <li className='footer-sub-menu-item'><a className='footer-sub-menu-link'>Shipping Policy</a></li>
                            <li className='footer-sub-menu-item'><a className='footer-sub-menu-link'>Return Policy</a></li>
                            <li className='footer-sub-menu-item'><a className='footer-sub-menu-link'>Terms of Service</a></li>
                        </ul>
                    </li>
                    <li className='footer-menu-item'><a className='footer-menu-link'>Contact Us</a>
                        <ul className='footer-sub-menu'>
                            <li className='footer-sub-menu-item'><a className='footer-sub-menu-link'>customer@anotherstory.com</a></li>
                        </ul>
                    </li>
                </ul>
                <div className="footer-social-icon ">
                    <img className='footer-social-icon-image' src={instagram_icon} alt="" />
                    <img className='footer-social-icon-image' src={xhs_icon} alt="" />
                    <img className='footer-social-icon-image' src={wechat_icon} alt="" />
                    <img className='footer-social-icon-image' src={tiktok_icon} alt="" />
                    {/* <img className='footer-social-icon-image' src={twitter_icon} alt="" /> */}
                    <img className='footer-social-icon-image' src={pintester_icon} alt="" />
                    <img className='footer-social-icon-image' src={whatsapp_icon} alt="" />
                </div>
            </nav>
            <div className="footer-copyright">
                <p>@Coupyright 2024 - All</p>
            </div>
        </footer>
    )
}
export default Footer