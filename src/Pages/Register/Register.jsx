import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Google from '../SocialLogin/Google';
import Github from '../SocialLogin/Github';

const Register = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const { createUser,updateUserProfile } = useContext(AuthContext);
//   const axiosPublic = useAxiosPublic()
  const [error,setError] = useState("")
  const navigate = useNavigate()
  const onSubmit = data => {
    
    createUser(data.email, data.password)
      .then(res => {
       
        updateUserProfile(data.name,data.image)
        .then(()=>{
          

               reset();
               console.log('succes');
               navigate("/")
               toast.success("Registration Sucessfully");
           
                
              
            })
           
         }).catch(err =>{
       setError(err.message)
        });
       
      
  };
    return (
        <div>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" placeholder="name" className="input input-bordered" required   {...register("name", { required: true })}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="text" placeholder="image" className="input input-bordered" required   {...register("image", { required: true })}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required  {...register("email", { required: true })}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required   {...register("password", { required: true })}/>
          
        </div>
        <label className="label">
          <p><small  style={{fontSize:"14px",fontWeight:"normal"}}>Already Logged In? <a><Link to="/login" className='underline'><a>Login</a></Link></a> </small></p>
          </label>
        <div className="form-control mt-6">
          <button className="btn bg-[#FFDE59] text-black text-base">Register</button>
        </div>
        <div className='flex justify-center'>

        <Google></Google>
        <Github></Github>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;