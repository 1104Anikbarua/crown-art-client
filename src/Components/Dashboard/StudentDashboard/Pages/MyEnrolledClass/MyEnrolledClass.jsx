import React, { useContext } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { DrawingContext } from '../../../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyEnrolledClass = () => {

    const { user } = useContext(DrawingContext)

    const { isLoading, refetch, data: classes } = useQuery({
        enabled: !!user?.email,
        queryKey: ['enrolled', user?.email],
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
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className='font-montserrat font-medium text-base text-white-100'>
                        <tr>
                            <th className='bg-orange-100 font-montserrat text-center'>No</th>
                            <th className='bg-orange-100 font-montserrat text-center'>Image</th>
                            <th className='bg-orange-100 font-montserrat text-center'>Class Name</th>
                            <th className='bg-orange-100 font-montserrat text-center'>Price</th>
                            <th className='bg-orange-100 font-montserrat text-center'>Instructor Name</th>

                        </tr>
                    </thead>
                    {/* row 1 */}
                    <tbody>
                        {
                            classes?.map((course, index) => <tr
                                key={course._id}
                                className='text-center'>
                                <td className=' font-playfair text-base font-normal'>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-[76px] h-[76px]">
                                            <img src={course?.image} alt="food image" />
                                        </div>
                                    </div>
                                </td>
                                <td className=' font-playfair text-base font-normal'>{course?.className}</td>
                                <td className=' font-playfair text-base font-normal'>${course?.price}</td>
                                <td className=' font-playfair text-base font-normal'>{course?.instructorName}</td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEnrolledClass;