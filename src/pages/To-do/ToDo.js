import React from 'react';
import NewList from '../../components/NewList/NewList';

const ToDo = () => {
    return (
       <div>
            <h2 className='text-2xl font-bold text-center uppercase my-5'>Your Task Board</h2>
            <NewList />
        </div>
    );
};

export default ToDo;