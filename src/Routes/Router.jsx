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
import PrivateRoute from './PrivateRoute';
import Community from '../Pages/Community/Community';
import Contact from '../Pages/Contact/Contact';


  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Main></Main>,
  //     children:[
  //       {
  //           path: "/",
  //           element: <Home></Home>, 
  //       },
  //       {
  //           path: "/login",
  //           element: <Login></Login>
  //       },
  //       {
  //           path: "/register",
  //           element: <Register></Register>
  //       },
  //       {
  //           path: "/dashboard/add",
  //           element: <AddTask></AddTask>
  //       }
  //     ]
  //   },
  //   {
  //     path:'dashboard',
  //     element:<PrivateRoute>
  //       <Dashboard></Dashboard>
  //       </PrivateRoute>
  //       ,
  //     children:[
  //       {
  //         path: "/dashboard/add",
  //         element: <AddTask></AddTask>
  //       },
  //       {
  //         path: "task",
  //         element: <TaskManage></TaskManage>
  //     }
  //     ]
  //   }
  // ]);


   const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'community',
          element: <Community></Community>
        },
        {
          path: 'contact',
          element: <Contact></Contact>
        },
       
        {
          path: 'register',
          element: <Register></Register>
        }
       
      ]
    }
    ,{
      path:'dashboard',
      element:
      <PrivateRoute>

        <Dashboard></Dashboard>
      </PrivateRoute>
      ,
      children:[
        //admin routes
      
        {
          path:'add',
          element: 

            <AddTask></AddTask>
        }
        //tour guide routes
       

      ]
    }
  ]);
  export default router;