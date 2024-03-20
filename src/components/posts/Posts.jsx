import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const allposts = useLoaderData();
    
    return (
        <div>
            <div>
                <h1 className='font-bold capitalize text-2xl my-4 '>all blog posts({allposts.length})</h1>
            </div>
            <div className="grid grid-cols-3">
                {
                   allposts.map(post => <Post key={post.id} post={post} />)
                }
            </div>
        </div>
    );
};

export default Posts;