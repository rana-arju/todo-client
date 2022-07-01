import React from 'react';
import Complate from '../../components/Complete/Complate';
import NewList from '../../components/NewList/NewList';
import TodoAdd from '../../components/TodoAdd/TodoAdd';

const Home = () => {
    return (
        <div>
            <TodoAdd />
            <div>
                <h2 className='text-xl md:text-2xl font-bold text-center uppercase my-5'>Your Task Board</h2>
                <NewList />
            </div>
            <div>
                <h2 className='text-2xl font-bold text-center uppercase my-5'>You are completed</h2>
                <Complate />
            </div>
        </div>
    );
};

export default Home;