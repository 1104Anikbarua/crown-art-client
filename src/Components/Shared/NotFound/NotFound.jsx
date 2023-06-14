import React from 'react';
import Lottie from 'lottie-react';
import notfound from './drawing.json'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='relative'>
            <button className='absolute z-10 bg-orange-100 shadow-md w-40 h-10 rounded-lg font-roboto font-bold text-xl border border-gray-100'
                onClick={() => navigate('/')}>Back To Home</button>
            <Lottie
                // classNameh={'h-40'}
                style={{ height: '400px' }}
                animationData={notfound}
                loop={true}
            ></Lottie>
        </div >
    );
};

export default NotFound;