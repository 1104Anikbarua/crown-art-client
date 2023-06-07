import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import authjson from '../lottieauth.json'
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiEye } from 'react-icons/hi';
import { HiEyeSlash } from 'react-icons/hi2';
import { DrawingContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import Google from '../Google/Google';

const Login = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState('')
    const { verifyLogin, logInUser } = useContext(DrawingContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const navigate = useNavigate()
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const onSubmit = data => {
        console.log(data);
        const email = data.email;
        const password = data.password;

        verifyLogin(email, password)
            .then((res) => {
                // console.log(res)
                if (res.status === 200) {
                    logInUser(email, password)
                        .then(() => {
                            setError('')
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Logged in successful',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            navigate(from, { replace: true })
                        })
                        .catch((e) => {
                            const message = e.message;
                        })
                }
            })
            .catch((error) => {
                const data = error?.response?.data;
                const message = data?.error?.message;
                setError(message)
            })


    }
    // console.log(errors);
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
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                }
                            })}
                        />
                        {
                            errors?.email?.type === 'required' && <span className='text-red-600 font-medium text-base'>{errors?.email?.message}</span>
                        }
                    </div>
                    <div className={
                        `flex flex-col w-full max-w-sm mx-auto relative ${errors?.password?.type === 'required' ? 'mb-0' : 'mb-4'}`
                    }>
                        <label
                            htmlFor="Password"
                            className='font-montserrat text-xl font-medium mb-2'
                        >Password</label>
                        <input
                            className='h-8 bg-blue-100 rounded-md outline-none placeholder:pl-2 placeholder:font-montserrat'
                            type={show ? "text" : 'password'}
                            placeholder="Password"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                }
                            })}

                        />
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
                    {
                        errors?.password?.type === 'required' && <span className='text-red-600 font-medium text-base w-full max-w-sm mx-auto mb-4'>{errors?.password?.message}</span>
                    }

                    {
                        error && <p className='text-red-600 w-full max-w-sm mx-auto text-base font-medium'>
                            {error}
                        </p>
                    }
                    <input
                        className='bg-orange-100 h-8 w-full max-w-sm rounded-md font-montserrat text-xl mx-auto cursor-pointer'
                        type="submit"
                        value='Login' />
                    <p
                        className='font-montserrat font-medium mt-2 w-full max-w-sm mx-auto'>New to this website? Please <Link
                            state={from}
                            to={'/register'}
                            className='text-blue-500'>Register</Link></p>
                </form>
                <Google></Google>
            </div>
            <div className='w-full max-w-md mx-auto hidden md:block'>
                <Lottie animationData={authjson} loop={true} />;
            </div>
        </div>
    );
};

export default Login;