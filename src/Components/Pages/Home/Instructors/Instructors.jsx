import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdNavigateNext } from 'react-icons/md'
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../../Shared/LoadingSpinner/LoadingSpinner';
import { DrawingContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Fade, Flip, Zoom } from 'react-reveal';
import { Helmet } from 'react-helmet-async';
const Instructors = () => {
    const { user } = useContext(DrawingContext)
    // const classes = [
    //     { className: 'Still Life', teacherName: 'Mr x', image: 'https://i.ibb.co/QK9VMy8/still-life.png', numOfStudents: 30 },
    //     { className: 'Potraits', teacherName: 'Mr x', image: 'https://i.ibb.co/Pr4gV64/potrait.png', numOfStudents: 25 },
    //     { className: 'LandScapes', teacherName: 'Mr x', image: 'https://i.ibb.co/9gchvnG/landscape.png', numOfStudents: 40 },
    //     { className: 'Animals', teacherName: 'Mr x', image: 'https://i.ibb.co/2y3mPNc/animal.png', numOfStudents: 20 },
    //     { className: 'Architecture', teacherName: 'Mr x', image: 'https://i.ibb.co/CBmQJm8/architect.png', numOfStudents: 35 },
    //     { className: 'AbstractArt', teacherName: 'Mr x', image: 'https://i.ibb.co/dmYpMHJ/abstract-art.png', numOfStudents: 15 },
    //     { className: 'Nature&Botanicals', teacherName: 'Mr x', image: 'https://i.ibb.co/zPmtYVZ/naturebotanicals.png', numOfStudents: 50 },
    //     { className: 'Figure Drawing', teacherName: 'Mr x', numOfStudents: 10 },
    // ];
    const { isLoading, refetch, data: instructors } = useQuery({
        queryKey: ['instructors'],
        queryFn: () => fetch(`http://localhost:5000/instructors`)
            .then(res => res.json())
    })
    // console.log(isLoading, instructors)
    const uniqueEmailsSet = new Set();

    const uniqueEmailArray = instructors?.filter((obj) => {
        const { email } = obj;
        // console.log(obj)
        if (!uniqueEmailsSet.has(email)) {
            uniqueEmailsSet.add(email);
            return true;
        }
        return false;
    });
    // console.log(uniqueEmailArray)
    const uniqueInsturctor = uniqueEmailArray?.filter((user) => user?.role === 'instructor')
    // console.log(uniqueInsturctor)
    // const handleInstructor = (id) => {
    //     const userInfo = { photo: user?.photoURL }
    //     fetch(`http://localhost:5000/instructor/update/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(userInfo)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data)
    //             if (data.modifiedCount) {
    //                 refetch();
    //                 Swal.fire({
    //                     position: 'center',
    //                     icon: 'success',
    //                     title: `User is promoted as Instructor`,
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                 })
    //             }
    //         })
    // }
    return (
        <>
            {
                isLoading
                    ?
                    <LoadingSpinner></LoadingSpinner>
                    :
                    <div className='w-full max-w-7xl mx-auto my-20'>
                        <Helmet>
                            <title>Crown | Instructor</title>
                        </Helmet>
                        <div className='flex items-center my-5'>
                            <p className='text-orange-100 font-montserrat text-base font-medium'>
                                <Link to={'/'}>
                                    Home
                                </Link>
                            </p>
                            <MdNavigateNext className='mx-5'></MdNavigateNext>
                            <p className='text-black font-montserrat text-base font-medium'>Instructors</p>
                        </div>
                        {/* <Zoom duration={3000} delay={1000}> */}
                        <div className='w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                uniqueInsturctor?.map((teacher, index) => <Fade
                                    key={teacher._id}
                                    duration={index * 100}
                                    delay={index * 2000}>
                                    <div
                                        className='w-full max-w-[356px] h-[330px] mx-auto bg-orange-100 py-6 rounded'
                                    >

                                        <img className='w-full max-w-[300px] h-48 mb-5 mx-auto' src={teacher?.image} alt="classname image" />
                                        <div className='ml-6'>
                                            <h3 className='font-playfair font-bold text-2xl text-zinc-100'>Name:{teacher?.name}</h3>
                                            <p className='font-playfair font-semibold text-xl text-zinc-100'>Email:{teacher?.email}</p>
                                        </div>
                                        {/* <button
                                        onClick={() => handleInstructor(teacher?._id)}
                                        className='bg-orange-100'>Update</button> */}

                                    </div>
                                </Fade>)
                            }
                        </div>
                        {/* </Zoom> */}
                    </div >
            }
        </>
    );
};

export default Instructors;