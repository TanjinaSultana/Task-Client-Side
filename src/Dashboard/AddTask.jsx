import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../hooks/AxiosPublic';
import Swal from 'sweetalert2';
import { AuthContext } from '../Providers/AuthProvider';

const AddTask = () => {
  const [axiosPublic] = useAxiosPublic()
  const {user} = useContext(AuthContext)
    const { handleSubmit, reset,register} = useForm();
    const onSubmit = async(data) => {
        // const imageFile = {image: data.image[0]}
        // const res = await axiosPublic.post(image_hosting_api, imageFile, {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // });
        // if(res.data.success){
  
          const taskItem = {
            title: data.title,
            email: data.email,
            deadline : data.deadline,
            priority: data.priority,
            shortDesc : data.shortDesc

             
         }
        
         try{
  
           const tasks = await axiosPublic.post('/task',taskItem)
           console.log(tasks);
           if(tasks.data.insertedId){
           reset()
           Swal.fire("Task added");
           }
          }catch(err){
            console.log(err);
  
          }
         
       
      };
    return (
        <div>
                  <section className="p-6  ">
	<form   className="container flex flex-col mx-auto space-y-12" onSubmit={handleSubmit(onSubmit)}>
		<fieldset  className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm  bg-[#EAEBF0]">
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm font-medium">Title</label>
					<input id="title" name="title" type="text" placeholder="Task Title" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" {...register('title', { required: 'title is required' })}  />
				</div>
			
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm font-medium">email</label>
					<input id="email" defaultValue={user?.email} name="email" type="text" placeholder="User Email" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" {...register('email', { required: 'email is required' })}  />
				</div>
             
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm font-medium">Deadlines</label>
					<input  id="deadline" name="deadline" type="date" placeholder="Deadlines" className="p-3 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" {...register('deadline', { required: 'deadline is required' })}/>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm font-medium">Short Description</label>
					{/* <input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" /> */}
                <textarea  name="shortDesc"  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 p-3" rows="4" cols="40" maxLength="100" placeholder="Enter Description" {...register('shortDesc', { required: 'shortDesc is required' })}></textarea>
				</div>
              <div className='col-span-full sm:col-span-3 -mt-16'>

                <select name='priority' id='priority' className="select select-info  w-full max-w-xs" {...register('priority', { required: 'priority is required' })}>
  <option disabled selected >Priority</option>
  <option>Low</option>
  <option>Moderate</option>
  <option>High</option>
</select>
                </div>

				
                <div className="col-span-full sm:col-span-6  flex justify-center">

				<button  className="btn px-8 py-3 font-semibold rounded text-white bg-[#FFDE59]"  >Create Task</button>
                </div>
			</div>
		</fieldset>
			
		
	</form>
</section>
        </div>
    );
};

export default AddTask;