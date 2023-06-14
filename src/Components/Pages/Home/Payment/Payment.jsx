import React from 'react';
import { Helmet } from 'react-helmet-async';

const Payment = () => {
    return (
        <>
            <Helmet>
                <title>Crown | Pament</title>
            </Helmet>
            <div className='w-full max-w-7xl my-20 mx-auto divide-y-8 divide-gray-300 px-5 lg:px-0'>
                <p className='font-montserrat text-xl mb-2'>
                    At our drawing school, we offer various convenient payment methods to accommodate our students. Here are some common payment methods you can expect:

                </p>
                <p className='font-montserrat text-xl mb-2'>
                    Credit/Debit Cards: We accept major credit and debit cards, including Visa, Mastercard, American Express, and Discover. You can securely provide your card information during the enrollment process, either online or at our school's administrative office.

                </p>
                <p className='font-montserrat text-xl mb-2'>
                    Bank Transfers: We may also accept direct bank transfers. You can request our bank account details to initiate the transfer. Please note that bank transfers may require additional processing time, so make sure to plan accordingly.

                </p>
                <p className='font-montserrat text-xl mb-2'>

                    Online Payment Platforms: We utilize popular online payment platforms such as PayPal, Stripe, or similar services. These platforms offer secure and convenient online payment options, and you can link your bank account or credit card to make payments.
                </p>
            </div>
        </>
    )
};

export default Payment;