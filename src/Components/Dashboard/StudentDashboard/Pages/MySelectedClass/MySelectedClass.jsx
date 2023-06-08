import React, { useContext } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { DrawingContext } from '../../../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { HiOutlineTrash } from 'react-icons/hi';
import Swal from 'sweetalert2';

const MySelectedClass = () => {
    const { user } = useContext(DrawingContext)

    const { isLoading, refetch, data: classes } = useQuery({
        enabled: !!user?.email,
        queryKey: ['classes', user?.email],
        queryFn: () => fetch(`http://localhost:5000/selected/classes?email=${user?.email}`)
            .then(res => res.json())
    })
    // console.log(classes)
    const handlePayFees = (id) => {

    }
    const handleRemoveClass = (id) => {
        // console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/classes/${id}`, {
                    method: "DELETE",
                })
                    .then((res => res.json()))
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='w-full max-w-7xl mx-auto'>
            <h1 className='font-playfair font-extrabold text-4xl text-center mb-5 hover:text-orange-100'>Popular Instructors</h1>
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
                    My Selected Class
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
                            <th className='bg-orange-100 font-montserrat text-center'>Pay</th>
                            <th className='bg-orange-100 font-montserrat text-center'>Delete</th>
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
                                <td className=''>
                                    <button
                                        onClick={() => handlePayFees(course._id)}
                                        className="bg-orange-100 w-20 h-8 font-playfair text-base rounded-md">
                                        Pay
                                    </button>
                                </td>
                                <td className='flex items-center justify-center h-28'>
                                    <button
                                        onClick={() => handleRemoveClass(course._id)}
                                        className="bg-red-600 w-12 h-12 flex items-center justify-center rounded-md">
                                        <HiOutlineTrash className='text-3xl text-white'></HiOutlineTrash>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;