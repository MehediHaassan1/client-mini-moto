import React, { useContext, useState } from "react";
import {} from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/Authorization";
import toast from "react-hot-toast";

const Login = () => {
    const { signInUser } = useContext(UserContext);
    const [error, setError] = useState("");

    const handleLoginIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setError("");
        if (!/.{8,}/.test(password)) {
            setError("Password must contain at least 8 characters");
            return;
        } else {
            signInUser(email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    if (user) {
                        toast.success("User logged in successfully!");
                    }
                    // ...
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage);
                });
        }
    };

    return (
        <section className="border-red-500 bg-gray-200 min-h-screen flex items-center justify-center">
            <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
                <div className="md:w-1/2 px-5">
                    <h2 className="text-2xl font-bold text-[#002D74]">Login</h2>
                    <p className="text-sm mt-4 text-[#002D74]">
                        If you have an account, please login
                    </p>
                    <form className="mt-6" onSubmit={handleLoginIn}>
                        <div>
                            <label className="block text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter Email Address"
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-[#310A31] focus:bg-white focus:outline-none"
                                autoFocus
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter Password"
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-[#310A31]
                  focus:bg-white focus:outline-none"
                                required
                            />
                        </div>

                        <div className="text-right my-2">
                            <a
                                href="#"
                                className="text-sm font-semibold text-gray-700 hover:text-[#310A31] focus:text-blue-700"
                            >
                                Forgot Password?
                            </a>
                        </div>
                        <div>
                            <p className="text-red-500 font-semibold">
                                {error}
                            </p>
                        </div>
                        <button
                            type="submit"
                            className="w-full block bg-[#A7CAB1] hover:bg-[#88B7B5] focus:bg-blue-400 text-[#310A31] font-semibold rounded-lg
                px-4 py-3 mt-6"
                        >
                            Log In
                        </button>
                    </form>

                    <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
                        <hr className="border-gray-500" />
                        <p className="text-center text-sm">OR</p>
                        <hr className="border-gray-500" />
                    </div>

                    <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 ">
                        <span className="ml-4 flex gap-5">
                            {" "}
                            <FaGooglePlusG className="h-6 w-6" /> Login with
                            Google
                        </span>
                    </button>

                    <div className="text-sm flex justify-between items-center mt-3">
                        <p>If you don't have an account.</p>
                        <button className="py-2 px-5 ml-3 bg-white border rounded font-bold hover:scale-110 duration-300 border-[#88B7B5] ">
                            <Link to="/signup">Register</Link>
                        </button>
                    </div>
                </div>

                <div className="w-1/2 md:block hidden ">
                    <img
                        src="https://images.unsplash.com/photo-1608533250836-a707595057d7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="rounded-2xl"
                        alt="page img"
                    />
                </div>
            </div>
        </section>
    );
};

export default Login;
