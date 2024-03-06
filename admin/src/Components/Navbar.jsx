// import navlogo from '../assets/nav-logo.svg'
import navProfile from '../assets/nav-admin.svg'
import './Navbar.css'

// const Navbar = () => {
//   return (
//     <div className=' flex items-center justify-between px-14 py-4 shadow-md mb-1 bg-gray-100  '>
//         {/* <img className='w-[150px] sm:w-[200px] lg:w-[230px] ' src={navlogo} alt="" />
//       <img className='w-[50px] sm:w-[100px] lg:w-[130px] ' src={navProfile} alt="" /> */}
//       <div className="flex flex-col items-center">
//         <span className='text-xl sm:text-2xl lg:text-3xl font-bold' >Another Story</span>
//         <span className='text-lg sm:text-xl lg:text-2xl font-semibold' style={{ marginTop: '0.5rem' }}>Admin Panel</span>
//     </div>
//     </div>
//   ) 
// }

// export default Navbar


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
