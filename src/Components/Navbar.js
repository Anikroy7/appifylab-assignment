import { faBell, faHome, faMessage, faSearch, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Navbar = () => {
    const navMenu = < >
        <li className='ml-20 hover:text-black'><a><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></a>  </li>
        <li className='hover:text-black'><a><FontAwesomeIcon icon={faUsers}></FontAwesomeIcon></a></li>
        <li className='hover:text-black'><a><FontAwesomeIcon icon={faBell}></FontAwesomeIcon></a></li>
        <li className='hover:text-black'><a><FontAwesomeIcon icon={faMessage}></FontAwesomeIcon></a></li>

    </>

    return (
        <div class="navbar bg-primary h-16 text-white">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                        {navMenu}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">APPIFY LAB </a>
                <div class="form-control relative">
                    <span className='absolute lg:left-24 lg:top-2 sm:top-2 sm:left-4'><FontAwesomeIcon className='text-gray-400' icon={faSearch}></FontAwesomeIcon></span>
                    <input type="text" placeholder="Search" class="p-2 px-10 lg:ml-20 sm:ml-0 rounded-full text-gray-500 lg:w-full md:w-full sm:w-44" />
                </div>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {navMenu}
                </ul>
            </div>
            <div class="navbar-end">
                <ul class="menu menu-horizontal p-0">
                    <li><div class="avatar placeholder">
                        <div class="bg-gray-300 text-neutral-content rounded-full w-12">
                            <span className='text-black'><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></span>
                        </div>
                    </div></li>

                    <li tabindex="0">
                        <a>
                            Adnan Chowdhury
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>

                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;

