import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div
            className="hero min-h-screen z-[-1000] relative"
            style={{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1597670250484-0e9aff7f8804?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold uppercase">
                        friendly and safe <br /> toys for your child
                    </h1>
                    <div className="flex flex-col items-center gap-4 md:flex-row justify-center z-10">
                        <Link className="w-fit flex items-center justify-center bg-gray-900 text-[#A7CAB1] py-2 px-4 gap-2 rounded-full uppercase text-xs font-bold tracking-widest">
                            Our company
                            <FaArrowRight className="w-6 h-6 p-1 flex items-center justify-center rounded-full bg-[#A7CAB1] text-white" />
                        </Link>
                        <Link
                            to="/all-toys"
                            className="w-fit flex items-center justify-center border-2  text-[#A7CAB1] py-2 px-4 gap-2 rounded-full uppercase text-xs font-bold tracking-widest"
                        >
                            online shop
                            <FaArrowRight className="w-6 h-6 p-1 flex items-center justify-center rounded-full text-[#A7CAB1] bg-white" />
                        </Link>
                    </div>
                    <div className="flex justify-center relative">
                        <div className="border p-1 rounded-full absolute -bottom-24 md:-bottom-32 lg:-bottom-40">
                            <button className="w-10 h-10 bg-[#310A31] rounded-full flex items-center justify-center">
                                <FaArrowDownLong className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
