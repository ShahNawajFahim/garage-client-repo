import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../../404NotFound/NotFoundPage";
import Blog from "../../Blog/Blog";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AllPost from "../../Pages/AllPost/AllPost";
import AllBuyers from "../../Pages/AllUsers/AllBuyers";
import AllSellers from "../../Pages/AllUsers/AllSellers";
import AllUsers from "../../Pages/AllUsers/AllSellers";
import Home from "../../Pages/Home/Home/Home";
import SalePost from "../../Pages/Home/SalePost/SalePost";
import Login from "../../Pages/Login/Login";
import MyBookings from "../../Pages/MyBookings/MyBookings";
import MyPosts from "../../Pages/SellerPost/MyPosts/MyPosts";
import BookingModal from "../../Pages/ShowPost/BookingModal/BookingModal";
import Category from "../../Pages/ShowPost/Category";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

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
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },

            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://garage-server.vercel.app/category/${params.id}`)

            },
            {
                path: '/modal/:id',
                element: <BookingModal></BookingModal>
            },



        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/myposts',
                element: <SellerRoute><MyPosts></MyPosts></SellerRoute>
            },
            {
                path: '/dashboard/sellpost',
                element: <SellerRoute><SalePost></SalePost></SellerRoute>
            },
            {
                path: '/dashboard/allposts',
                element: <AdminRoute><AllPost></AllPost></AdminRoute>

            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>

            },
            {
                path: '/dashboard/allbuyer',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>

            },
            {
                path: '/dashboard/mybookings',
                element: <MyBookings></MyBookings>
            }
        ]

    },
    {
        path: '*',
        element: <NotFoundPage></NotFoundPage>
    }
])

export default router;