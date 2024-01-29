import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import Authorization from "./context/Authorization.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Authorization>
        <RouterProvider router={router} />
        <Toaster />
    </Authorization>
);
