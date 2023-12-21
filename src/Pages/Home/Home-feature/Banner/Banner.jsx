import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProvider';

const Banner = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='-mt-10 cover'>
            <img src='./../../../../../public/image/banner.png' className='rounded-lg zindex-10'></img>
           <div className='-mt-[180px] ml-[80px]'>{
            user?
            (
<Link to=''>
<button className=' btn bg-[#FFDE59]'>Let's Explore</button>
</Link>
            ):(
<Link to="/login">
<button className=' btn bg-[#FFDE59]'>Let's Explore</button>
</Link>

            )
           }

           </div>
        </div>
    );
};

export default Banner;