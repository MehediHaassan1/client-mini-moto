import { Outlet } from "react-router-dom";
import "./App.css";
import MainNavbar from "./pages/Shared/Navbar/MainNavbar/MainNavbar";
import TopNavbar from "./pages/Shared/Navbar/TopNavbar";

function App() {
    return (
        <>
            <TopNavbar></TopNavbar>
            <MainNavbar></MainNavbar>
            <Outlet></Outlet>
        </>
    );
}

export default App;
