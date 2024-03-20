import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {title,id,body}=post;

    const navigate=useNavigate()
    const handleNavigateDetails=()=>{
        navigate(`/posts/${id}`);
    }

    return (
        <div className='card glass m-2 p-4'>
            <div className="card-body text-left">
                <h1 className='font-bold'>post: {id}</h1>
                <h2 className="text-white card-title capitalize ">{title}</h2>
                <p>{body}</p>
                <Link to={`/posts/${id}`} className='btn capitalize'>learn more</Link>
                <button onClick={handleNavigateDetails} className='btn'>click to see details</button>
            </div>
        </div>
    );
};

export default Post;