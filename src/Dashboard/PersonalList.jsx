import React, { useContext, useEffect, useState } from 'react';
import useAxiosPublic from '../hooks/AxiosPublic';
import useTask from '../hooks/useTask';
import { AuthContext } from '../Providers/AuthProvider';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from 'sweetalert2';
const PersonalList = () => {
  const [taskManage,setTasks] = useState([])
    const {task,refetch}= useTask();
    const {user}  = useContext(AuthContext)
    const [axiosPublic] = useAxiosPublic()
    useEffect(()=>{
        const remaining = task?.filter((item) => 
        item?.email == user?.email )
        setTasks(remaining)
    },[task,user?.email])
    const handleDelete =(id)=>{

        axiosPublic.delete(`/task/${id}`)
        .then((res) => {
            refetch(); // Access refetch from the array
            if (res.data.deletedCount > 0) {
                Swal.fire("Task Deleted");
            }
        });
    }
    const handleUpdate = async (e) =>{
       
            e.preventDefault();
            const form = e.target;
            const title = form.title.value;
            const deadline = form.deadline.value;
            const shortDesc = form.shortDesc.value;
            const priority = form.priority.value;
             const updatedData = {title,deadline,shortDesc,priority}
             console.log(updatedData);
            const res = await axiosPublic.put(`/task/${task?._id}`, updatedData);
            if (res.data.modifiedCount > 0) {
                console.log(res.data);
                Swal.fire("Task Updated")
                refetch();
            }
    }
    return (
        <div>
            <h1>Personal List</h1>
             {
            taskManage?.map((tasks) => 
//             <tr key={tasks._id}>
                
//                                 <td>{tasks?.title}</td>
//                                 <td>{tasks?.shortDesc}</td>
//                                 <td>{tasks?.deadline}</td>
//                                 <td>{tasks?.priority}</td>
//                                 <td onClick={()=>handleDelete(tasks?._id)}><MdDelete /></td>
//                                 <span>
//                                     <td>
//                                         <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}><FaEdit /></button>
//                                            <dialog id="my_modal_1" className="modal">
//                                           <div className="modal-box">
//                                           <form className='mb-5 container mx-auto items-center rounded-lg  shadow-2xl bg-[#f4c8f9] py-10' onSubmit={handleUpdate} >
//                                           <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
// 				<div className="col-span-full sm:col-span-3 p-3">
// 					<label  className="text-sm font-medium">Title</label>
// 					<input id="title" name="title" type="text" placeholder="Task Title" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" defaultValue={tasks?.title} />
// 				</div>
             
// 				<div className="col-span-full sm:col-span-3 p-3">
// 					<label  className="text-sm font-medium">Deadlines</label>
// 					<input  id="deadline" name="deadline" type="date" placeholder="Deadlines" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" defaultValue={tasks?.deadline} />
// 				</div>
// 				<div className="col-span-full sm:col-span-3 p-3">
// 					<label  className="text-sm font-medium">Short Description</label>
// 					{/* <input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" /> */}
//                 <textarea  name="shortDesc"  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 p-3" rows="4" cols="40" maxLength="100" placeholder="Enter Description" defaultValue={tasks?.shortDesc}></textarea>
// 				</div>
//               <div className='col-span-full sm:col-span-3 mt-8 p-3'>

//                 <select name='priority' id='priority' defaultValue={tasks?.priority} className="select select-info  w-full max-w-xs ">
//   <option disabled selected >Priority</option>
//   <option>Low</option>
//   <option>Moderate</option>
//   <option>High</option>
// </select>
//                 </div>
// 			</div>
// <div className='flex flex-col gap-10 lg:w-1/3  lg:flex-row container mx-auto'>
//                 <button className="btn border-none text-white bg-[#880ED4] mt-4 px-10">Update</button>
//   </div>      
              
//             </form>
//     <div className="modal-action">
//       <form method="dialog">
//         {/* if there is a button in form, it will close the modal */}
//         <button className="btn">Close</button>
//       </form>
//     </div>
//   </div>
// </dialog>
                                        
//                                         </td>
//                                     </span>
                                    
//             </tr>
<>
<div className="card w-96 bg-base-100 shadow-xl mt-2"  key={tasks._id}>
  <div className="card-body">
    <h2 className="card-title">{tasks?.title}</h2>
    <p>{tasks?.shortDesc}</p>
    <div className="card-actions justify-end">
    <p>{tasks?.deadline}</p>
    <p>{tasks?.priority}</p>
   <button className='btn' onClick={()=>handleDelete(tasks?._id)}><MdDelete /></button> 

    <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}><FaEdit /></button>
                                           <dialog id="my_modal_1" className="modal">
                                          <div className="modal-box">
                                          <form className='mb-5 container mx-auto items-center rounded-lg  shadow-2xl bg-[#f4c8f9] py-10' onSubmit={handleUpdate} >
                                          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3 p-3">
					<label  className="text-sm font-medium">Title</label>
					<input id="title" name="title" type="text" placeholder="Task Title" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" defaultValue={tasks?.title} />
				</div>
             
				<div className="col-span-full sm:col-span-3 p-3">
					<label  className="text-sm font-medium">Deadlines</label>
					<input  id="deadline" name="deadline" type="date" placeholder="Deadlines" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" defaultValue={tasks?.deadline} />
				</div>
				<div className="col-span-full sm:col-span-3 p-3">
					<label  className="text-sm font-medium">Short Description</label>
					{/* <input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" /> */}
                <textarea  name="shortDesc"  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 p-3" rows="4" cols="40" maxLength="100" placeholder="Enter Description" defaultValue={tasks?.shortDesc}></textarea>
				</div>
              <div className='col-span-full sm:col-span-3 mt-8 p-3'>

                <select name='priority' id='priority' defaultValue={tasks?.priority} className="select select-info  w-full max-w-xs ">
  <option disabled selected >Priority</option>
  <option>Low</option>
  <option>Moderate</option>
  <option>High</option>
</select>
                </div>
			</div>
<div className='flex flex-col gap-10 lg:w-1/3  lg:flex-row container mx-auto'>
                <button className="btn border-none text-white bg-[#880ED4] mt-4 px-10">Update</button>
  </div>      
              
            </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  </div>
</div>
</>


            )
        }
        </div>
    );
};

export default PersonalList;