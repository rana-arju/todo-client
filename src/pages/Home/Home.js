import React from 'react';
import NewList from '../../components/NewList/NewList';
import TodoAdd from '../../components/TodoAdd/TodoAdd';

const Home = () => {
    return (
        <div>
            <TodoAdd />
            <NewList />
        </div>
    );
};

export default Home;