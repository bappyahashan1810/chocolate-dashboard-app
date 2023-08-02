import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between  max-w-[1240px] mx-auto p-9 items-center bg-black  text-white'>
            <div className='flex gap-5'>
                <button className='border border-blue-100 p-1 rounded hover:bg-blue-700'><Link to='/addchocolate'>Create Chocolate</Link></button>
                <button className='border border-blue-100 p-1 rounded hover:bg-blue-700 '><Link to='/'>View Chocolate</Link></button>
            </div>
            <div className='flex gap-5 items-center'>
                <button className='border border-blue-100 p-1 rounded hover:bg-blue-700'><Link to='/login'>LogIn</Link></button>
                <button className='border border-blue-100 p-1 rounded hover:bg-blue-700'><Link to='/logout'>LogOut</Link></button>
            </div>

        </div>
    );
};

export default Header;