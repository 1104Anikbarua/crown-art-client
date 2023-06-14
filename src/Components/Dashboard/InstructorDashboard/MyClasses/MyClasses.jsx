import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { DrawingContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const MyClasses = () => {
    const { user } = useContext(DrawingContext);
    // console.log(user)
    const { isLoading, refetch, data: classes } = useQuery({
        enabled: !!user?.email,
        queryKey: ['classes', user?.email],
        queryFn: () => fetch(`https://batch-7-assignment-12-server.vercel.app/instructor/classes?email=${user?.email}`)
            .then(res => res.json())
    })
    // console.log(classes)

    const handlePayFees = (id) => {
        const userInfo = { photo: user?.photoURL }
        fetch(`https://batch-7-assignment-12-server.vercel.app/instructor/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `Photo Set`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div className='w-full max-w-7xl mx-auto'>
            <Helmet>
                <title>Crown | My-Class</title>
            </Helmet>
            <h1 className='text-center font-playfair font-extrabold text-4xl hover:text-orange-100'>My Classes</h1>
            <div className='flex items-center flex-wrap'>
                <p className='text-orange-100 font-montserrat text-base font-medium'>
                    <Link to={'/'}>
                        Home
                    </Link>
                </p>
                <MdNavigateNext className='mx-5'></MdNavigateNext>
                <p className='font-montserrat text-base font-medium'>
                    <Link to={'/classes'}>
                        My Classes
                    </Link>
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

                            <th className='bg-orange-100 font-montserrat text-center'>Seats</th>
                            <th className='bg-orange-100 font-montserrat text-center'>Status</th>
                            <th className='bg-orange-100 font-montserrat text-center'>Total Enrolled Students</th>
                            <th className='bg-orange-100 font-montserrat text-center'>Feedback</th>
                            <th className='bg-orange-100 font-montserrat text-center'>Update</th>
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
                                <td className=' font-playfair text-base font-normal'>{course?.availableSeats}</td>
                                <td className=' font-playfair text-base font-normal'>{course?.status}</td>
                                <td className=' font-playfair text-base font-normal'>{course?.enrolled || 0}</td>
                                <td className=' font-playfair text-base font-normal'>{course?.feedback || 'No Feedback'}</td>

                                <td className=''>
                                    <button
                                        onClick={() => handlePayFees(course._id)}
                                        className="bg-orange-100 w-20 h-8 font-playfair text-base rounded-md">
                                        Update
                                    </button>
                                </td>

                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;