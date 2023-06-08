import React from 'react';
import { FadeLoader } from 'react-spinners';

const LoadingSpinner = () => {
    const overRide = {
        display: "block",
        margin: "0 auto",
        borderColor: 'orange'
    };
    return (
        <div className='my-40 text-center'>
            <FadeLoader
                cssOverride={overRide}
                size={10}
                height={100}
                width={8}
                color={'#febb64'}
                aria-label="Loading Spinner"
                data-testid="loader"
            />

        </div>
    );
};

export default LoadingSpinner;