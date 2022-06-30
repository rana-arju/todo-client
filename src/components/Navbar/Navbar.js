import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar bg-base-100 md:mx-10">
        <div class="navbar-start">
            <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-5 shadow bg-base-100 rounded-box w-52">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/todo">To Do</NavLink></li>
                <li><NavLink to="/complate">Complate Task</NavLink></li>
                <li><NavLink to="/calendar">Calendar</NavLink></li>
                </ul>
            </div>
            <span class="btn btn-ghost text-2xl font-bold"><NavLink to="/" >To Do</NavLink></span>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0 text-xl">
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