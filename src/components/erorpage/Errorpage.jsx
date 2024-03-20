import React from 'react';
import { useRouteError } from 'react-router-dom';

const Errorpage = () => {
    const error=useRouteError();
    console.log(error)
    return (
        <div className='flex min-h-96 justify-center flex-col'>
            <h1>Error 404</h1>
            <p>{error.statusText || error.message}</p>
        </div>
    );
};

export default Errorpage;