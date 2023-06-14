import React from 'react';
import { Helmet } from 'react-helmet-async';

const Terms = () => {
    return (
        <>
            <Helmet>
                <title>Crown | Terms</title>
            </Helmet>
            <div className='w-full max-w-7xl my-20 mx-auto divide-y-8 divide-gray-300 px-5 lg:px-0'>
                <h1 className='font-playfair font-extrabold text-4xl text-center mb-5 hover:text-orange-100'>Terms</h1>
                <p className='font-montserrat text-xl mb-2'>
                    Feel free to reach out to us with any inquiries, questions, or to learn more about our programs and classes. We are here to assist you and provide you with the information you need to join our vibrant artistic community.

                </p>
                <p className='font-montserrat text-xl mb-2'>
                    You can contact us by phone during our office hours, or you can send us an email at any time. Additionally, our website is a valuable resource where you can explore our course offerings, instructor profiles, and find additional information about our school.
                </p>
                <p className='font-montserrat text-xl mb-2'>
                    We look forward to hearing from you and assisting you on your artistic journey!
                </p>
            </div>

        </>
    );
};

export default Terms;