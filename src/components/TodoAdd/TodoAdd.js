import React from "react";
import { useForm } from "react-hook-form";
import {  BsPlusLg } from 'react-icons/bs';
import { toast } from 'react-toastify';

const TodoAdd = () => {
   const { register, handleSubmit, formState: { errors } , reset} = useForm();
  const onSubmit = data => {
    const task = {
      complate: false,
      todo: data?.todo
    }
        fetch('http://localhost:5000/todo', {
                    method: "POST",
                    headers: {
                      'content-type': "application/json",
                    },
                    body: JSON.stringify(task)
                })
                .then(res => res.json())
                .then(insertData => {
                    if (insertData.insertedId) {
                        toast.success('Successfully Add!')
                    }
                });
                reset();
              }
    return (
      <div class="h-1/2 w-full md:w-1/2 mx-auto my-10 bg-base-200">
        <div class="text-center">
        <div class="min-w-lg">
        <div class="card  w-full shadow-2xl bg-base-100">
      <div class="card-body">
        <h2 className='text-2xl capitalize font-bold'>Add Your Task</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="form-control">
          <label class="label">
            <span class="label-text text-lg">Add Task</span>
          </label>
          <input type="text" name="todo" placeholder="Write Your Task" class="input input-bordered" {...register("todo", { required: true })} />
          <p className='mt-3 text-red-500'> {errors.todo?.type === 'required' && "Add anything*"}</p>
        </div>
        
        <div class="form-control mt-6">
          <button class="btn btn-primary font-bold">Add list <BsPlusLg /></button>
        </div>
        </form>
        </div>
        </div>
            </div>
        </div>
        
    </div>
    );
};

export default TodoAdd;