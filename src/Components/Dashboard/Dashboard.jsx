import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { TfiWrite } from 'react-icons/tfi'
import { MdAdsClick } from 'react-icons/md'
import { AiOutlineHome, AiOutlinePayCircle } from 'react-icons/ai'
import UseAdmin from '../Hook/UseAdmin';
import UseInstructor from '../Hook/UseInstructor';

const Dashboard = () => {
    // const isAdmin = true;
    const [isAdmin] = UseAdmin()
    const [isInstructor] = UseInstructor()

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col mx-10">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-zinc-100">
                        {/* Sidebar content here */}

                        {
                            isInstructor?.instructor &&
                            <>
                                {/* instructor dashboard routes starts here */}
                                <li>
                                    <NavLink to={'instructor/add'} className={({ isActive }) => isActive ? 'dashboard-true' : 'dashboard-false'}>
                                        <AiOutlinePayCircle className='mr-3 text-2xl'></AiOutlinePayCircle>
                                        Add A Class
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'instructor/classes'} className={({ isActive }) => isActive ? 'dashboard-true' : 'dashboard-false'}>
                                        <AiOutlinePayCircle className='mr-3 text-2xl'></AiOutlinePayCircle>
                                        My Classes
                                    </NavLink>
                                </li>
                                {/* instructor dashboard routes ends here  */}
                            </>

                        }

                        {
                            isAdmin?.admin &&
                            <>
                                {/* admin dashboard routes starts here */}
                                <li>
                                    <NavLink to={'admin/classes/manage'} className={({ isActive }) => isActive ? 'dashboard-true' : 'dashboard-false'}>
                                        <AiOutlinePayCircle className='mr-3 text-2xl'></AiOutlinePayCircle>
                                        Manage Classes
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'admin/classes/users'} className={({ isActive }) => isActive ? 'dashboard-true' : 'dashboard-false'}>
                                        <AiOutlinePayCircle className='mr-3 text-2xl'></AiOutlinePayCircle>
                                        Manage Users
                                    </NavLink>
                                </li>
                                {/* admin dashboard routes ends here  */}
                            </>

                        }
                        {isAdmin?.admin || isInstructor?.instructor ||
                            <>
                                {/* student dashboard routes */}
                                <li>
                                    <NavLink to={'classes/selected'} className={({ isActive }) => isActive ? 'dashboard-true' : 'dashboard-false'}>
                                        <MdAdsClick className='text-2xl mr-3'></MdAdsClick>
                                        My Selected Classes
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'classes/enrolled'} className={({ isActive }) => isActive ? 'dashboard-true' : 'dashboard-false'}>
                                        <TfiWrite className='text-2xl mr-3'></TfiWrite>
                                        My Enrolled Classes
                                    </NavLink>
                                </li>
                                {/* <li>
                                    <NavLink to={'classes/payments'} className={({ isActive }) => isActive ? 'dashboard-true' : 'dashboard-false'}>
                                        <AiOutlinePayCircle className='mr-3 text-2xl'></AiOutlinePayCircle>
                                        My Payment Page
                                    </NavLink>
                                </li> */}
                                {/* student dashboard routes ends here  */}
                            </>
                        }

                        <li>
                            <NavLink to={'/'} className={({ isActive }) => isActive ? 'dashboard-true' : 'dashboard-false'}>
                                <AiOutlineHome className='text-2xl mr-3'></AiOutlineHome>
                                Home
                            </NavLink>
                        </li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;