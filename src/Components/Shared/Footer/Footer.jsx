import React from 'react';
import facebook from '../../../assets/icon/facebook.png'
import google from '../../../assets/icon/googlee.png'
import twitter from '../../../assets/icon/twitter.png'
import instagram from '../../../assets/icon/instagram.png'
import pinterest from '../../../assets/icon/pinterest.png'
import { AiOutlineSwapRight } from 'react-icons/ai';
import phone from '../../../assets/icon/smartphone.png'
import message from '../../../assets/icon/text.png'
import location from '../../../assets/icon/placeholder.png'
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png'
const Footer = () => {
    const year = new Date().getFullYear()
    return (
        // <footer className='bg-[#7d7975] bg-opacity-90
        //     w-full md:py-16 h-60 mx-auto flex items-center justify-between md:flex-row flex-col px-4'>
        <footer className="bg-[#7d7975] bg-opacity-90 shadow-inner py-8 px-5 lg:px-20 mt-32 text-white">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="p-4">
                        <h3
                            className='font-roboto font-bold text-xl mb-5'>About us</h3>
                        <ul className="text-sm mb-5">
                            <img
                                className='w-12 lg:w-14 h-12 lg:h-14' src={logo} alt="" />
                            <p
                                className='text-base font-medium'>

                                Welcome to crown art drawing where creativity meets skill and imagination comes to life on paper! We are a passionate community of artists dedicated to nurturing talent and fostering a love for drawing.
                            </p>
                            <Link
                                className='text-base font-medium flex items-end hover:text-blue-500'
                                to={'about'}>Read More

                                <AiOutlineSwapRight className='font-semibold text-xl'></AiOutlineSwapRight>
                            </Link>
                        </ul>
                        <ul className="text-sm flex items-start justify-center lg:justify-start">
                            <li className='mr-5'>
                                <img
                                    className='w-8 lg:w-10 h-8 lg:h-10' src={facebook} alt="" />
                            </li>
                            <li className='mr-5'>
                                <img
                                    className='w-8 lg:w-10 h-8 lg:h-10' src={twitter} alt="" />
                            </li>
                            <li className='mr-5'>
                                <img
                                    className='w-8 lg:w-10 h-8 lg:h-10' src={instagram} alt="" />
                            </li>
                            <li className='mr-5'>
                                <img
                                    className='w-8 lg:w-10 h-8 lg:h-10' src={google} alt="" />
                            </li>
                            <li className='mr-5'>
                                <img
                                    className='w-8 lg:w-10 h-8 lg:h-10' src={pinterest} alt="" />
                            </li>

                        </ul>
                    </div>
                    <div className="p-4">
                        <h3
                            className='font-roboto font-bold text-xl mb-5'>Information</h3>
                        <div className='flex flex-col items-start gap-5 mb-5 list-none'>

                            <li
                                className='font-roboto font-medium text-base'>
                                <Link to={'terms'}>Terms</Link>
                            </li>
                            <li

                                className='font-roboto font-medium text-base'>
                                <Link to={'payment'}>Payment Method</Link>
                            </li>

                        </div>


                    </div>
                    <div className="p-4">
                        <h3

                            className="font-roboto text-lg font-bold mb-5">Contact Us</h3>
                        <div className='flex flex-col gap-5'>

                            <ul className='flex flex-col gap-5 list-none'>
                                <li className='flex items-center'>
                                    <img

                                        className='w-8 lg:w-10 h-8 lg:h-10' src={location} alt="" />
                                    <p

                                        className='ml-2'>20/21 Chattogram,Bangladesh</p>
                                </li>
                                <li className='flex items-center'>
                                    <img

                                        className='w-8 lg:w-10 h-8 lg:h-10' src={phone} alt="" />
                                    <p

                                        className='ml-2'>00 800 4588 1825</p>
                                </li>
                                <li className='flex items-center'>
                                    <img
                                        className='w-8 lg:w-10 h-8 lg:h-10' src={message} alt="" />
                                    <p
                                        className='ml-2'>support@gmail.com</p>
                                </li>
                            </ul>
                            {/* <p
                                className='text-xl font-bold text-center text-black'>&copy; Toyqo
                            </p> */}
                        </div>
                    </div>
                </div>
                <p
                    className='text-xl font-bold text-center'>&copy; Crown Art Drawing {year}
                </p>
            </div>

        </footer>
        // </footer >
    );
};

export default Footer;