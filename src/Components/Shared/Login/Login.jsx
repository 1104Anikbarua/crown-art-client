import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import authjson from '../lottieauth.json'
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
import { HiEye } from 'react-icons/hi';
import { HiEyeSlash } from 'react-icons/hi2';

const Login = () => {
    const [show, setShow] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className='w-full max-w-7xl mx-auto mt-20 md:flex justify-between items-center px-5 lg:px-0 h-full'>
            <div className='w-full max-w-md mx-auto hidden md:block'>
                <Lottie animationData={authjson} loop={true} />;
            </div>
            <div className='w-full rounded'>
                <h1 className='text-center font-montserrat font-bold text-xl'>Please Login</h1>
                <form
                    className='flex flex-col'
                    onSubmit={handleSubmit(onSubmit)}

                >

                    <div className='flex flex-col w-full max-w-sm mx-auto mb-2'>
                        <label htmlFor="Email"
                            className='font-montserrat text-xl font-medium mb-2'
                        >Email</label>
                        <input
                            className='h-8 bg-blue-100 rounded-md outline-none placeholder:pl-2 placeholder:font-montserrat'
                            type='email'
                            placeholder="Email"
                            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                    </div>
                    <div className='flex flex-col w-full max-w-sm mx-auto mb-4 relative'>
                        <label
                            htmlFor="Password"
                            className='font-montserrat text-xl font-medium mb-2'
                        >Password</label>
                        <input
                            className='h-8 bg-blue-100 rounded-md outline-none placeholder:pl-2 placeholder:font-montserrat'
                            type={show ? "text" : 'password'}
                            placeholder="Password"
                            {...register("Password", {})} />
                        {
                            show
                                ?
                                <HiEyeSlash
                                    onClick={() => setShow(!show)}
                                    className='w-5 h-5 absolute top-3/4 -translate-y-1/2 right-2 cursor-pointer'></HiEyeSlash>
                                : <HiEye
                                    onClick={() => setShow(!show)}
                                    className='w-5 h-5 absolute top-3/4 -translate-y-1/2 right-2 cursor-pointer'></HiEye>
                        }
                    </div>

                    <input
                        className='bg-orange-100 h-8 w-full max-w-sm rounded-md font-montserrat text-xl mx-auto cursor-pointer'
                        type="submit" />
                    <p
                        className='font-montserrat font-medium mt-2 w-full max-w-sm mx-auto'>New to this website? Please <Link
                            // state={from}
                            to={'/register'}
                            className='text-blue-500'>Register</Link></p>
                </form>
            </div>
            <div className='w-full max-w-md mx-auto hidden md:block'>
                <Lottie animationData={authjson} loop={true} />;
            </div>
        </div>
    );
};

export default Login;