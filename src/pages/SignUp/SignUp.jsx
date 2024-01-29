import React, { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/Authorization";
import toast from "react-hot-toast";

const SignUp = () => {
    const [error, setError] = useState("");
    const [watch, setWatch] = useState(false);

    const { signUpUser, updateUserProfileInfo } = useContext(UserContext);

    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const fullName = firstName + " " + lastName;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        setError("");
        if (!/.*[A-Z]/.test(password)) {
            setError("Password must contain at least 1 uppercase");
            return;
        } else if (!/.*[a-z]/.test(password)) {
            setError("Password must contain at least 1 lowercase");
            return;
        } else if (!/.{8,}/.test(password)) {
            setError("Password must contain at least 8 characters");
            return;
        } else if (!/.*[0-9]/.test(password)) {
            setError("Password must contain at least 1 number");
            return;
        } else if (password !== confirmPassword) {
            setError("Password did not matched");
            return;
        } else {
            signUpUser(email, password)
                .then((result) => {
                    const user = result.user;
                    console.log(user);
                    toast.success("User created successfully!");
                    updateUserProfileInfo(fullName)
                })
                .catch((error) => setError(error.message));
        }
    };

    const handleWatch = () => {
        setWatch(!watch);
    };

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
                        <form
                            className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                            onSubmit={handleSignUp}
                        >
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
                                        name="firstName"
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
                                        name="lastName"
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
                                    name="email"
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
                                    <div className="relative w-full">
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline -z-10"
                                            id="password"
                                            type={`${
                                                watch ? "text" : "password"
                                            }`}
                                            placeholder="******************"
                                            required
                                            name="password"
                                        />
                                        <div
                                            onClick={handleWatch}
                                            className="absolute top-0 right-0 p-2"
                                        >
                                            {watch ? (
                                                <FaRegEye />
                                            ) : (
                                                <FaRegEyeSlash />
                                            )}
                                        </div>
                                    </div>
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
                                        type={`${watch ? "text" : "password"}`}
                                        placeholder="******************"
                                        required
                                        name="confirmPassword"
                                    />
                                </div>
                            </div>
                            <div>
                                <p className="text-red-500 font-semibold">
                                    {error}
                                </p>
                            </div>
                            <div className="my-6 text-center">
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
