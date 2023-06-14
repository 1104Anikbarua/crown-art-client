import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { DrawingContext } from '../../../AuthProvider/AuthProvider';

const CheckoutForm = ({ classes }) => {

    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState('');
    const [trxid, setTrxid] = useState('');
    const [cardDetail, setCardDetail] = useState('');
    const { user } = useContext(DrawingContext)
    // console.log(user)
    console.log(classes)

    const { price } = classes || {};

    useEffect(() => {
        if (price) {
            fetch('https://batch-7-assignment-12-server.vercel.app/create-payment-intent', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ price })
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (data.clientSecret) {
                        setClientSecret(data.clientSecret)
                    }
                })
        }
    }, [price]);

    // console.log(classes)
    var timestamp = new Date().getTime();
    const date = new Date();

    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setCardError(error.message) || setCardError('');
            setSuccess('');
        }
        else {
            // console.log(paymentMethod)
            setCardDetail(paymentMethod?.card?.brand)
        }

        // confirm card payment 
        const { paymentIntent, paymentIntentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName,
                        email: classes?.email,
                    },
                },
            },
        );
        if (paymentIntentError) {
            // console.log(paymentIntentError)
            setCardError(paymentIntentError?.message)
            setSuccess('');

        }
        else {
            setSuccess('Congrats! Your payment is completed')
            // console.log(paymentIntent);
            setTrxid(paymentIntent.id);

            // store payment in database
            const payment = {
                courseId: classes?._id,
                trxid: paymentIntent.id,
                name: user?.displayName,
                email: classes?.email,
                className: classes?.className,
                time: timestamp,
                date: date,
                mainCourseId: classes?.courseId,

            }
            fetch(`https://batch-7-assignment-12-server.vercel.app/classes/payment/${classes?._id}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)

            })
                .then(response => response.json())
                .then(data => {

                    console.log(data)
                    if (data.modifiedCount) {
                        fetch(`https://batch-7-assignment-12-server.vercel.app/payment/${classes?._id}`, {
                            method: "PATCH",
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(payment)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)
                            })
                    }

                })
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '18px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-sm btn-success text-white mt-4 mb-4 pl-5 pr-5" type="submit"

                    disabled={!stripe || !clientSecret}

                >
                    Pay
                </button>
            </form >
            {cardError && <p className='text-red-700 text-xl text-center'>{cardError}</p>}
            {success &&
                <div className='text-green-700 text-xl text-center'>
                    <p>{success}</p>
                    <p>{cardDetail} transaction id: {trxid}</p>
                </div>}
        </>
    );
};

export default CheckoutForm;