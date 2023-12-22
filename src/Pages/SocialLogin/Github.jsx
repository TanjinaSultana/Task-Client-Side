import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Github = () => {
    const {githubSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleGoogle =(e)=>{
        e.preventDefault()
        githubSignIn().
        then(result=>{
            navigate("/");
            Swal.fire("login succesfully with Github");
        } )
    }
    return (
        <div>
            <div className=''>
             <button onClick={handleGoogle} className="btn border-none bg-[#FFDE59] text-black text-base">Github</button>
            
        </div>
        </div>
    );
};

export default Github;