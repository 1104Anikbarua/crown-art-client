import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import banner from '../../../../assets/banner/banner.png'
import bannertwo from '../../../../assets/banner/banner-two.png'
import bannerthree from '../../../../assets/banner/bannerthree.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Zoom from 'react-reveal/Zoom'
const HomeSlider = () => {

    // const bannerInfo = [
    //     {
    //         img: banner, heading: 'Resurrecting time tested skills.', subHeading: 'Traditionally Passed From One Generation to The Next'
    //     },
    //     {
    //         img: banner, heading: 'Resurrecting time tested skills.', subHeading: 'Traditionally Passed From One Generation to The Next'
    //     },
    //     {
    //         img: banner, heading: 'Resurrecting time tested skills.', subHeading: 'Traditionally Passed From One Generation to The Next'
    //     },

    // ]
    return (
        <div className='w-full mt-20'>
            <Carousel
                infiniteLoop={true}
                swipeable={true}
                autoPlay={true}
                showIndicators={false}
                showThumbs={false}

            >
                <div className='relative flex flex-col items-center justify-center  h-screen w-full'>
                    <div className='absolute inset-0 w-full bg-cover bg-center filter contrast-75'
                        style={{ backgroundImage: `url(${banner})` }}>
                    </div>
                    <Zoom duration={3000} delay={1000}>
                        <div className='relative text-center w-full max-w-7xl mx-auto'>

                            <h1
                                className='text-4xl lg:text-6xl text-center font-montserrat font-extrabold my-auto text-white w-full max-w-3xl md:leading-5 mb-5 mx-auto'>Purse <span className='text-orange-100 font-playfair lg:text-6xl font-extrabold italic'>your</span> Passion.
                                <br />
                                Create Your <span className='text-orange-100 font-playfair lg:text-6xl font-extrabold italic'>life</span></h1>

                            <button
                                className='w-40 rounded-md h-10 mt-5 font-bold text-sm bg-orange-100'>More About Us</button>
                        </div>
                    </Zoom>
                </div>
                <div className='relative flex flex-col items-center justify-center h-screen w-full'>
                    <div className='absolute inset-0 w-full bg-cover bg-center filter contrast-75'
                        style={{ backgroundImage: `url(${bannertwo})` }}>
                    </div>
                    <Zoom duration={3000} delay={5000}>

                        <div className='relative text-center w-full max-w-7xl mx-auto'>

                            <h1
                                className='text-4xl lg:text-6xl text-center font-montserrat font-extrabold my-auto text-white w-full max-w-3xl md:leading-5 mb-5 mx-auto'><span className='text-orange-100 font-playfair lg:text-6xl font-extrabold italic'>Experiences</span> for the <br /> Artist in <span className='text-orange-100 font-playfair lg:text-6xl font-extrabold italic'>you</span></h1>

                            <button
                                className='w-40 rounded-md h-10 mt-5 font-bold text-sm bg-orange-100'>More About Us</button>
                        </div>
                    </Zoom>
                </div>
                <div className='relative flex flex-col items-center justify-center h-screen w-full'>
                    <div className='absolute inset-0 w-full bg-cover bg-center filter contrast-75'
                        style={{ backgroundImage: `url(${bannerthree})` }}>
                    </div>
                    <Zoom duration={3000} delay={7000}>
                        <div className='relative text-center w-full max-w-7xl mx-auto'>

                            <h1
                                className='text-4xl lg:text-6xl text-center font-montserrat font-extrabold my-auto text-white w-full max-w-3xl md:leading-5 mb-5 mx-auto'><span className='text-orange-100 font-playfair lg:text-6xl font-extrabold italic'>Starts</span> with <br /> brush & <span className='text-orange-100 font-playfair lg:text-6xl font-extrabold italic'>color</span></h1>

                            <button
                                className='w-40 rounded-md h-10 mt-5 font-bold text-sm bg-orange-100'>More About Us</button>
                        </div>
                    </Zoom>
                </div>
            </Carousel >
        </div >
    );
};

export default HomeSlider;