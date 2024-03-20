import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowAltCircleLeft } from "react-icons/fa";

const Userdetails = () => {
    const user=useLoaderData()
    const {name,email,phone,address,username,website,company}=user;
    return (
        <div className="card w-2/3 items-center justify-between mx-auto glass m-2 flex flex-row relative">
            
            <Link to='/users' className='absolute top-4 left-4 '><FaArrowAltCircleLeft className='cursor-pointer text-yellow-300 font-bold text-xl'/></Link>
            
            <div className='text-left'>

                <h2 className="card-title font-bold text-white text-2xl">{name}</h2>
                <p className='lowercase text-lg font-semibold'>@{username}</p>
                    <div className="companyName ">
                        <h1>{company.name}</h1>
                        <h1>{company.catchPhrase}</h1>
                        <h1>{company.bs}</h1>
                    </div>
            </div>
            <div className=" text-left">
                <div className='font-semibold'>
                    
                    <h3>{email}</h3>
                    <h3>{website}</h3>
                    <h3>{phone}</h3>
                    <div className="flex">
                        <h3>{address.street} , </h3>
                        <h3>{address.city}</h3>
                    </div>

                </div>
            </div>
            

        </div>
    );
};

export default Userdetails;