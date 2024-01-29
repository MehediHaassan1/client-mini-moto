import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/AllToys/AllToys/AllToys";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Contact from "../pages/Contact/Contact";
import ToyDetails from "../pages/ToyDetails/ToyDetails/ToyDetails";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys/MyToys";
import PrivetRoute from "./PrivetRoute";
import NotFound from "../pages/Shared/NotFound/NotFound";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "all-toys",
                element: <AllToys />,
                loader: () => fetch("https://mini-moto.onrender.com/all-toys"),
            },
            {
                path: "details/:id",
                element: (
                    <PrivetRoute>
                        <ToyDetails />
                    </PrivetRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://mini-moto.onrender.com/all-toys/${params.id}`
                    ),
            },
            {
                path: "add-toy",
                element: (
                    <PrivetRoute>
                        <AddToy />
                    </PrivetRoute>
                ),
            },
            {
                path: "my-toys",
                element: (
                    <PrivetRoute>
                        <MyToys />
                    </PrivetRoute>
                ),
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "blogs",
                element: <Blogs/>,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "signup",
                element: <SignUp />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound></NotFound>,
    },
]);

export default router;
