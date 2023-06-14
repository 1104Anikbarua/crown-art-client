import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DrawingContext } from '../../../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { MdNavigateNext } from 'react-icons/md';
import { Helmet } from 'react-helmet-async';

const MyPaymentHistory = () => {
    const { user } = useContext(DrawingContext);
    const { isLoading, refetch, data: payments } = useQuery({
        enabled: !!user?.email,
        queryKey: ['payments', user?.email],
        queryFn: () => fetch(`https://batch-7-assignment-12-server.vercel.app/payments?email=${user?.email}`)
            .then(res => res.json())
    })
    // console.log(payments)
    const courses = payments?.filter((paid) => paid.paid === true)
    // console.log(courses)
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString();
    };
    // const date = formatDate()
    // console.log(date)
    return (
        <div className='w-full max-w-7xl mx-auto'>
            <Helmet>
                <title>Crown | Payment-History</title>
            </Helmet>
            <h1 className='font-playfair font-extrabold text-4xl text-center mb-5 hover:text-orange-100'>My Payment History</h1>
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
                    Payment History
                </p>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className='font-montserrat font-medium text-base text-white-100'>
                        <tr>
                            <th className='bg-orange-100 font-montserrat text-center'>No</th>
                            <th className='bg-orange-100 font-montserrat text-center'>Class Name</th>
                            <th className='bg-orange-100 font-montserrat text-center'>Price</th>
                            <th className='bg-orange-100 font-montserrat text-center'>Instructor Name</th>
                            <th className='bg-orange-100 font-montserrat text-center'>Paid</th>
                            <th className='bg-orange-100 font-montserrat text-center'>Transaction Id</th>
                            <th className='bg-orange-100 font-montserrat text-center'>Payment Date</th>


                        </tr>
                    </thead>
                    {/* row 1 */}
                    <tbody>
                        {
                            courses?.map((course, index) => <tr
                                key={course._id}
                                className='text-center'>
                                <td className=' font-playfair text-base font-normal'>{index + 1}</td>

                                <td className=' font-playfair text-base font-normal'>{course?.className}</td>
                                <td className=' font-playfair text-base font-normal'>${course?.price}</td>
                                <td className=' font-playfair text-base font-normal'>{course?.instructorName}</td>
                                <td className=' font-playfair text-base font-normal'>{course?.paid === true ? 'True' : 'False'
                                }</td>
                                <td className=' font-playfair text-base font-normal'>{course?.transactionId}</td>
                                <td className=' font-playfair text-base font-normal'>{formatDate(course?.time)}</td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPaymentHistory;