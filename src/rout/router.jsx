import { createBrowserRouter } from "react-router";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";
import Products from "../components/products/Products";

const router= createBrowserRouter([
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/",
        element:<Register/>
    },
    {
        path:"/products",
        element:<Products/>
    }
])


export default router 