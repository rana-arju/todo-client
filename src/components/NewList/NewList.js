import { useState } from 'react';
import { useForm } from "react-hook-form";
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';

const NewList = () => {
    const [toggleBtn, setToggleBtn] = useState(true);
    const [inputData, setInputData] = useState(" ");
    const { register, handleSubmit, formState: { errors } , reset} = useForm();
    const [agree, setAgree] = useState('')

    // Get all Todo List
     const { isLoading, error, data:lists, refetch} = useQuery('lists', () =>
     fetch(`https://immense-castle-15525.herokuapp.com/todo`, {
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
        fetch(`https://immense-castle-15525.herokuapp.com/todo/complate`, {
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
        //delete list after complate button click
        fetch(`https://immense-castle-15525.herokuapp.com/todo/complate/${task}`, {
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
    // when edit button click open a input filed when we enter our updeted data
    const  handleEdit = id => {
        const newEditItem = lists.find((list) => {
            return list._id === id;
        })
        setToggleBtn(false);
        setInputData(newEditItem)
       
    }
    //List delete handle
    const handleDelete = id => {
          fetch(`https://immense-castle-15525.herokuapp.com/todo/${id}`, {
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
    const onSubmit = (data) => {
        const updatedData = {
            todo: data?.todo
        }
         fetch(`https://immense-castle-15525.herokuapp.com/todo/${inputData._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedData)
        })
        .then(res =>res.json())
        .then(data => {
            toast.success(`You Are successfully Updated One Task!`)
            refetch();

        })
      reset();
    setToggleBtn(true);

    }

    return (
         <div className="h-1/2 w-full md:w-1/2 mx-auto my-10 bg-base-200">
            <div className="text-center">
            <div className="min-w-lg">
                <div className="card  w-full shadow-2xl bg-base-100">
                <div className="card-body mx-8">
              { !toggleBtn && 
              <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Update Task</span>
                    </label>
                    <input type="text" name="todo" placeholder="update Your Task" className="input input-bordered" {...register("todo", { required: true })} />
                    <p className='mt-3 text-red-500'> {errors.todo?.type === 'required' && "Add anything*"}</p>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary font-bold">Updated list</button>
                    </div>
                    </form>
                    }

                    {
                       lists?.map(list =>  <div key={list._id } className="form-control flex flex-row items-center gap-5">
                        <label className="gap-2 md:gap-5 flex cursor-pointer" onClick={() => handleChecked(list.todo)}>
                            <span><input  type="checkbox" checked={agree===list.todo && "checked"} readOnly className="checkbox checkbox-primary" /></span>
                            <span className="text-xl">{list.todo}</span> 
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