import { Outlet } from "react-router-dom";
import "./App.css";
import MainNavbar from "./pages/Shared/Navbar/MainNavbar/MainNavbar";
import Footer from "./pages/Shared/Footer/Footer";

function App() {
    return (
        <>
            <MainNavbar></MainNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
}

export default App;
