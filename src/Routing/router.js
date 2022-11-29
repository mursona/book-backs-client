import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AllProducts from "../Pages/AllProducts/AllProducts";
import Blog from "../Pages/Blog/Blog";
import AddProduct from "../Pages/DashBoardPage/AddProduct/AddProduct";
import AllByer from "../Pages/DashBoardPage/AllBuyer/AllByer";
import Allseller from "../Pages/DashBoardPage/AllSeller/Allseller";
import Myorders from "../Pages/DashBoardPage/Myorders/Myorders";
import MyProducts from "../Pages/DashBoardPage/MyProducts/MyProducts";
import ProductBuy from "../Pages/DashBoardPage/ProductBuy/ProductBuy";
import Reports from "../Pages/DashBoardPage/Reports/Reports";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import AdminRoute from "./AdminRoute";
import PrivetRouting from "./PrivetRouting";
import SellerRouting from "./SellerRouting";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/signup',
                element : <Signup></Signup>
            },
            {
                path : '/blog',
                element : <Blog></Blog>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/category/:id',
                element : <PrivetRouting><AllProducts></AllProducts></PrivetRouting>,
                loader : ({params})=> fetch(`http://localhost:5000/categories/${params.id}`)

            },
            
        ]
    },
    {
        path : '/dashboard', 
        errorElement : <ErrorPage></ErrorPage>,
        element : <PrivetRouting> <DashboardLayout></DashboardLayout> </PrivetRouting> ,
        children : [
            {
                path : '/dashboard',
                element : <Myorders></Myorders>
            },
            {
                path : '/dashboard/purchase/:id',
                element : <ProductBuy></ProductBuy>,
                loader : ({params})=> fetch(`http://localhost:5000/product/purchase/${params.id}`)
                
            },
            {
                path : '/dashboard/myproducts',
                element : <SellerRouting><MyProducts></MyProducts></SellerRouting>
            },
            {
                path : '/dashboard/addproducts',
                element : <SellerRouting><AddProduct></AddProduct></SellerRouting>
            },

            {
                path : '/dashboard/allseller',
                element : <AdminRoute> <Allseller></Allseller> </AdminRoute>
            },
            {
                path : '/dashboard/allbyer',
                element : <AdminRoute> <AllByer></AllByer> </AdminRoute>
            },
            {
                path : '/dashboard/report',
                element : <AdminRoute> <Reports></Reports> </AdminRoute>
            },
           
        ]
    }
])
export default router