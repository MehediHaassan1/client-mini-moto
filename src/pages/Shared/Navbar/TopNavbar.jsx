import React from "react";
import { IoMdCall } from "react-icons/io";
import { FaRegHeart, FaShoppingBag } from "react-icons/fa";

const TopNavbar = () => {
    return (
        <div className="max-w-7xl mx-auto border rounded-full h-12 md:h-16 flex items-center justify-center md:justify-between p-2">
            <div className="hidden md:block">
                <p className="flex items-center gap-1 uppercase text-xs md:text-base lg:text-lg   ">
                    <IoMdCall className="w-5 h-5" /> call us:
                    <span className="font-bold">123 456 7890</span>
                </p>
            </div>
            <div>
                <div className="flex gap-3 items-center">
                    <div className="flex items-center relative w-24 md:w-28 lg:w-32 text-xs md:text-base lg:text-lg">
                        <p className="flex gap-1 items-center ">
                            <FaRegHeart /> wishlist
                        </p>
                        <span className="absolute -top-3 right-0 w-6 h-6 rounded-full flex items-center justify-center mr-1 bg-[#310A31] text-[#A7CAB1] font-semibold">
                            0
                        </span>
                    </div>
                    <div className="flex items-center relative w-20 md:w-24 text-xs md:text-base lg:text-lg">
                        <p className="flex gap-1 items-center">
                            <FaShoppingBag /> cart
                        </p>
                        <span className="absolute -top-3 right-0 w-6 h-6 rounded-full flex items-center justify-center mr-1 bg-[#A7CAB1] text-[#310A31] font-semibold">
                            0
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNavbar;
