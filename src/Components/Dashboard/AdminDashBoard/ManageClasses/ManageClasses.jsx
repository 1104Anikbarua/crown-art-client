import React, { useContext, useState } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { DrawingContext } from '../../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { ImSpinner3 } from 'react-icons/im'
import { BsPatchCheck } from 'react-icons/bs'
import Swal from 'sweetalert2';
import AdminFeedBack from '../AdminFeedBack/AdminFeedBack';

const ManageClasses = () => {
    const [show, setShow] = useState({})
    const { user } = useContext(DrawingContext);

    const { isLoading, refetch, data: classes } = useQuery({

        queryKey: ['allClasses',],
        queryFn: () => fetch(`http://localhost:5000/admin/classes`)
            .then(res => res.json())
    })
    console.log(classes)

    const navigate = useNavigate();
    const handleSendFeedback = (course) => {
        setShow(course)
    }
    const handleDeniedCourse = (id) => {
        fetch(`http://localhost:5000/admin/denies/${id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `Course Approval Denied`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleApproveCourse = (id) => {
        fetch(`http://localhost:5000/admin/approves/${id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `Course Approval Approved`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div className='w-full max-w-7xl mx-auto'>
            <h1 className='font-playfair font-extrabold text-4xl text-center mb-5 hover:text-orange-100'>Manage Users</h1>
            <div className='flex items-center flex-wrap'>
                <p className='text-orange-100 font-montserrat text-base font-medium'>
                    <Link to={'/'}>
                        Home
                    </Link>
                </p>
                <MdNavigateNext className='mx-5'></MdNavigateNext>
                <p className='font-montserrat text-base font-medium'>
                    <Link to={'/classes'}>
                        Manage Class
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
                            <th className='bg-orange-100 font-montserrat text-center'>Instructor Name</th>
                            <th className='bg-orange-100 font-montserrat text-center'>Instructor Email</th>
                            <th className='bg-orange-100 font-montserrat text-center'>Price</th>

                            <th className='bg-orange-100 font-montserrat text-center'>Available Seats</th>
                            <th className='bg-orange-100 font-montserrat text-center'>Status</th>

                            <th className='bg-orange-100 font-montserrat text-center'>Feedback</th>

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
                                <td className=' font-playfair text-base font-normal'>{course?.instructorName}</td>
                                <td className=' font-playfair text-base font-normal'>{course?.email}</td>
                                <td className=' font-playfair text-base font-normal'>{course?.price}</td>
                                <td className=' font-playfair text-base font-normal'>{course?.availableSeats}</td>
                                <td className=' font-playfair text-base font-normal'>
                                    <button
                                        className="bg-orange-100 w-32 h-8 mb-5 font-playfair text-base rounded-md flex items-center justify-center uppercase">
                                        {course?.status}
                                        {
                                            course?.status === 'pending'
                                            &&
                                            <ImSpinner3 className={`ml-2 text-white  text-base ${course?.status === 'pending' ? 'animate-spin' : ''}`} />
                                        }
                                        {
                                            course?.status === 'approved' &&
                                            < BsPatchCheck className={`ml-2 text-white  text-base ${course?.status === 'pending' ? 'animate-spin' : ''}`} />
                                        }
                                    </button>

                                    <button
                                        disabled={course?.status === 'denied' || course?.status === 'approved'}
                                        onClick={() => handleApproveCourse(course._id)}
                                        className={`bg-green-600 text-white w-32 h-8 mb-5 font-playfair text-base rounded-md disabled:bg-opacity-50 disabled:cursor-not-allowed`}>
                                        Approved
                                    </button>
                                    <button
                                        disabled={course.status === 'denied' || course?.status === 'approved'}
                                        onClick={() => handleDeniedCourse(course._id)}
                                        className="bg-red-600 text-white w-32 h-8 font-playfair text-base rounded-md disabled:bg-opacity-50 disabled:cursor-not-allowed">
                                        Denied
                                    </button>
                                </td>

                                <td className=' font-playfair text-base font-normal'>

                                    <label
                                        htmlFor="my_modal_6"
                                        onClick={() => handleSendFeedback(course)}
                                        className="bg-orange-100 w-32 h-8 font-playfair text-base rounded-md flex items-center justify-center">
                                        FeedBack
                                    </label>
                                </td>

                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {
                show && <AdminFeedBack
                    show={show}
                    refetch={refetch}
                ></AdminFeedBack>
            }
        </div>
    );
};

export default ManageClasses;