import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Fade } from 'react-reveal';

const PopularClassesSection = () => {

    // const classes = [
    //     { className: 'Still Life', image: 'https://i.ibb.co/QK9VMy8/still-life.png', numOfStudents: 30 },
    //     { className: 'Potraits', image: 'https://i.ibb.co/Pr4gV64/potrait.png', numOfStudents: 25 },
    //     { className: 'LandScapes', image: 'https://i.ibb.co/9gchvnG/landscape.png', numOfStudents: 40 },
    //     { className: 'Animals', image: 'https://i.ibb.co/2y3mPNc/animal.png', numOfStudents: 20 },
    //     { className: 'Architecture', image: 'https://i.ibb.co/CBmQJm8/architect.png', numOfStudents: 35 },
    //     { className: 'AbstractArt', image: 'https://i.ibb.co/dmYpMHJ/abstract-art.png', numOfStudents: 15 },
    //     { className: 'Nature&Botanicals', image: 'https://i.ibb.co/zPmtYVZ/naturebotanicals.png', numOfStudents: 50 },
    //     { className: 'Figure Drawing', numOfStudents: 10 },
    // ];
    const { isLoading, refetch, data: classes } = useQuery({
        queryKey: ['popular-classes'],
        queryFn: () => fetch(`https://batch-7-assignment-12-server.vercel.app/classes/popular`)
            .then(res => res.json())
    })
    // console.log(classes)
    const enrolledStudent = classes?.filter((student) => student.enrolled)
    enrolledStudent?.sort((a, b) => b.enrolled - a.enrolled);
    const topClasses = enrolledStudent?.slice(0, 6);
    // topClasses.map((classItem) => {
    //     return <div>{classItem.className}</div>;
    // });
    // console.log(classes)

    return (
        <div className='w-full max-w-7xl mx-auto mt-20'>
            <h1 className='font-playfair font-extrabold text-4xl text-center mb-5 hover:text-orange-100'>Popular Classes</h1>
            <div className='w-full mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    topClasses?.map((classItem, index) => <Fade
                        key={classItem._id}
                        duration={index * 100}
                        delay={index * 2000}
                    >
                        <div
                            key={index}
                            className='w-full max-w-[356px] h-[300px] mx-auto text-center'
                        >

                            <img className='w-full max-w-[300px] h-48 mx-auto mb-5' src={classItem?.image} alt="classname image" />
                            <h3 className='font-playfair font-bold text-2xl text-zinc-100'>{classItem?.className}</h3>
                            <p className='font-playfair font-semibold text-xl text-zinc-100'>Students:{classItem?.enrolled}</p>

                        </div>
                    </Fade>
                    )
                }
            </div>
        </div>
    );
};

export default PopularClassesSection;