import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';

const NewList = () => {
    const [agree, setAgree] = useState('')
     const { isLoading, error, data:lists, refetch} = useQuery('lists', () =>
     fetch(`http://localhost:5000/todo`, {
         method: "GET",
          headers: {
            'content-type': 'application/json',
          }
     }).then(res =>res.json())
   )   
    
    if(isLoading){
        return <Loading />
    }
    if(error){
        return toast.error(error.message);
    }
    refetch();
    const handleChecked = task => {
        setAgree(task);
        const list = {
            todo: task,
        };
        fetch(`http://localhost:5000/todo/complate`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(list)
        })
        .then(res =>res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                toast.success(`Wow! You Are Completed One Task!`)
                refetch();
            }
        });
        fetch(`http://localhost:5000/todo/complate/${task}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
            },
        })
        .then(res =>res.json())
        .then(data => {
                refetch();
        })
    }
    const  handleEdit = task => {
        alert("clicked", task)
    }
    const handleDelete = id => {
          fetch(`http://localhost:5000/todo/${id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
            },
        })
        .then(res =>res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                toast.success(`You Are successfully deleted One Task!`)
                refetch();
            }
        })
    }
    return (
         <div class="h-1/2 w-full md:w-1/2 mx-auto my-10 bg-base-200">
            <div class="text-center">
            <div class="min-w-lg">
                <div class="card  w-full shadow-2xl bg-base-100">
                    <div class="card-body mx-8">
                        {
                       lists?.map(list =>  <div key={list._id } class="form-control flex flex-row items-center gap-5">
                        <label class="gap-2 md:gap-5 flex cursor-pointer" onClick={() => handleChecked(list.todo)}>
                            <span><input  type="checkbox" checked={agree===list.todo && "checked"} class="checkbox checkbox-primary" /></span>
                            <span class="text-xl">{list.todo}</span> 
                        </label>
                        <div className='flex gap-2'>
                            <span className="text-lg md:text-xl cursor-pointer text-primary" onClick={() => handleEdit(list._id)}><FaEdit /></span>
                            <span className="text-lg md:text-xl cursor-pointer text-red-500" onClick={() => handleDelete(list._id)}><AiFillDelete /></span>
                            
                        </div>
                        </div>)
                        }
                    
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default NewList;