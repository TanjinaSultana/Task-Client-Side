/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AddTask from '../Dashboard/AddTask';
import TaskManage from '../Dashboard/TaskManage';
import { AuthContext } from '../Providers/AuthProvider';
import PersonalList from '../Dashboard/PersonalList';


const Dashboard = ({ children }) => {
    const {user}= useContext(AuthContext)
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
            <div className=' grid grid-cols-1 lg:grid-cols-2 '> 

          <AddTask></AddTask>
          <PersonalList></PersonalList>
            </div>
          <TaskManage></TaskManage>
         
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          
          </label>
        </div>
        <div className="drawer-side">
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
 <div>
    <div  className='flex justify-center'>

    <img src={user?.photoURL} className='w-[70px] h-[70px] rounded-lg'></img>
    </div>
    <div className='flex justify-center'>

    <h3 className='text-xl font-bold'>{user?.displayName}</h3>
    </div>
    <h3 className='text-base font-bold'>{user?.email}</h3>
 </div>
  <li>
    <Link to="/dashboard/add">Task Management</Link>
  </li>
  <li>
    <Link to="/">Home</Link>
  </li>
</ul>

        </div>
        <hr></hr>
      </div>
    </div>
  );
};


export default Dashboard;
