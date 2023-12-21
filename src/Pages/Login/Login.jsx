import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"
     const handleSubmit = e =>{
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email,password);
      signIn(email,password)
      .then(res=>{
       
        toast.success('Successfully toasted!');

            navigate(from,{replace:true})
        
      })
  .catch(err => toast.error("this didnt match",err.message))
     }
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
          <p><small  style={{fontSize:"14px",fontWeight:"normal"}}>New Here? <Link to="/register">Create an account</Link> </small></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Login;