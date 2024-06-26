import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";



const Header = () => {
    return (
        <div className='mb-8 '>
            
            <ul className="menu menu-horizontal bg-base-200 rounded-box mt-6">
                <li className='navLi'>
                    <NavLink to='/' className="tooltip" data-tip="Home">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    </NavLink>
                </li>
                <li className='navLi'>
                    <NavLink to='/about' className="tooltip" data-tip="About">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </NavLink>
                </li>
                <li className='navLi'>
                    <NavLink to='/contact' className="tooltip" data-tip="contact">
                        <FaAddressCard className='text-xl'/>
                    </NavLink>
                </li>
                <li className='navLi'>
                    <NavLink to='/users' className="tooltip" data-tip="users">
                        <FaUser className='text-xl'/>
                    </NavLink>
                </li>
                <li className='navLi'>
                    <NavLink to='/posts' className="tooltip" data-tip="posts">
                        <SiReaddotcv className='text-xl'/>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;