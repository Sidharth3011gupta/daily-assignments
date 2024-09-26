import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const HOME = () => {
  return (
    <div> 
      <div className='flex  items-center justify-center gap-24 w-svw mt-4 p-3 border-b-2 border-red-500 '>
        <Link className='hover:scale-150' to="/">HOME</Link>
        <Link className='hover:scale-150' to="/users">USERS</Link>
        <Link className='hover:scale-150' to="/todos">TODOS</Link>
        <Link className='hover:scale-150' to="/posts">POSTS</Link>
      </div>
      
      <div className='mt-4 p-4'>
        <Outlet />
      </div>
    </div>
  );
};

export default HOME;
