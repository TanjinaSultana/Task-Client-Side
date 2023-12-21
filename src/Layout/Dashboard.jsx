/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import TaskManage from '../Dashboard/TaskManage';

const Dashboard = ({ children }) => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {children}
          <TaskManage></TaskManage>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          
          </label>
        </div>
        <div className="drawer-side">
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
  <li>
    <Link to="/dash">User Profile</Link>
  </li>
  <li>
    <Link to="/dash/task">Task Management</Link>
  </li>
  <li>
    <Link to="/dash/add">Add A Task</Link>
  </li>
</ul>

        </div>
        <hr></hr>
      </div>
    </div>
  );
};


export default Dashboard;
