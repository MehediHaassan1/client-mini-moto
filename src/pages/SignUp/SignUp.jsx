import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-center items-center min-h-screen px-6">
                <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                    <div
                        className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg bg-center object-cover"
                        style={{
                            backgroundImage:
                                "url('https://i.ibb.co/xHL92MW/pirelli.jpg')",
                        }}
                    ></div>

                    <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                        <h3 className="pt-4 text-2xl text-center">
                            Create an Account!
                        </h3>
                        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                            <div className="mb-4 md:flex md:justify-between">
                                <div className="mb-4 md:mr-2 md:mb-0 w-full">
                                    <label
                                        className="block mb-2 text-sm font-bold text-gray-700"
                                        htmlFor="firstName"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="firstName"
                                        type="text"
                                        placeholder="First Name"
                                        required
                                    />
                                </div>
                                <div className="md:ml-2 w-full">
                                    <label
                                        className="block mb-2 text-sm font-bold text-gray-700"
                                        htmlFor="lastName"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="lastName"
                                        type="text"
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block mb-2 text-sm font-bold text-gray-700"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="mb-4 md:flex md:justify-between">
                                <div className="mb-4 md:mr-2 md:mb-0 w-full">
                                    <label
                                        className="block mb-2 text-sm font-bold text-gray-700"
                                        htmlFor="password"
                                    >
                                        Password
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder="******************"
                                        required
                                    />
                                   
                                </div>
                                <div className="md:ml-2 w-full">
                                    <label
                                        className="block mb-2 text-sm font-bold text-gray-700"
                                        htmlFor="c_password"
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="c_password"
                                        type="password"
                                        placeholder="******************"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-6 text-center">
                                <button
                                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Register Account
                                </button>
                            </div>
                            <hr className="mb-6 border-t" />
                            <div className="text-center">
                                <p
                                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                    href="./index.html"
                                >
                                    Already have an account?{" "}
                                    <Link to="/login">Login!</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
