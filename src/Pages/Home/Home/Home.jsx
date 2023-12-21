import React from 'react';
import Banner from '../Home-feature/Banner/Banner';
import Login from '../../Login/Login';
import Register from '../../Register/Register';
import User from '../Home-feature/Banner/User';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <User></User>
           
        </div>
    );
};

export default Home;