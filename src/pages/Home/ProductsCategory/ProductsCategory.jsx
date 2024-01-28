import React from "react";
import { FaArrowRight, FaCar } from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";
import { MdSportsMotorsports } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductsCategory = () => {
    return (
        <div className="max-w-5xl mx-auto min-h-screen md:flex flex-col items-center justify-center">
            <div className="text-center py-16 ">
                <p className="text-base font-bold tracking-widest text-[#88B7B5] ">
                    this is what we do
                </p>
                <h1 className="text-5xl capitalize font-bold ">
                    product categories
                </h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 md:flex-row md:justify-evenly md:my-10">
                <div className="h-60 w-60 border-lg p-5 flex flex-col justify-center items-center hover:shadow-lg hover:shadow-[#310A31] duration-300 rounded-lg">
                    <FaCar className="w-40 h-40" />
                    <h4 className="text-2xl uppercase font-semibold text-[#88B7B5] ">
                        Cars
                    </h4>
                </div>

                <div className="h-60 w-60 border-lg p-5 flex flex-col justify-center items-center hover:shadow-lg hover:shadow-[#310A31] duration-300 rounded-lg">
                    <MdSportsMotorsports className="w-40 h-40" />
                    <h4 className="text-2xl uppercase font-semibold text-[#88B7B5] ">
                        Bikes
                    </h4>
                </div>

                <div className="h-60 w-60 border-lg p-5 flex flex-col justify-center items-center hover:shadow-lg hover:shadow-[#310A31] duration-300 rounded-lg">
                    <IoCarSportSharp className="w-40 h-40" />
                    <h4 className="text-2xl uppercase font-semibold text-[#88B7B5] ">
                        sports Cars
                    </h4>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Link>
                    <button className="w-fit flex items-center justify-center  text-[#310A31] py-2 px-4 gap-2 rounded-full uppercase text-xs font-bold tracking-widest">
                        shop online
                        <span className="w-6 h-6 p-1 flex items-center justify-center rounded-full text-[#310A31] bg-[#A7CAB1]">
                            <FaArrowRight />
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductsCategory;
