import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navOptions = <>
   <NavLink to="/"  >
    <li  className='list-none font-medium mr-4 text-[#FFFFFF]'>Home</li>
    </NavLink> 
   <NavLink to="/community"  >
    <li style={{color:"#202122"}} className='list-none font-medium'><a>Community</a></li>
    </NavLink> 
   <NavLink to="/blog" >
    <li style={{color:"#202122"}} className='list-none font-medium'><a>Blogs</a></li>
    </NavLink> 
   <NavLink to="/about">
    <li style={{color:"#202122"}} className='list-none font-medium'><a>About Us</a></li>
    </NavLink> 
   <NavLink to="/contact">
    <li style={{color:"#202122"}} className='list-none font-medium'><a>Contact Us</a></li>
    </NavLink> 
    </>
    return (
        <div>
          <div className="navbar  -mt-10 ">
  <div className="navbar-start">
    <div className="dropdown lg:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navOptions}
      </ul>
    </div>
    <div className='flex justify-center items-center '>

<img src='./../../public/image/Logo.png' className='w-[200px] h-[200px] '></img>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex ">
 
  {navOptions}
  </div>
  <div className="navbar-end">
    
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;