import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 md:mx-10">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-5 shadow bg-base-100 rounded-box w-52">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/todo">To Do</NavLink></li>
                <li><NavLink to="/complate">Complate Task</NavLink></li>
                <li><NavLink to="/calendar">Calendar</NavLink></li>
                </ul>
            </div>
            <span className="btn btn-ghost text-2xl font-bold"><NavLink to="/" >To Do</NavLink></span>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 text-xl">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/todo">To Do</NavLink></li>
                <li><NavLink to="/complate">Complate Task</NavLink></li>
                <li><NavLink to="/calendar">Calendar</NavLink></li>
            </ul>
        </div>
        
        </div>
    );
};

export default Navbar;