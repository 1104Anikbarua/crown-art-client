import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Shared/Authentication/Login/Login";
import Register from "../Shared/Authentication/Register/Register";
import Instructors from "../Pages/Home/Instructors/Instructors";
import Classes from "../Pages/Home/Classes/Classes";
import Dashboard from "../Dashboard/Dashboard";
import MySelectedClass from "../Dashboard/StudentDashboard/Pages/MySelectedClass/MySelectedClass";
import MyEnrolledClass from "../Dashboard/StudentDashboard/Pages/MyEnrolledClass/MyEnrolledClass";
import MyPaymentPage from "../Dashboard/StudentDashboard/Pages/MyPaymentPage/MyPaymentPage";
import RequireAuth from "../Shared/RequireAuth/RequireAuth";
import ManageClasses from "../Dashboard/AdminDashBoard/ManageClasses/ManageClasses";
import ManageUsers from "../Dashboard/AdminDashBoard/ManageUsers/ManageUsers";
import AddClasses from "../Dashboard/InstructorDashboard/AddClasses/AddClasses";
import MyClasses from "../Dashboard/InstructorDashboard/MyClasses/MyClasses";

import RequireAdmin from "../Shared/RequireAdmin/RequireAdmin";
import RequireInstructor from "../Shared/RequireInstructor/RequireInstructor";
import NotFound from "../Shared/NotFound/NotFound";
import MyPaymentHistory from "../Dashboard/StudentDashboard/Pages/MyPaymentHistory/MyPaymentHistory";
import AboutUs from "../Pages/Home/AboutUs/AboutUs";
import ContactUs from "../Pages/Home/ContacUs/ContactUs";
import Terms from "../Pages/Home/Terms/Terms";
import Payment from "../Pages/Home/Payment/Payment";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'about',
                element: <AboutUs></AboutUs>
            },
            {
                path: 'terms',
                element: <Terms></Terms>
            },
            // {
            //     path: 'contact',
            //     element: <ContactUs></ContactUs>
            // }
            {
                path: 'payment',
                element: <Payment></Payment>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <RequireAuth>
            <Dashboard></Dashboard>
        </RequireAuth>,
        children: [
            {
                path: 'classes/selected',
                // index: {true},
                element: <MySelectedClass></MySelectedClass>
            },
            {
                path: 'classes/enrolled',
                element: <MyEnrolledClass></MyEnrolledClass>
            },
            {
                path: 'classes/payments/:id',
                element: <MyPaymentPage></MyPaymentPage>
            },
            {
                path: 'payments',
                element: <MyPaymentHistory></MyPaymentHistory>
            },

            // instructor routes starts here 
            {
                path: 'instructor/add',
                element: <RequireInstructor>
                    <AddClasses></AddClasses>
                </RequireInstructor>
            },
            {
                path: 'instructor/classes',
                element: <RequireInstructor>
                    <MyClasses></MyClasses>
                </RequireInstructor>
            },
            // instructor routes ends here


            // admin routes starts here
            {
                path: 'admin/classes/manage',
                element: <RequireAdmin>
                    <ManageClasses></ManageClasses>
                </RequireAdmin>

            },
            {
                path: 'admin/classes/users',
                element: <RequireAdmin>
                    <ManageUsers></ManageUsers>
                </RequireAdmin>
            }
            // {
            //     path: 'feedback/:id',
            //     element: <AdminFeedBack></AdminFeedBack>
            // }

            // admin routes ends here 
        ]

    }
])

export default router;