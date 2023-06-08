import React from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { Link } from 'react-router-dom';

const MySelectedClass = () => {
    return (
        <div className='w-full max-w-7xl mx-auto'>
            <h1 className='font-playfair font-extrabold text-4xl text-center mb-5 hover:text-orange-100'>Popular Instructors</h1>
            <div className='flex items-center'>
                <p className='text-orange-100 font-montserrat text-base font-medium'>
                    <Link to={'/'}>
                        Home
                    </Link>
                </p>
                <MdNavigateNext className='mx-5'></MdNavigateNext>
                <p className='text-orange-100 font-montserrat text-base font-medium'>
                    <Link to={'classes'}>
                        Classes
                    </Link>
                </p>
                <MdNavigateNext className='mx-5'></MdNavigateNext>
                <p className='font-montserrat text-base font-medium'>
                    My Selected Class
                </p>
            </div>
        </div>
    );
};

export default MySelectedClass;