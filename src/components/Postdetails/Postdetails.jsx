import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaArrowAltCircleLeft } from "react-icons/fa";

import { Link } from 'react-router-dom';

const Postdetails = () => {
    const post=useLoaderData()
    const{userId,title,body,id}=post;
    return (
        <div className="card w-2/3 text-left justify-between mx-auto glass m-2 relative">
            
            <Link to='/posts' className='absolute top-4 left-4 '><FaArrowAltCircleLeft className='cursor-pointer text-yellow-300 font-bold text-xl'/></Link>
            
            <h1 className="capitalize text-2xl text-white font-bold  mt-4">{title}</h1>
            <div className="flex gap-4 my-2">
                <p className="font-bold text-gray-300">Author: user{userId}</p>
                <p className="capitalize font-bold text-gray-300">post index: {id}</p>
            </div>
            <p className='w-2/3 mt-4 capitalize'>{body}</p>

        </div>
    );
};

export default Postdetails;