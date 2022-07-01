import React, {useState} from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';
import { FaEdit  } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';

const NewList = () => {
    const [agree, setAgree] = useState(null)
     const { isLoading, error, data:lists, refetch} = useQuery('lists', () =>
     fetch(`http://localhost:5000/todo`, {
         method: "GET",
          headers: {
            'content-type': 'application/json',
          }
     }).then(res =>res.json())
   )

//    Put Method Implement
    fetch(`http://localhost:5000/todo/complate/${agree}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
        })
        .then(res =>res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                toast.success(`Wow! You Are Completed One Task!`)
                refetch();
            }
        })
    
    if(isLoading){
        return <Loading />
    }
    if(error){
        return toast.error(error.message);
    }
    refetch();
    const handleChecked = (id) => {
        setAgree(id);

    }
    const  handleEdit = id => {
        alert("clicked", id)
    }
    return (
         <div class="h-1/2 w-full md:w-1/2 mx-auto my-10 bg-base-200">
            <div class="text-center">
            <div class="min-w-lg">
                <div class="card  w-full shadow-2xl bg-base-100">
                    <div class="card-body mx-8">
                        {
                        lists?.map(list => <div key={list._id } class="form-control flex flex-row items-center gap-5">
                        <label class="gap-2 md:gap-5 flex cursor-pointer" onClick={() => handleChecked(list._id)}>
                            <span><input  type="checkbox" checked={agree===list._id && "checked"} class="checkbox checkbox-primary" /></span>
                            <span class="text-xl">{list.todo}</span> 
                        </label>
                        <div className='flex gap-2'>
                            <span className="text-lg md:text-xl cursor-pointer text-primary" onClick={() => handleEdit(list._id)}><FaEdit /></span>
                            
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