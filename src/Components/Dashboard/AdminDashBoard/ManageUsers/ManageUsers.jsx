import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MdNavigateNext } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageUsers = () => {

    const { isLoading, refetch, data: students } = useQuery({
        // enabled: !!user?.email,
        queryKey: ['students'],
        queryFn: () => fetch(`https://batch-7-assignment-12-server.vercel.app/users`,
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            }
        )
            .then(res => res.json())
    })
    // console.log(students)
    const handleMakeInstructor = (id) => {
        fetch(`https://batch-7-assignment-12-server.vercel.app/instructor/users/${id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `User is promoted as Instructor`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleMakeAdmin = (id) => {
        fetch(`https://batch-7-assignment-12-server.vercel.app/admin/users/${id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `User is promoted as Admin`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    return (
        <div className='w-full max-w-7xl mx-auto'>
            <Helmet>
                <title>Crown | Manage-Users</title>
            </Helmet>
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
                        Manage Users
                    </Link>
                </p>

            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className='font-montserrat font-medium text-base text-white-100'>
                        <tr>
                            <th className='bg-orange-100 font-montserrat text-center'>No</th>

                            <th className='bg-orange-100 font-montserrat text-center'>Name</th>
                            <th className='bg-orange-100 font-montserrat text-center'>Email</th>
                            <th className='bg-orange-100 font-montserrat text-center'>Make Instructor</th>
                            <th className='bg-orange-100 font-montserrat text-center'>Make Admin</th>
                        </tr>
                    </thead>
                    {/* row 1 */}
                    <tbody>
                        {
                            students?.map((student, index) => <tr
                                key={student._id}
                                className='text-center'>
                                <td className=' font-playfair text-base font-normal'>{index + 1}</td>

                                <td className=' font-playfair text-base font-normal'>{student?.name}</td>
                                <td className=' font-playfair text-base font-normal'>{student?.email}</td>
                                <td className=''>
                                    <button
                                        disabled={student?.role === 'instructor'}
                                        onClick={() => handleMakeInstructor(student?._id)}
                                        className="bg-orange-100 w-full max-w-xs h-8 font-playfair text-base rounded-md disabled:bg-orange-100/20 disabled:cursor-not-allowed">
                                        Make Instructor
                                    </button>
                                </td>
                                <td className=''>
                                    <button
                                        disabled={student?.role === 'admin'}
                                        onClick={() => handleMakeAdmin(student?._id)}
                                        className="bg-orange-100 w-full max-w-xs h-8 font-playfair text-base rounded-md disabled:bg-orange-100/20">
                                        Make Admin
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

export default ManageUsers;