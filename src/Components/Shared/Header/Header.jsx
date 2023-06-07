import React, { useContext, useState } from 'react';
import logo from '../../../assets/logo/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react'
import { HiOutlineSearch } from 'react-icons/hi'
import { GiSelfLove } from 'react-icons/gi'
import { CgShoppingCart } from 'react-icons/cg'
import { DrawingContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';


const Header = () => {

    const [show, setShow] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [click, setClick] = useState(false);

    const { user, logOutUser } = useContext(DrawingContext);
    console.log(user)

    // const totalProduct = carts?.reduce((previous, current) => current.quantity + previous, 0)
    // console.log(totalProduct)

    const handleLogOutUser = () => {
        logOutUser()
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Logout successful`,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: `Something went wrong`,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    return (
        <div className='flex items-center justify-between
         bg-[#7d7975] shadow-sm
        fixed top-0 right-0 left-0 h-20 md:px-20 z-20'>
            <div className='flex items-center justify-between'>
                <Link to={'/'}>
                    <img
                        src={logo}
                        alt="website nav logo" />
                </Link>
                <ul
                    className={`flex items-center flex-col absolute duration-700 w-full shadow-sm justify-center md:flex-row md:justify-end md:static md:shadow-none ${show ? 'top-[82px]' : '-top-96'}`}>
                    <li className="md:mr-5">

                        <NavLink className={({ isActive }) => isActive ? 'true' : 'false'} to={'/'}>Home</NavLink>

                    </li>
                    <li className="md:mr-5">

                        <NavLink className={({ isActive }) => isActive ? 'true' : 'false'} to={'alltoy'}>Instructors</NavLink>

                    </li>
                    {
                        // user&&
                        <li className="md:mr-5">

                            <NavLink className={({ isActive }) => isActive ? 'true' : 'false'} to={'mytoy'}>Classes</NavLink>

                        </li>
                    }
                    {
                        user
                        &&
                        <li className="md:mr-5">
                            <NavLink className={({ isActive }) => isActive ? 'true' : 'false'} to={'addtoy'}>Dashboard</NavLink>
                        </li>
                    }


                    {
                        user
                            ?
                            <li className="md:mr-5">
                                <NavLink
                                    onClick={() => handleLogOutUser()}
                                    className={({ isActive }) => isActive ? 'true' : 'false'} to={'login'}>Logout</NavLink>
                            </li>
                            : <li className="md:mr-5">
                                <NavLink className={({ isActive }) => isActive ? 'true' : 'false'} to={'login'}>Login</NavLink>
                            </li>
                    }
                    {
                        user
                        &&
                        <li className="md:mr-5">
                            <NavLink className={({ isActive }) => isActive ? 'true' : 'false'} to={'profile'}>
                                <img
                                    title={user?.displayName}
                                    className='w-10 h-10 rounded-full'
                                    src={user?.photoURL}
                                    alt="user photo" />
                            </NavLink>
                        </li>
                    }
                    {!user &&
                        <li className="md:mr-5">
                            <NavLink className={({ isActive }) => isActive ? 'true' : 'false'} to={'register'}>Register</NavLink>
                        </li>
                    }
                </ul>
            </div>

            <div className='hidden md:flex lg:flex items-center justify-center'>

                <div className={`absolute duration-1000 ${click ? 'right-[174px] -z-50' : 'right-44'}`}>
                    <input
                        // style={inputStyle}
                        className={`bg-blue-100 outline-none rounded-full pl-2
                        placeholder:pl-2
                        ${click ? 'w-60 duration-1000 h-10' : 'w-0 h-10 duration-1000'}
                        `}
                        type="text"
                        name=""
                        id=""
                        placeholder='Search'
                        required />

                    <HiOutlineSearch
                        onClick={() => setClick(!click)}
                        className='font-normal text-2xl text-black absolute top-2 right-2 cursor-pointer'></HiOutlineSearch>

                </div>
                <Link
                    onClick={() => setClick(!click)}
                    // onClick={handleClick}

                    className={`mr-5 z-50 bg-blue-950 rounded-full flex items-center justify-center w-10 h-10 ${click ? 'hidden' : ''}`}>
                    <HiOutlineSearch className='font-normal text-2xl text-white'></HiOutlineSearch>
                </Link>
                <Link className='mr-5 z-50'>
                    <GiSelfLove className='font-normal text-2xl'></GiSelfLove>
                </Link>
                <Link to={'cart'} className='z-50'>
                    <CgShoppingCart className='font-normal text-2xl'></CgShoppingCart>
                    <span className='text-xs text-red-600 font-bold absolute top-5 right-[85px]'>

                        {/* {totalProduct} */}

                    </span>
                </Link>
            </div>

            <div className='md:hidden'
                onClick={() => setShow(!show)}>
                <Hamburger
                    rounded
                    color='#febb64'
                    toggled={isOpen}
                    toggle={setIsOpen}></Hamburger>
            </div>
        </div >
    );
};

export default Header;