import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/AllToys/AllToys/AllToys";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Contact from "../pages/Contact/Contact";
import ToyDetails from "../pages/ToyDetails/ToyDetails/ToyDetails";

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
                loader: () => fetch('http://localhost:5000/all-toys')
            },
            {
                path: "details/:id",
                element: <ToyDetails />,
                loader: ({params}) => fetch(`http://localhost:5000/all-toys/${params.id}`)
            },
            {
                path: "contact",
                element: <Contact/>,
            },
            {
                path: "login",
                element: <Login/>,
            },
            {
                path: "signup",
                element: <SignUp/>,
            },
        ],
    },
]);

export default router;
