import React, { useContext } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { DrawingContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Classes = () => {

    const { user } = useContext(DrawingContext)
    const isInstructor = false;
    const isAdmin = false;

    const classDetails = [
        { _id: '1', className: 'Still Life', price: 100, image: 'https://i.ibb.co/QK9VMy8/still-life.png', numOfStudents: 30, availableSeats: 10, instructorName: 'Mr x' },

        { _id: '2', className: 'Potraits', price: 100, image: 'https://i.ibb.co/Pr4gV64/potrait.png', numOfStudents: 25, availableSeats: 0, instructorName: 'Mr x' },

        { _id: '3', className: 'LandScapes', price: 100, image: 'https://i.ibb.co/9gchvnG/landscape.png', numOfStudents: 40, availableSeats: 10, instructorName: 'Mr x' },

        { _id: '4', className: 'Animals', price: 100, image: 'https://i.ibb.co/2y3mPNc/animal.png', numOfStudents: 20, availableSeats: 10, instructorName: 'Mr x' },

        { _id: '5', className: 'Architecture', price: 100, image: 'https://i.ibb.co/CBmQJm8/architect.png', numOfStudents: 35, availableSeats: 10, instructorName: 'Mr x' },

        { _id: '6', className: 'AbstractArt', price: 100, image: 'https://i.ibb.co/dmYpMHJ/abstract-art.png', numOfStudents: 15, availableSeats: 10, instructorName: 'Mr x' },

        { _id: '7', className: 'Nature&Botanicals', price: 100, image: 'https://i.ibb.co/zPmtYVZ/naturebotanicals.png', numOfStudents: 50, availableSeats: 10, instructorName: 'Mr x' },

        { _id: '8', className: 'Figure Drawing', price: 100, image: 'https://i.ibb.co/zPmtYVZ/naturebotanicals.png', numOfStudents: 10, availableSeats: 0, instructorName: 'Mr x' },
    ];
    const location = useLocation();
    const navigate = useNavigate();
    const handleClick = (id) => {
        if (!user?.email) {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: `You have to log in first to view details`,
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/login', { state: { from: { pathname: `/selected/classes/${id}` } } })
        }
    }
    const handelSelectCourse = (id) => {
        // console.log('Hello user', id);
        navigate(`/selected/classes/${id}`);
    }

    const handleCheckEligible = (_id) => {
        if (!user?.email) {
            handleClick(_id)
        }
        else {
            handelSelectCourse(_id)
        }
    }


    return (
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
                        classDetails.map((classItem) => <div
                            key={classItem?._id}
                            className={`w-full max-w-[356px] h-[420px] mx-auto rounded text-center ${classItem.availableSeats === 0 ? 'bg-red-600' : 'bg-orange-300'}`}
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
                                onClick={() => handleCheckEligible(classItem?._id)}
                            >Select</button>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Classes;