import React from 'react';
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from '../Layout/Main/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Dashboard from '../Layout/Dashboard';
import AddTask from '../Dashboard/AddTask';
import TaskManage from '../Dashboard/TaskManage';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>, 
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        }
      ]
    },
    {
      path:'dash',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path: "add",
          element: <AddTask></AddTask>
        },
        {
          path: "task",
          element: <TaskManage></TaskManage>
      }
      ]
    }
  ]);

export default router;