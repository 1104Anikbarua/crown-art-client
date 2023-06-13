import React from 'react';
import { Link } from 'react-router-dom';
import { MdNavigateNext } from 'react-icons/md'
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../../Shared/LoadingSpinner/LoadingSpinner';
const Instructors = () => {
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
        queryFn: () => fetch(`http://localhost:5000/classes`)
            .then(res => res.json())
    })
    console.log(isLoading, instructors)
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
    return (
        <>
            {
                isLoading
                    ?
                    <LoadingSpinner></LoadingSpinner>
                    :
                    <div className='w-full max-w-7xl mx-auto my-20'>
                        <div className='flex items-center my-5'>
                            <p className='text-orange-100 font-montserrat text-base font-medium'>
                                <Link to={'/'}>
                                    Home
                                </Link>
                            </p>
                            <MdNavigateNext className='mx-5'></MdNavigateNext>
                            <p className='text-black font-montserrat text-base font-medium'>Instructors</p>
                        </div>
                        <div className='w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                uniqueEmailArray?.map((teacher) => <div
                                    key={teacher._id}
                                    className='w-full max-w-[356px] h-[459px]'
                                >

                                    <img className='w-full max-w-[300px] h-48 mb-5' src={teacher?.photo} alt="classname image" />
                                    <h3 className='font-playfair font-bold text-2xl text-zinc-100'>{teacher?.instructorName}</h3>
                                    <p className='font-playfair font-semibold text-xl text-zinc-100'>Email:{teacher?.email}</p>

                                </div>)
                            }
                        </div>
                    </div>
            }
        </>
    );
};

export default Instructors;