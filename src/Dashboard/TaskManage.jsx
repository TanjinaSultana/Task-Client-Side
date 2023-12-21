import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../hooks/AxiosPublic';
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import useTask from '../hooks/useTask';

const TaskManage = () => {
    const { task, loading, refetch } = useTask();
    const [taskManage,setTask] = useState([])
    const [axiosPublic] =useAxiosPublic()
    console.log(task);
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
    
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th></th> 
        <th>Title</th> 
        <th>Description</th> 
        <th>Dateline</th> 
        <th>Priority</th> 
        <th>Action</th> 
      </tr>
    </thead> 
    <tbody>
        {
            taskManage?.map((tasks, index) => <tr key={tasks._id}>
                <th>{index + 1}</th>
                                <td>{tasks?.title}</td>
                                <td>{tasks?.shortDesc}</td>
                                <td>{tasks?.deadline}</td>
                                <td>{tasks?.priority}</td>
                                <td onClick={()=>handleDelete(tasks._id) }><MdDelete /></td>
            </tr>
            )
        }
    </tbody> 
  </table>
</div>
        </div>
    );
};

export default TaskManage;