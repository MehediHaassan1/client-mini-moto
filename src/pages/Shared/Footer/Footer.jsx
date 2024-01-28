import React from "react";
import {
    FaArrowRight,
    FaFacebookF,
    FaYoutube,
    FaTwitter,
} from "react-icons/fa";
import logo from "../../../assets/logo-alt.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-neutral text-neutral-content">
            <footer className="footer md:p-4 lg:p-10  max-w-7xl mx-auto">
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Product Categories</h6>
                    <Link className="link link-hover">Cars</Link>
                    <Link className="link link-hover">Sports Cars</Link>
                    <Link className="link link-hover">Bikes</Link>
                </nav>

                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <FaFacebookF className="h-8 w-8 hover:text-[#88B7B5] cursor-pointer" />
                        </a>
                        <a>
                            <FaTwitter className="h-8 w-8 hover:text-[#88B7B5] cursor-pointer" />
                        </a>
                        <a>
                            <FaYoutube className="h-8 w-8 hover:text-[#88B7B5] cursor-pointer" />
                        </a>
                    </div>
                </nav>
                <nav>
                    <form>
                        <h6 className="footer-title">Newsletter</h6>
                        <fieldset className="form-control lg:w-80">
                            <label className="label">
                                <span className="label-text text-white">
                                    Enter your email address
                                </span>
                            </label>
                            <div className="join rounded-full bg-white py-1 px-2 flex items-center justify-between text-gray-800">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered-full join-item focus:border-0 focus:outline-0"
                                />
                                <button className="w-10 h-10 flex items-center justify-center rounded-full text-[#310A31] bg-[#A7CAB1]">
                                    <FaArrowRight />
                                </button>
                            </div>
                        </fieldset>
                    </form>
                </nav>
            </footer>
            <footer className="footer items-center md:p-4 bg-neutral text-neutral-content md:justify-items-center">
                <aside className="items-center md:grid-flow-col">
                    <img src={logo} />
                    <p className="text-xs">
                        Copyright &copy; {new Date().getFullYear()} - All right
                        reserved
                    </p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
