import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
    return (
        <div className=" container mx-auto flex justify-center items-center lg:px-20 md:px-14 sm:px-8 bg-gray-200 py-12 h-full">
            <div className="grid lg:grid-cols-3 grid-col-1">
                <div className="bg-[#88B7B5] px-9 py-14">
                    <h1 className="text-3xl text-white font-medium">
                        Lets Touch Us
                    </h1>
                    <p className="py-2 text-base text-gray-100">
                        Feel free to contact with us
                    </p>
                    <div className="location mt-7">
                        <div className="flex my-4 items-center">
                            <span className="border-2 border-solid border-[#A7CAB1] p-2 rounded-full w-10 h-10 flex mr-3 justify-center items-center">
                                <FaLocationDot className="h-6 w-6 text-gray-100" />
                            </span>
                            <address className="text-gray-100">
                                <span className="underline font-bold">Address:</span> 198
                                West 21th Street, Rangpur, Bangladesh
                            </address>
                        </div>
                        <div className="flex my-4 items-center">
                            <span className="border-2 border-solid border-[#A7CAB1] p-2 rounded-full w-10 h-10 flex mr-3 justify-center items-center">
                                <FaPhoneAlt className="h-6 w-6 text-gray-100" />
                            </span>
                            <p className="text-gray-100">
                            <span className="underline font-bold">Phone:</span> 92 314 4878266
                            </p>
                        </div>
                        <div className="flex my-4 items-center">
                            <span className="border-2 border-solid border-[#A7CAB1] p-2 rounded-full w-10 h-10 flex mr-3 justify-center items-center">
                                <FaEnvelope className="h-6 w-6 text-gray-100" />
                            </span>
                            <p className="text-gray-100">
                            <span className="underline font-bold"> Email:</span> info@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white col-span-2 py-14 lg:px-10 px-8">
                    <h2 className="text-3xl font-medium">Get in touch</h2>
                    <div className="grid md:grid-cols-2 grid-col-1 gap-4">
                        <div className="flex flex-col py-4">
                            <label
                                htmlFor="First Name"
                                className="text-base font-medium"
                            >
                                First Name
                            </label>
                            <input
                                type="text"
                                className="outline-none border-b-2 border-solid focus:border-[#88B7B5] transition-all"
                            />
                        </div>
                        <div className="flex flex-col py-4">
                            <label
                                htmlFor="First Name"
                                className="text-base font-medium"
                            >
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="outline-none border-b-2 border-solid focus:border-[#88B7B5] transition-all"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col py-4">
                        <label
                            htmlFor="Email"
                            className="text-base font-medium"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            className="outline-none border-b-2 border-solid focus:border-[#88B7B5] transition-all"
                        />
                    </div>
                    <div className="flex flex-col py-4 pb-8">
                        <label
                            htmlFor="Message"
                            className="text-base font-medium"
                        >
                            Message
                        </label>
                        <textarea
                            name="text"
                            id=""
                            cols="20"
                            rows="4"
                            className="outline-none border-b-2 border-solid focus:border-[#88B7B5] transition-all"
                        ></textarea>
                    </div>
                    <a
                        href=""
                        className="bg-[#88B7B5] px-8 py-3 rounded-md text-[#310A31] hover:bg-white hover:text-[#310A31] border-2 border-solid border-[#A7CAB1] transition-all font-bold duration-300"
                    >
                        Submit Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
