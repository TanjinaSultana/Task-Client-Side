import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../hooks/AxiosPublic';

const TaskManage = () => {
    const [task,setTask] = useState([])
    const [axiosPublic] =useAxiosPublic()
    useEffect(()=>{
        axiosPublic.get('/task')
        .then(res=>{
            setTask(res.data);
        })
    },[])
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
            task?.map((tasks, index) => <tr key={tasks._id}>
                <th>{index + 1}</th>
                                <td>{tasks?.title}</td>
                                <td>{tasks?.shortDesc}</td>
                                <td>{tasks?.deadline}</td>
                                <td>{tasks?.priority}</td>
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