import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import authjson from '../lottieauth.json'
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { DrawingContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    // const [photo, setPhoto] = useState({})
    // console.log(photo)
    const { signUpUser, updateUser, setRefresh } = useContext(DrawingContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const imageKey = import.meta.env.VITE_IMAGE_KEY;
    // console.log(imageKey)
    const navigate = useNavigate()
    const location = useLocation();
    const from = location?.state || '/';
    const onSubmit = data => {
        console.log(data);
        const name = data?.name
        const email = data?.email
        const password = data?.password
        const confirmPassword = data?.confirmPassword
        if (confirmPassword !== password || email === '' || password === '') {
            return;
        }
        const formData = new FormData();
        formData.append('image', data?.photo[0])

        fetch(`https://api.imgbb.com/1/upload?key=${imageKey}`, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.status === 200) {
                    signUpUser(email, password)
                        .then((result) => {
                            const user = result.user;
                            console.log(user)
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Sucessfully Registered',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            updateUser(name, data?.data?.url)
                                .then(() => {
                                    setRefresh(new Date().getTime())
                                    // const userInfo = {
                                    //     name: name,
                                    //     email: email
                                    // }
                                    // fetch('http://localhost:5000/users', {
                                    //     method: 'POST',
                                    //     headers: {
                                    //         'content-type': 'application/json'
                                    //     },
                                    //     body: JSON.stringify(userInfo)
                                    // })
                                    //     .then(res => res.json())
                                    //     .then(data => {
                                    //         if (data.insertedId) {
                                    //             Swal.fire({
                                    //                 position: 'center',
                                    //                 icon: 'success',
                                    //                 title: `${name} is set as Display Name`,
                                    //                 showConfirmButton: false,
                                    //                 timer: 1500
                                    //             })
                                    //         }
                                    //     })
                                })
                                .catch(() => {
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'error',
                                        title: 'Update Failed',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                })

                            navigate(from, { replace: true })

                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;

                            console.log(errorCode, errorMessage);
                            Swal.fire({
                                position: 'center',
                                icon: 'error',
                                title: 'Registration Failed',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        })
                }
            })

        reset()

    }
    // const handlePhotoChange = (event) => {
    //     const photo = event.target.files[0]
    //     // console.log(event.target)
    //     setPhoto(photo)

    // }
    // console.log(errors);
    return (
        <div className='w-full max-w-7xl mx-auto mt-20 md:flex justify-between items-center px-5 lg:px-0 font-montserrat'>
            <div className='w-full max-w-md mx-auto hidden md:block'>
                <Lottie animationData={authjson} loop={true} />;
            </div>
            <div className='w-full rounded'>
                <h1 className='text-center font-montserrat font-bold text-xl'>Create Account</h1>
                <form
                    className='flex flex-col'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className='flex flex-col w-full max-w-sm mx-auto mb-2'>
                        <label
                            className='font-montserrat text-xl font-medium mb-2'
                            htmlFor="Name">Name</label>
                        <input
                            className='h-8 bg-blue-100 rounded-md outline-none placeholder:pl-2 placeholder:font-montserrat'
                            type="text"
                            placeholder="Name"
                            {...register("name",
                                {
                                    required:
                                    {
                                        value: true,
                                        message: 'Name Is Required',
                                        maxLength: 20
                                    }
                                })} />
                        {
                            errors?.name?.type === 'required' && <span className='text-base text-red-600 font-medium'>{errors?.name?.message}</span>}
                    </div>
                    <div className='flex flex-col w-full max-w-sm mx-auto mb-2'>
                        <label htmlFor="Email"
                            className='font-montserrat text-xl font-medium mb-2'
                        >Email</label>
                        <input
                            className='h-8 bg-blue-100 rounded-md outline-none placeholder:pl-2 placeholder:font-montserrat'
                            type="text"
                            placeholder="Email"
                            {...register("email", {
                                required:
                                {
                                    value: true,
                                    message: 'Email is required',
                                },
                                pattern: {

                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Please Provide a valid Email'

                                }
                            })}

                        />
                        {
                            errors?.email?.type === 'required' && <span className='text-red-600 font-medium text-base'>{errors?.email?.message}</span>
                        }
                        {
                            errors?.email?.type === 'pattern' && <span className=' text-base font-medium text-red-600'>{errors?.email?.message}</span>
                        }
                    </div>
                    <div className='flex flex-col w-full max-w-sm mx-auto mb-2'>
                        <label
                            htmlFor="Password"
                            className='font-montserrat text-xl font-medium mb-2'
                        >Password</label>
                        <input
                            className='h-8 bg-blue-100 rounded-md outline-none placeholder:pl-2 placeholder:font-montserrat'
                            type="password"
                            placeholder="Password"
                            {...register("password",
                                {
                                    required: {
                                        value: true,
                                        message: 'Password is Required',

                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 charcter long'
                                    },
                                    validate: {
                                        hasCapitalLetter: (value) =>
                                            /^(?=.*[A-Z])/.test(value) ||
                                            'Password must contain at least one capital letter',
                                        hasSpecialCharacter: (value) =>
                                            /^(?=.*[^A-Za-z0-9])/.test(value) ||
                                            'Password must contain at least one special character',
                                    },
                                })} />
                        {
                            errors?.password?.type === 'required' && <span className=' text-base font-medium text-red-600'>{errors?.password?.message}</span>
                        }

                        {
                            errors?.password?.type === 'minLength' && <span className=' text-base font-medium text-red-600'>{errors?.password?.message}</span>
                        }
                        {
                            errors?.password?.type === 'pattern' && <span className=' text-base font-medium text-red-600'>{errors?.password?.message}</span>
                        }
                        {
                            errors?.password?.type === 'hasCapitalLetter' && <span className=' text-base font-medium text-red-600'>{errors?.password?.message}</span>
                        }
                        {
                            errors?.password?.type === 'hasSpecialCharacter' && <span className=' text-base font-medium text-red-600'>{errors?.password?.message}</span>
                        }

                    </div>

                    <div className='flex flex-col w-full max-w-sm mx-auto mb-2'>
                        <label
                            className='font-montserrat text-xl font-medium mb-2'
                            htmlFor="Confirm Password"
                        >Confirm Password</label>
                        <input
                            className='h-8 bg-blue-100 rounded-md outline-none placeholder:pl-2 placeholder:font-montserrat'
                            type="password"
                            placeholder="Confirm Password"
                            {...register("confirmPassword", { min: 6 })} />
                    </div>

                    <div className='flex flex-col w-full max-w-sm mx-auto mb-4'>
                        <label
                            className='font-montserrat text-xl font-medium mb-2'
                            htmlFor="Photo">Photo</label>
                        <input
                            className='h-8 bg-blue-100 rounded-md outline-none placeholder:pl-2 placeholder:font-montserrat'
                            // onChange={handlePhotoChange}
                            type="file"
                            placeholder="Photo"
                            {...register("photo")} />
                    </div>

                    <input
                        className='bg-orange-100 h-8 w-full max-w-sm rounded-md font-montserrat shadow-md text-xl mx-auto cursor-pointer'
                        type="submit" />
                    <p
                        className='font-montserrat font-medium mt-2 w-full max-w-sm mx-auto'>Already have an account? Please <Link
                            state={from}
                            to={'/login'}
                            className='text-blue-500'>Login</Link></p>
                </form>
            </div>
            <div className='w-full max-w-md mx-auto hidden md:block'>
                <Lottie animationData={authjson} loop={true} />;
            </div>
        </div >
    );
};

export default Register;
