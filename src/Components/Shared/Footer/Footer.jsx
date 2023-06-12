import React from 'react';
import { FaTwitter } from 'react-icons/fa'
import { BsDiscord } from 'react-icons/bs'
import { RiLinkedinFill } from 'react-icons/ri'
const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className='bg-[#7d7975] bg-opacity-90
            w-full md:h-16 h-60 mx-auto flex items-center justify-between md:flex-row flex-col px-4'>
            <div className='w-full h-[10px] flex items-center justify-between md:flex-row flex-col font-montserrat'>
                <p className='text-lg font-medium text-white/70 order-10 md:order-1'>All Rights reserved Crown Drawing {year}</p>
                <p className='w-1 h-1 bg-white-100 mx-5 rounded-full'>.</p>
                <p className='text-lg font-medium text-white/70'>Home</p>
                <p className='w-1 h-1 bg-white-100 mx-5 rounded-full'>.</p>
                <p className='text-lg font-medium text-white/70'>Contact Us</p>
                <p className='w-1 h-1 bg-white-100 mx-5 rounded-full'>.</p>
                <p className='text-lg font-medium text-white/70'>Privacy</p>
                <p className='w-1 h-1 bg-white-100 mx-5 rounded-full'>.</p>
                <p className='text-lg font-medium text-white/70'>Terms</p>
            </div>
            <div className='w-full max-w-[135px] h-9 flex items-center justify-between'>
                <li className='w-[35px] h-9 rounded-2xl bg-black-500 flex items-center justify-center'>
                    <FaTwitter className='w-4 h-6 text-white/70'></FaTwitter>
                </li>
                <li className='w-[35px] h-9 ml-[14px] rounded-2xl bg-black-500 flex items-center justify-center'>
                    <RiLinkedinFill className='w-4 h-6 text-white/70'></RiLinkedinFill>
                </li>
                <li className='w-[35px] h-9 ml-[14px] rounded-2xl bg-black-500 flex items-center justify-center'>
                    <BsDiscord className='w-4 h-6 text-white/70'></BsDiscord>
                </li>
            </div>
        </footer>
    );
};

export default Footer;