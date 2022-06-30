import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';

const NewList = () => {
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
    console.log(lists);
    return (
        <div>
            <h2>Hello: {lists.length}</h2>
        </div>
    );
};

export default NewList;