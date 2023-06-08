import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
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

                        <li>
                            <NavLink to={'classes/selected'} className={({ isActive }) => isActive ? 'dashboard-true' : 'dashboard-false'}>
                                My Selected Classes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'classes/enrolled'} className={({ isActive }) => isActive ? 'dashboard-true' : 'dashboard-false'}>
                                My Enrolled Classes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'classes/payments'} className={({ isActive }) => isActive ? 'dashboard-true' : 'dashboard-false'}>
                                My Payment Page
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'} className={({ isActive }) => isActive ? 'dashboard-true' : 'dashboard-false'}>
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