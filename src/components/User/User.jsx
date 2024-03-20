import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id,name,username,phone,email,website}=user;
    return (
        <div className="card w-96 glass m-2">
            <div className="card-body text-left">
                <h2 className="card-title font-bold text-2xl">{name}</h2>
                <p className='lowercase text-lg font-semibold'>@{username}</p>
                <div className="flex gap-4 text-left">
                    <h3>{email}</h3>
                    <h3>{website}</h3>
                </div>
                <h3>{phone}</h3>
                <Link to={`/user/${id}` } className='btn my-4'>Show Details</Link>
            </div>
        </div>
    );
};

export default User;