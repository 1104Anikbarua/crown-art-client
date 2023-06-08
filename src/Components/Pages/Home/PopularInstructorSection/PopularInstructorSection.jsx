import React from 'react';

const PopularInstructorSection = () => {
    const classes = [
        { className: 'Still Life', image: 'https://i.ibb.co/cQGgyv0/pexels-pavel-danilyuk-8382370-1536x1025-1.png', numOfStudents: 30 },
        { className: 'Potraits', image: 'https://i.ibb.co/cQGgyv0/pexels-pavel-danilyuk-8382370-1536x1025-1.png', numOfStudents: 25 },
        { className: 'LandScapes', image: 'https://i.ibb.co/cQGgyv0/pexels-pavel-danilyuk-8382370-1536x1025-1.png', numOfStudents: 40 },
        { className: 'Animals', image: 'https://i.ibb.co/cQGgyv0/pexels-pavel-danilyuk-8382370-1536x1025-1.png', numOfStudents: 20 },
        { className: 'Architecture', image: 'https://i.ibb.co/cQGgyv0/pexels-pavel-danilyuk-8382370-1536x1025-1.png', numOfStudents: 35 },
        { className: 'AbstractArt', image: 'https://i.ibb.co/cQGgyv0/pexels-pavel-danilyuk-8382370-1536x1025-1.png', numOfStudents: 15 },
        { className: 'Nature&Botanicals', image: 'https://i.ibb.co/cQGgyv0/pexels-pavel-danilyuk-8382370-1536x1025-1.png', numOfStudents: 50 },
        { className: 'Figure Drawing', numOfStudents: 10 },
    ];

    classes.sort((a, b) => b.numOfStudents - a.numOfStudents);
    const topClasses = classes.slice(0, 6);
    return (
        <div className='w-full max-w-7xl mx-auto mt-20'>
            <h1 className='font-playfair font-extrabold text-4xl text-center mb-5 hover:text-orange-100'>Popular Instructors</h1>
            <div className='w-full mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    topClasses?.map((classItem, index) => <div
                        key={index}
                        className='w-full max-w-[356px] h-[250px] mx-auto text-center'
                    >

                        <img className='w-full max-w-[300px] h-48 mx-auto mb-5' src={classItem?.image} alt="classname image" />
                        {/* <h3 className='font-playfair font-bold text-2xl text-zinc-100'>{classItem?.className}</h3> */}
                        <p className='font-playfair font-semibold text-xl text-zinc-100'>Students:{classItem?.numOfStudents}</p>

                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default PopularInstructorSection;