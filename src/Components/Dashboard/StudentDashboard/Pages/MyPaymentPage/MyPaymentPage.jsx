import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DrawingContext } from '../../../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { loadStripe } from '@stripe/stripe-js';
import { MdNavigateNext } from 'react-icons/md';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../../CheckoutForm/CheckoutForm';
import { Helmet } from 'react-helmet-async';

const key = import.meta.env.VITE_STRIPE_KEY
const stripePromise = loadStripe(key);
// console.log(stripePromise)


const MyPaymentPage = () => {
    const { user } = useContext(DrawingContext);
    const { id } = useParams()
    // console.log(id)

    const { isLoading, refetch, data: classes } = useQuery({
        // enabled: !!user?.email,
        queryKey: ['payments', id],
        queryFn: () => fetch(`https://batch-7-assignment-12-server.vercel.app/selected/classes/${id}`)
            .then(res => res.json())
    })
    // console.log(classes)

    // console.log(timestamp);

    return (
        <div className='w-full max-w-7xl mx-auto'>
            <Helmet>
                <title>Crown | Payment-Page</title>
            </Helmet>
            <h1 className='font-playfair font-extrabold text-4xl text-center mb-5 hover:text-orange-100'>Payment Page</h1>
            <div className='flex items-center flex-wrap'>
                <p className='text-orange-100 font-montserrat text-base font-medium'>
                    <Link to={'/'}>
                        Home
                    </Link>
                </p>
                <MdNavigateNext className='mx-5'></MdNavigateNext>
                <p className='text-orange-100 font-montserrat text-base font-medium'>
                    <Link to={'classes'}>
                        Classes
                    </Link>
                </p>
                <MdNavigateNext className='mx-5'></MdNavigateNext>
                <p className='font-montserrat text-base font-medium whitespace-pre-line text-orange-100'>
                    <Link to={'/dashboard/classes/selected'}>
                        My Selected Class
                    </Link>
                </p>
                <MdNavigateNext className='mx-5'></MdNavigateNext>
                <p className='font-montserrat text-base font-medium whitespace-pre-line'>
                    Payments
                </p>
            </div>
            <div className="card lg:max-w-md bg-base-100 shadow-xl mx-auto p-8 mt-5">
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        classes={classes}
                        isLoading={isLoading}
                    >
                    </CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default MyPaymentPage;