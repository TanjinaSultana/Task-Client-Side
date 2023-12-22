import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import toast from 'react-hot-toast';


const Google = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleGoogle =(e)=>{
        e.preventDefault()
        googleSignIn().
        then(result=>{
            navigate("/");
            toast("login succes with google");
        } )
    }
    return (
        <div>
             <div className='mr-2'>
             <button onClick={handleGoogle} className="btn border-none bg-[#FFDE59] text-black text-base">Google</button>
            
        </div>
        </div>
    );
};

export default Google;