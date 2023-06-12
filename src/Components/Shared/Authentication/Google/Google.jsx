import React, { useContext } from 'react';
import { DrawingContext } from '../../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import google from '../../../../assets/icon/googlee.png'
import Swal from 'sweetalert2';

const Google = () => {
    const { googleSignUp } = useContext(DrawingContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleSignUpGoogle = () => {
        googleSignUp()
            .then((result) => {
                const user = result.user;
                // console.log(user)
                const userInfo = {
                    name: user.displayName,
                    email: user?.email
                }
                fetch('https://batch-7-assignment-12-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Sucessfully Registered',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate(from, { replace: true })
                    })
            })
            .catch(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Registration Failed',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }
    return (
        <div>
            <button
                onClick={handleSignUpGoogle}
                className='flex font-montserrat font-bold my-5 justify-center rounded-md bg-orange-100 items-center uppercase py-1 w-full max-w-sm mx-auto'
            >
                <span className='mr-2'>
                    Continue With Google
                </span>
                <img
                    className='w-5 h-5'
                    src={google}
                    alt="google logo" />
            </button>
        </div>
    );
};

export default Google;