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

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                path: 'classes/payments',
                element: <MyPaymentPage></MyPaymentPage>
            },

            // instructor routes starts here 
            {
                path: 'instructor/add',
                element: <></>
            },
            {
                path: 'instructor/classes',
                element: <></>
            },
            // instructor routes ends here


            // admin routes starts here
            {
                path: 'admin/classes/manage',
                element: <ManageClasses></ManageClasses>

            },
            {
                path: 'admin/classes/users',
                element: <ManageUsers></ManageUsers>
            }

            // admin routes ends here 
        ]

    }
])

export default router;