import React from "react";
import { IoMdKey } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";

const About = () => {
    return (
        <div className="max-w-7xl mx-auto min-h-screen">
            <div className="text-center my-16">
                <p className="text-base font-bold tracking-widest text-[#A7CAB1]">
                    Our background
                </p>
                <h1 className="text-5xl capitalize font-bold">
                    about our company
                </h1>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly gap-5 lg:gap-1">
                <div className="h-68 md:w-96 lg:w-72 xl:w-96 flex items-center justify-between gap-4 hover:shadow-lg duration-300 xl:p-5">
                    <div className="h-16 w-16 border border-[#A7CAB1] p-1 rounded-full flex items-center justify-center">
                        <IoMdKey className="h-12 w-12 bg-[#310A31] text-[#A7CAB1] rounded-full p-1" />
                    </div>
                    <div className="md:w-72 lg:w-60 xl:w-72">
                        <h3 className="text-xl font-bold uppercase tracking-widest">
                            our heritage
                        </h3>
                        <p className="my-8">
                            Step into our world where classic favorites mingle
                            seamlessly with the latest in toy innovation.
                        </p>
                    </div>
                </div>
                <div className="h-68 md:w-96 lg:w-72 xl:w-96 flex items-center justify-between gap-4 hover:shadow-lg duration-300 xl:p-5">
                    <div className="h-16 w-16 border border-[#A7CAB1] p-1 rounded-full flex items-center justify-center">
                        <IoMdKey className="h-12 w-12 bg-[#310A31] text-[#A7CAB1] rounded-full p-1" />
                    </div>
                    <div className="md:w-72 lg:w-60 xl:w-72">
                        <h3 className="text-xl font-bold uppercase tracking-widest">
                            our employees
                        </h3>
                        <p className="my-8">
                            Step into our world where classic favorites mingle
                            seamlessly with the latest in toy innovation.
                        </p>
                    </div>
                </div>
                <div className="h-68 md:w-96 lg:w-72 xl:w-96 flex items-center justify-between gap-4 hover:shadow-lg duration-300 xl:p-5">
                    <div className="h-16 w-16 border border-[#A7CAB1] p-1 rounded-full flex items-center justify-center">
                        <IoMdKey className="h-12 w-12 bg-[#310A31] text-[#A7CAB1] rounded-full p-1" />
                    </div>
                    <div className="md:w-72 lg:w-60 xl:w-72">
                        <h3 className="text-xl font-bold uppercase tracking-widest">
                            our "you"
                        </h3>
                        <p className="my-8">
                            Step into our world where classic favorites mingle
                            seamlessly with the latest in toy innovation.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-20 mb-10">
                <div className="flex flex-col items-center gap-4 md:flex-row justify-center z-[-1]">
                    <Link>
                        <button className="w-fit flex items-center justify-center bg-[#310A31] text-[#A7CAB1] py-2 px-4 gap-2 rounded-full uppercase text-xs font-bold tracking-widest">
                            whole story
                            <span className="w-6 h-6 p-1 flex items-center justify-center rounded-full bg-[#A7CAB1] text-white">
                                <FaArrowRight />
                            </span>
                        </button>
                    </Link>
                    <Link>
                        <button className="w-fit flex items-center justify-center border-2 border-[#310A31]  text-[#310A31] py-2 px-4 gap-2 rounded-full uppercase text-xs font-bold tracking-widest">
                            testimonials
                            <span className="w-6 h-6 p-1 flex items-center justify-center rounded-full text-[#310A31] bg-[#A7CAB1]">
                                <FaArrowRight />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
