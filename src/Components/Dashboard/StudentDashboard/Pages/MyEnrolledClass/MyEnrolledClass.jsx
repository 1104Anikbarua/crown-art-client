import React, { useContext } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { DrawingContext } from '../../../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyEnrolledClass = () => {

    const { user } = useContext(DrawingContext)

    const { isLoading, refetch, data: classes } = useQuery({
        enabled: !!user?.email,
        queryKey: ['classes', user?.email],
        queryFn: () => fetch(`http://localhost:5000/enrolled?email=${user?.email}`)
            .then(res => res.json())
    })
    console.log(classes)
    return (
        <div className='w-full max-w-7xl mx-auto'>
            <h1 className='font-playfair font-extrabold text-4xl text-center mb-5 hover:text-orange-100'>My Enrolled Classes</h1>
            <div className='flex items-center flex-wrap'>
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
                <p className='font-montserrat text-base font-medium whitespace-pre-line'>
                    My Enrolled Class
                </p>
            </div>
        </div>
    );
};

export default MyEnrolledClass;