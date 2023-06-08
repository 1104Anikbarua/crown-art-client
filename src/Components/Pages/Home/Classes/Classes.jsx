import React, { useContext, useEffect, useState } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { DrawingContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import LoadingSpinner from '../../../Shared/LoadingSpinner/LoadingSpinner';

const Classes = () => {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true)
    const { user } = useContext(DrawingContext)
    const isInstructor = false;
    const isAdmin = false;

    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:5000/classes')
            .then(response => {
                // console.log(response)
                setCourses(response.data);
                setLoading(false)
            })
        // fetch('classes.json')
        //     .then(res => res.json())
        //     .then(data => {
        //         setCourses(data)
        //         setLoading(false)
        //     })
    }, []);

    const location = useLocation();
    const navigate = useNavigate();
    const handleClick = () => {
        if (!user?.email) {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: `You have to log in first to view details`,
                showConfirmButton: false,
                timer: 1500
            })
            // navigate('/login', { state: { from: { pathname: `/classes/selected` } } })
            navigate('/login', { state: { from: location } })
        }
    }
    const handelSelectCourse = (course) => {
        // console.log('Hello user', id);
        // navigate(`/classes/selected`);
        const courseInfo = {
            className: course?.className,
            price: course?.price,
            image: course?.image,
            numOfStudents: course?.numOfStudents,
            availableSeats: course?.availableSeats,
            instructorName: course?.instructorName,
            email: user?.email
        }
        // console.log(courseInfo)
        axios.post('http://localhost:5000/classes', courseInfo)
            .then(response => {
                console.log(response)
                if (response.data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'info',
                        title: `${course?.className} Booked Sucessfully`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleCheckEligible = (course) => {
        if (!user?.email) {
            handleClick()
        }
        else {
            handelSelectCourse(course)
        }
    }

    return (
        <>
            {
                loading
                    ?
                    <LoadingSpinner></LoadingSpinner>
                    :
                    <div className='my-20 w-full max-w-7xl mx-auto'>
                        <div className='flex items-center my-5'>
                            <p className='text-orange-100 font-montserrat text-base font-medium'>
                                <Link to={'/'}>
                                    Home
                                </Link>
                            </p>
                            <MdNavigateNext className='mx-5'></MdNavigateNext>
                            <p className='text-black font-montserrat text-base font-medium'>Classes</p>
                        </div>
                        <div>
                            <div className='w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                                {
                                    courses?.map((classItem) => <div
                                        key={classItem?._id}
                                        className={`w-full max-w-[356px] h-[420px] mx-auto rounded text-center ${classItem?.availableSeats === 0 ? 'bg-red-600' : 'bg-orange-300'}`}
                                    >

                                        <img className='w-full max-w-[300px] h-48 mx-auto my-5 rounded' src={classItem?.image} alt="classname image" />
                                        <h3 className='font-playfair font-bold text-2xl text-zinc-100'>Class Name:{classItem?.className}</h3>
                                        <p className='font-playfair font-semibold text-xl text-zinc-100'>Teacher:{classItem?.instructorName}</p>
                                        <p className='font-playfair font-semibold text-xl text-zinc-100'>Students:{classItem?.availableSeats}</p>
                                        <p className='font-playfair font-semibold text-xl text-zinc-100'>Students:{classItem?.price}</p>

                                        <button
                                            disabled={isAdmin === true || isInstructor === true}
                                            className={
                                                ` bg-white w-full max-w-[300px] h-8 rounded-md text-base font-playfair mt-5 ${classItem?.availableSeats === 0 ? 'cursor-not-allowed bg-opacity-50' : 'cursor-pointer'} disabled:cursor-not-allowed`
                                            }
                                            onClick={() => handleCheckEligible(classItem)}
                                        >Select</button>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default Classes;