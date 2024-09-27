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