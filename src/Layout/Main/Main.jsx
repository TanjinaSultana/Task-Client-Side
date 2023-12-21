import React from 'react';
import Navbar from '../../Shared/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../../Shared/Footer';

const Main = () => {
    const location = useLocation();
    const noNav = location.pathname.includes('login') || location.pathname.includes('register') || location.pathname.includes('dash')
    return (
        <div className='max-w-7xl mx-auto'>
              {
                noNav ||
          <Navbar></Navbar>
            }
           <Outlet></Outlet>
           {
            noNav ||
           <Footer></Footer>
           }
        </div>
    );
};

export default Main;