import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../hooks/AxiosPublic';
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import useTask from '../hooks/useTask';
import { FaEdit } from "react-icons/fa";
import toast from 'react-hot-toast';


const TaskManage = () => {
    const { task, loading, refetch } = useTask();
    const [taskManage,setTask] = useState([])
    const [axiosPublic] =useAxiosPublic()
   
    task.map(item=>{

const today = new Date();

const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, so add 1, and pad with zero if needed
const day = String(today.getDate()).padStart(2, '0'); // Pad day with zero if needed
const year = today.getFullYear();

const formattedDate = `${year}-${month}-${day}`;


const date = item.deadline;
console.log(formattedDate,date,formattedDate===date);

      if(formattedDate===date)
      {
        return toast(`${item.title}deadline today`);
      }
      else if(formattedDate<date){
        return toast(`${item.title}deadline still have`); 
      }
      else{
      return  toast(`${item.title}deadline passed`);
      }
    })



    useEffect(()=>{
      setTask(task)
    
    },[task])
    const handleDelete =(id)=>{

        axiosPublic.delete(`/task/${id}`)
        .then((res) => {
            refetch(); // Access refetch from the array
            if (res.data.deletedCount > 0) {
                Swal.fire("Task Deleted");
            }
        });
    }
    const handleUpdate =  (e,id) =>{
      e.preventDefault();
       console.log(id);
            const form = e.target;
            const title = form.title.value;
            const deadline = form.deadline.value;
            const shortDesc = form.shortDesc.value;
            const priority = form.priority.value;
             const updatedData = {title,deadline,shortDesc,priority}
             console.log(updatedData);
            const res =  axiosPublic.put(`/task/update/${id}`, updatedData);
          
            if (res.data.modifiedCount > 0) {
                console.log(res.data);
                refetch();
                toast.success("Task Updated")
            }
    }
    const dragStarted=(e,id)=>{
        console.log("drag started",e,id);
      
    }
    
    return (
       
       <div className='grid grid-cols-1 lg:grid-cols-3'>
        <div>

        <h1 className='text-base font-bold text-center'>Todo-List</h1>
        {
            taskManage?.map((tasks) => 
<>
<div className="card w-96 bg-base-100 shadow-xl mt-2"  key={tasks?._id} draggable onDragStart={(e)=>dragStarted(e,tasks?._id)}>
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
                                          <form className='mb-5 container mx-auto items-center rounded-lg  shadow-2xl bg-[#f4c8f9] py-10' onSubmit={()=>handleUpdate(tasks?._id)} >
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
        <div>
        <h1 className='text-base font-bold text-center'>OnGoing</h1>
        </div>
   
   </div>    
       
    );
};

export default TaskManage;