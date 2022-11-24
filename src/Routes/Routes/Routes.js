import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import SalePost from "../../Pages/Home/SalePost/SalePost";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

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
            // {
            //     path: '/products/:id',
            //     element:
            // }
        ]
    }
])

export default router;