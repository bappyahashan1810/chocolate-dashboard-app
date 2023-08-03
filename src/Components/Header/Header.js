import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const { logOut } = useContext(AuthContext);
    const handleDelete = () => {
        logOut()
            .then(result => { })
            .then(error => console.error(error));
    }
    return (
        <div className='flex justify-between  max-w-[1240px] mx-auto p-9 items-center bg-black  text-white'>
            <div className='flex gap-5'>
                <button className='border border-blue-100 p-1 rounded hover:bg-blue-700'><Link to='/addchocolate'>Create Chocolate</Link></button>
                <button className='border border-blue-100 p-1 rounded hover:bg-blue-700 '><Link to='/'>View Chocolate</Link></button>
            </div>
            <div className='flex gap-5 items-center'>
                <button className='border border-blue-100 p-1 rounded hover:bg-blue-700'><Link to='/login'>LogIn</Link></button>
                <button onClick={handleDelete} className='border border-blue-100 p-1 rounded hover:bg-blue-700'>Logout</button>
            </div>

        </div>
    );
};

export default Header;