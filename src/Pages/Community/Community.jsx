import React, { useEffect, useState } from 'react';

const Community = () => {
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
              <div className='flex justify-center items-center mt-10'> 

<h1 className='text-3xl font-bold'>Our Community</h1>
</div>
<div className='grid grid-cols-2 lg:grid-cols-4'>
    {
         user?.map(item=> (
            <>
           <div>

            <figure key={item.id}><img src={item?.image} alt="Shoes" className='w-[170px] h-[170px] rounded-full' /></figure>
           <h1 className='font-medium'>{item?.contact}</h1>
           </div>
           
        
            </>
        ))
    }
</div>
        </div>
    );
};

export default Community;