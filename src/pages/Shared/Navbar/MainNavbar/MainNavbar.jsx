import React, { useState } from "react";
import "./MainNavbar.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.svg";

const MainNavbar = () => {
    return (
        <div className=" sticky top-0 bg-white">
            <header className="max-w-7xl mx-auto">
                <nav className=" z-20 right-0 md:h-16 left-0 border-b border-gray-200 dark:border-gray-600">
                    <ul className="navigation flex flex-wrap justify-between items-center relative mx-auto py-1">
                        <Link className="logo" to="/">
                            <img src={logo} alt="mini moto" className="h-10" />
                        </Link>
                        <input type="checkbox" id="check" />

                        <span className="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
                            <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                
                                    to="/all-toys"
                                >
                                    All Toys
                                </Link>
                            </li>
                            <li>
                                <Link to="/my-toys">
                                    My Toys
                                </Link>
                            </li>
                            <li>
                                <Link to="/add-toy">
                                    Add A Toy
                                </Link>
                            </li>
                            <li>
                                <Link to="/blogs">
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/login">
                                    Login
                                </Link>
                            </li>
                            <label htmlFor="check" className="close-menu">
                                <RxCross2 />
                            </label>
                        </span>

                        <label htmlFor="check" className="open-menu">
                            <FaBarsStaggered className="h-6 w-6" />
                        </label>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default MainNavbar;
