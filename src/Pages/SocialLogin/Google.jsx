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
            toast.success("login succes with google");
            navigate("/");
        } )
    }
    return (
        <div>
             <div className='ml-32'>
             <button onClick={handleGoogle} className="btn border-none text-white bg-[#880ED4]">Google</button>
            
        </div>
        </div>
    );
};

export default Google;