// import navlogo from '../assets/nav-logo.svg'
import navProfile from '../assets/nav-admin.svg'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-name">
        {/* <img className='navbar-logo'  alt="" /> */}
        <h2 className='navbar-title' >Another Story</h2>
        <h3 className='navbar-subtitle'>Admin Panel</h3>
      </div>
      {/* <button className='navbar-login'>
        Log In
      </button> */}
      <img className='nav-profile ' src={navProfile} alt="" /> 
    </div>

  ) 
}

export default Navbar