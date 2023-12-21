import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {
    const navigate = useNavigate()
    const {user,logOut} = useContext(AuthContext);
  const handleLogOut = () =>{
    logOut().then(res =>{
        navigate("/")
        toast.success("succes")
    }

    )
  }
    const navOptions = <>
   <NavLink to="/"  >
    <li  className='list-none font-medium mr-4  text-[#FFFFFF]'>Home</li>
    </NavLink> 
   <NavLink to="/community"  >
    <li  className='list-none font-medium mr-4  text-[#FFFFFF]'><a>Community</a></li>
    </NavLink> 
   <NavLink to="/contact">
    <li  className='list-none font-medium mr-4  text-[#FFFFFF]'><a>Contact Us</a></li>
    </NavLink> 
    </>
    return (
        <div>
          <div className="navbar bg-[#202122] mt-4 mb-10 rounded-lg">
  <div className="navbar-start">
    <div className="dropdown lg:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#202122] text-[#FFFFFF] rounded-box w-52">
       {navOptions}
      </ul>
    </div>
    <div className='flex justify-center items-center '>

<h1 className='text-3xl text-[#FFFFFF]'>Task<span className='text-[#FFDE59]'>Manage</span></h1>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex ">
 
  {navOptions}
  </div>
  <div className="navbar-end">
    
    <div className="dropdown dropdown-end">
      {
        user?<>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img  src={user?.photoURL} />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
           {user?.displayName}
          </a>
        </li>
        <Link to="/dashboard">
        <li><a>Dashboard</a></li>
        </Link>
        <li><a onClick={handleLogOut} className=' btn bg-[#FFDE59]'>Logout</a></li>
      </ul>  
        </>:
        <Link to='/login'>
      <button className=' btn bg-[#FFDE59]'>Login</button>
        </Link>
      }
    </div>
    
  </div>
</div>
        </div>
    );
};

export default Navbar;