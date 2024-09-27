import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import './Header.css'
import GlobalNav from '../Components/GlobalNav';

// const Header = ({ setPage }) => {
//   const [Menu, setMenu] = useState('HomePage');
//   const { getTotalCartItems } = useContext(ShopContext);
//   const [showMenu, setShowMenu] = useState(false);

//   const handleLogoClick = () => {
//     console.log('Logo clicked');
//     setPage('Home');
//   }

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   }

const Header = () => {

  const [Menu, setMenu] = useState('HomePage');
  const { getTotalCartItems } = useContext(ShopContext);
  const [showMenu, setShowMenu] = useState(false);

  // const toggleMenu = () => {
  //   const navMenu = document.querySelector('.header-nav-menu');
  //   navMenu.classList.toggle('show');
  // }

  const toggleMenu = () => {
    setShowMenu(prevShowMenu => !prevShowMenu);
  };


  return (
    <header className='header'>
      <div className="header-logo">
        <h2 className="header-title">Another Story</h2>
      </div>
      {/* <ul className={`header-nav-menu ${Menu === ' ' ? 'show' : ''}`}> */}
      <ul className={`header-nav-menu ${showMenu ? 'show' : ''}`}>
        <li onClick={() => setMenu('Home')} className={`header-nav-list${(Menu === 'Home') ? '' : ''}`}>
          <Link to='/'>Home</Link></li>
        <li onClick={() => setMenu('Women')} className={`header-nav-list${(Menu === 'Women') ? '' : ''}`}>
          <Link to='/women'>Women</Link></li>
        <li onClick={() => setMenu('Men')} className={`header-nav-list${(Menu === 'Men') ? '' : ''}`}>
          <Link to='/men'>Men</Link></li>
        <li onClick={() => setMenu('Kids')} className={`header-nav-list${(Menu === 'Kids') ? '' : ''}`}>
          <Link to='/kids'>Kids</Link></li>
      </ul>

      <button className="hamburger-menu-button" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      
      {/* <GlobalNav className="header-nav" setPage={setPage} /> */}

      <div onClick={() => setMenu(' ')} className="header-button">
        {localStorage.getItem('auth-token')
          ?
          <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}
            className=' header-nav-login'>
            <Link to='/login'>Logout</Link>
          </button>
          :
          <button className=' header-nav-login'>
            <Link to='/login'>Login</Link>
          </button>
        }

        <Link to='/cart'><img className='header-nav-cart' src={cart_icon} alt='cart'  /> </Link>
        <div className="header-nav-cart-count"> {getTotalCartItems()}</div>
      </div>

    </header>
  )
}
export default Header