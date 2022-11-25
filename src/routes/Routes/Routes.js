import { createBrowserRouter } from "react-router-dom";
import Main from '../../layout/Main'
import Book from "../../pages/Book/Book";
import Booked from "../../pages/Booked/Booked";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import BookCategories from "../../pages/Home/Category/BookCategories";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/booking',
                element: <Booked></Booked>
            },
            {
                path: '/categories',
                element: <BookCategories></BookCategories>
            },
            {
                path: '/category/:id',
                element: <Book></Book>,
                loader: ({params}) => fetch(`http://localhost:5000/books/${params.id}`)
            }

        ]
    }
])

export default router;