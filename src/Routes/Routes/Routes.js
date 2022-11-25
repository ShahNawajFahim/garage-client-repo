import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../../404NotFound/NotFoundPage";
import Blog from "../../Blog/Blog";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import SalePost from "../../Pages/Home/SalePost/SalePost";
import Login from "../../Pages/Login/Login";
import Category from "../../Pages/ShowPost/Category";
import PostCard from "../../Pages/ShowPost/PostCard";
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
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)

            },
            {
                path: '/sellpost/:id',
                element: <PostCard></PostCard>,
                loader: ({ params }) => fetch(`http://localhost:5000/sellpost/${params.id}`)

            }



        ]
    },
    {
        path: '*',
        element: <NotFoundPage></NotFoundPage>
    }
])

export default router;