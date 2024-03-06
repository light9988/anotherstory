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
  const toggleMenu = () => {
    const navMenu = document.querySelector('.header-nav-menu');
    navMenu.classList.toggle('show');
  }


  return (
    <header className='header'>
      <div className="header-logo">
        <h2 className="header-title">Another Story</h2>
      </div>
      <ul className={`header-nav-menu ${Menu === ' ' ? 'show' : ''}`}>
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

//   return (
//     <div className='flex justify-around p-5 bg-white-200  font-custom-poppin'>
//       <div className="nav-logo flex  gap-2 ">
//         {/* <img src={logo} alt='logo' width={50} height={50} /> */}
//         {/* <h2 className='text-lg flex font-bold items-center  '>Another Story</h2> */}
//         <h2 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Another Story</h2>
//       </div>

//       <ul className="nav-menu flex gap-6 text-sm md:text-lg  ">
//         <li onClick={() => setMenu('Home')} className={`flex items-center cursor-pointer font-medium ${(Menu === 'Home') ? 'border-b-2 border-gray-500' : ''}`}>
//           <Link to='/'>Home</Link></li>
//         <li onClick={() => setMenu('Women')} className={`flex items-center cursor-pointer font-medium ${(Menu === 'Women') ? 'border-b-2 border-gray-500' : ''}`}>
//           <Link to='/women'>Women</Link></li>
//         <li onClick={() => setMenu('Men')} className={`flex items-center cursor-pointer font-medium ${(Menu === 'Men') ? 'border-b-2 border-gray-500' : ''}`}>
//           <Link to='/men'>Men</Link></li>
//         <li onClick={() => setMenu('Kids')} className={`flex items-center cursor-pointer font-medium ${(Menu === 'Kids') ? 'border-b-2 border-gray-500' : ''}`}>
//           <Link to='/kids'>Kids</Link></li>
//       </ul>

//       <button className="hamburger-menu-button" onClick={toggleMenu}>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//       </button>

//       {/* ADD and remove the token from local storage when login and logout function working */}
//       <div onClick={() => setMenu(' ')} className="nav-login-cart flex  " style={{ flexShrink: 0 }}>
//         {localStorage.getItem('auth-token')
//           ?
//           <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}
//             className=' bg-black text-white border-2 rounded-full px-5 text-base font-semibold ' style={{ width: "90px", height: "50px" }}>
//             <Link to='/login'>Logout</Link>
//           </button>
//           :
//           <button className=' bg-black text-white  border-2 rounded-full px-5 text-base font-semibold' style={{ width: "90px", height: "50px" }}>
//             <Link to='/login'>Login</Link>
//           </button>
//         }


//         <Link to='/cart'><img className='p-2 cursor-pointer' src={cart_icon} alt='cart' width={50} height={50} /> </Link>
//         <div className="nav-cart-count font-semibold text-base flex mt-[-3px] ml-[-8px] 
//         text-white bg-red-800 rounded-full p-1 h-6 items-center justify-center"> {getTotalCartItems()}</div>

//       </div>
//     </div>
//   )
// }

export default Header