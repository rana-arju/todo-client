import NewList from '../../components/NewList/NewList';
import TodoAdd from '../../components/TodoAdd/TodoAdd';
import ComplateTask from "../ComplateTask/ComplateTask"
const Home = () => {
    return (
        <div>
            <TodoAdd />
            <div>
                <h2 className='text-xl md:text-2xl font-bold text-center uppercase my-5'>Your Task Board</h2>
                <NewList />
            </div>
         
        </div>
    );
};

export default Home;