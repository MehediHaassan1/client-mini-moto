import { Outlet } from "react-router-dom";
import "./App.css";
import MainNavbar from "./pages/Shared/Navbar/MainNavbar/MainNavbar";
import TopNavbar from "./pages/Shared/Navbar/TopNavbar";
import Footer from "./pages/Shared/Footer/Footer";

function App() {
    return (
        <>
            <TopNavbar></TopNavbar>
            <MainNavbar></MainNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
}

export default App;
