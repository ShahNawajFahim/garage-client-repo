import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../../404NotFound/NotFoundPage";
import Blog from "../../Blog/Blog";
import Main from "../../Layout/Main";
import AllPost from "../../Pages/AllPost/AllPost";
import AllUsers from "../../Pages/AllUsers/AllUsers";
import Home from "../../Pages/Home/Home/Home";
import SalePost from "../../Pages/Home/SalePost/SalePost";
import Login from "../../Pages/Login/Login";
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
                path: '/post',
                element: <SalePost></SalePost>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)

            },
            {
                path: '/modal/:id',
                element: <BookingModal></BookingModal>
            },
            {
                path: '/admin/allusers',
                element: <PrivateRoute><AdminRoute><AllUsers></AllUsers></AdminRoute></PrivateRoute>

            },
            {
                path: '/admin/allposts',
                element: <PrivateRoute><AdminRoute><AllPost></AllPost></AdminRoute></PrivateRoute>

            },
            {
                path: '/myposts',
                element: <PrivateRoute><SellerRoute><MyPosts></MyPosts></SellerRoute></PrivateRoute>
            },



        ]
    },
    {
        path: '*',
        element: <NotFoundPage></NotFoundPage>
    }
])

export default router;