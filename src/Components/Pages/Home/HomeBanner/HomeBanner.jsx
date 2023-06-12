import React from 'react';
import banner from '../../../../assets/banner/banner.png'

const HomeBanner = () => {
    return (
        <div className='relative flex flex-col items-center justify-center mt-20 h-screen w-full'>
            <div className='absolute inset-0 w-full lg:bg-cover bg-right lg:bg-center filter contrast-75 bg-no-repeat'
                style={{ backgroundImage: `url(${banner})` }}>
            </div>
            <div className='relative text-center md:text-start w-full max-w-7xl mx-auto'>

                <h1
                    className='text-4xl lg:text-6xl md:text-left font-montserrat font-extrabold text-center my-auto text-white w-full max-w-3xl md:leading-5 mb-5'>Resurrecting time tested skills.</h1>
                <p
                    className='text-2xl lg:text-5xl font-semibold md:text-left text-center font-montserrat text-white w-full max-w-2xl lg:leading-[50px] mb-5'>Traditionally Passed From One Generation to The Next</p>
                <button
                    className='w-40 rounded-md h-10 mt-5 font-bold text-sm bg-white/90 border border-gray-300'>More About Us</button>
            </div>
        </div>
    );
};

export default HomeBanner;