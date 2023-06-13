import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { DrawingContext } from '../../../AuthProvider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { MdNavigateNext } from 'react-icons/md';
import { Link } from 'react-router-dom';

const AddClasses = () => {
    const { user } = useContext(DrawingContext)
    console.log(user)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const imageKey = import.meta.env.VITE_IMAGE_KEY;
    const email = user?.email;
    const instructorName = user?.displayName;

    const onSubmit = (data) => {
        // console.log(data)
        const status = 'pending';
        const className = data?.classname;
        const availableSeats = parseInt(data?.seats)
        const price = parseInt(data?.price)
        const formData = new FormData();
        formData.append('image', data?.photo[0])

        fetch(`https://api.imgbb.com/1/upload?key=${imageKey}`, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                if (data?.status === 200) {
                    const classInfo = { status, className, email, instructorName, availableSeats, price, image: data?.data?.url, photo: user?.photoURL }
                    // console.log(classInfo)
                    fetch('http://localhost:5000/instructor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(classInfo)

                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data)
                            if (data?.insertedId) {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: `Hey ${user?.displayName} you sucessfully add a class`,
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })


    }
    // console.log(errors)
    return (

        <div className='w-full max-w-7xl mx-auto'>
            <h1 className='text-center font-playfair font-extrabold text-4xl hover:text-orange-100'>Add Class</h1>
            <div className='flex items-center flex-wrap'>
                <p className='text-orange-100 font-montserrat text-base font-medium'>
                    <Link to={'/'}>
                        Home
                    </Link>
                </p>
                <MdNavigateNext className='mx-5'></MdNavigateNext>
                <p className='font-montserrat text-base font-medium'>
                    <Link to={'/classes'}>
                        Add Classes
                    </Link>
                </p>

            </div>
            <div className='w-full rounded'>

                <form
                    className='flex flex-col'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className='flex flex-col w-full max-w-sm mx-auto mb-2'>
                        <label
                            className='font-montserrat text-xl font-medium mb-2'
                            htmlFor="Name">Class Name</label>
                        <input
                            className='h-8 bg-blue-100 rounded-md outline-none placeholder:pl-2 placeholder:font-montserrat'
                            type="text"
                            placeholder="Class Name"
                            {...register("classname",
                                {
                                    required:
                                    {
                                        value: true,
                                        message: 'Class Name Is Required',
                                        maxLength: 20
                                    }
                                })} />
                        {
                            errors?.classname?.type === 'required' && <span className='text-base text-red-600 font-medium'>{errors?.classname?.message}</span>
                        }
                    </div>
                    <div className='flex flex-col w-full max-w-sm mx-auto mb-2'>
                        <label
                            className='font-montserrat text-xl font-medium mb-2'
                            htmlFor="Name">Instructor Name</label>
                        <input
                            className='h-8 bg-blue-100 rounded-md outline-none placeholder:pl-2 placeholder:font-montserrat'
                            readOnly
                            disabled
                            defaultValue={user?.displayName}
                            type="text"
                            placeholder="Instructor Name"
                            {...register("instructorname")} />
                    </div>
                    <div className='flex flex-col w-full max-w-sm mx-auto mb-2'>
                        <label htmlFor="Email"
                            className='font-montserrat text-xl font-medium mb-2'
                        >Email</label>
                        <input
                            className='h-8 bg-blue-100 rounded-md outline-none placeholder:pl-2 placeholder:font-montserrat'
                            defaultValue={user?.email}
                            readOnly
                            disabled
                            type="text"
                            placeholder="Email"
                            {...register("email")}
                        />
                    </div>
                    <div className='flex flex-col w-full max-w-sm mx-auto mb-2'>
                        <label
                            htmlFor="Seats"
                            className='font-montserrat text-xl font-medium mb-2'
                        >Available Seats</label>
                        <input
                            className='h-8 bg-blue-100 rounded-md outline-none placeholder:pl-2 placeholder:font-montserrat'
                            type="number"
                            placeholder="Seats"
                            {...register("seats",
                                {
                                    required: {
                                        value: true,
                                        message: 'Seat Number is Required',
                                    },
                                })} />
                        {
                            errors?.seats?.type === 'required' && <span className='text-base text-red-600 font-medium'>{errors?.seats?.message}</span>
                        }
                    </div>

                    <div className='flex flex-col w-full max-w-sm mx-auto mb-2'>
                        <label
                            className='font-montserrat text-xl font-medium mb-2'
                            htmlFor="Price"
                        >Price</label>
                        <input
                            className='h-8 bg-blue-100 rounded-md outline-none placeholder:pl-2 placeholder:font-montserrat'
                            type="number"
                            placeholder="Price"
                            {...register("price",
                                {
                                    required: {
                                        value: true,
                                        message: 'Price is Required',
                                    },
                                })}

                        />
                        {
                            errors?.price?.type === 'required' && <span className='text-base text-red-600 font-medium'>{errors?.price?.message}</span>
                        }
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
                            {...register("photo",
                                {
                                    required: {
                                        value: true,
                                        message: 'Photo is Required'
                                    }
                                }
                            )} />
                        {
                            errors?.photo?.type === 'required' && <span className='text-base text-red-600 font-medium'>{errors?.photo?.message}</span>
                        }

                    </div>

                    <input
                        className='bg-orange-100 h-8 w-full max-w-sm rounded-md font-montserrat shadow-md text-xl mx-auto cursor-pointer'
                        type="submit"
                        value='Add Class'
                    />
                </form>
            </div>
        </div>
    );
};

export default AddClasses;