import React, { useEffect, useState } from 'react';

const User = () => {
    const [user,setUser] =useState([])
    useEffect(()=>{
        fetch('user.json')
        .then(res=>res.json())
        .then(data=>{
           setUser(data);
        })
    },[])
    return (
        <div>
            <div className='flex justify-center items-center mt-48'> 

            <h1 className='text-3xl font-bold'>Our Respected User</h1>
            </div>
<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8'>
    {
        user?.map(item=> (
            <>
            <div className="card card-compact w-96 bg-base-100 shadow-xl" key={item.id}>
            <figure><img src={item?.image} alt="Shoes" className='w-full h-[200px]' /></figure>
            <div className="card-body">
              <h2 className="card-title">{item?.name}</h2>
              
              <div className="card-actions justify-end">
              <p className='font-medium'>{item?.contact}</p>
              </div>
            </div>
          </div> 
            </>
        ))
    }
</div>
            </div>
       
    );
};

export default User;