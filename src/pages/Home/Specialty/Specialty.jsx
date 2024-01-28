import React from "react";
import logo from "../../../assets/logo-alt.svg";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { PiTree } from "react-icons/pi";
import { AiOutlineNodeExpand } from "react-icons/ai";
import { PiShootingStarDuotone } from "react-icons/pi";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { CiHeart } from "react-icons/ci";
import { FaArrowDownLong } from "react-icons/fa6";

const Specialty = () => {
    return (
        <div
            className="min-h-screen bg-no-repeat bg-cover bg-center bg-fixed"
            style={{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1496031867413-058d7da89c63?q=80&w=1649&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
        >
            <div className="bg-[#310A31]/50 min-h-screen">
                <div className="max-w-7xl mx-auto min-h-screen">
                    <div className="text-center py-16 text-[#88B7B5]">
                        <p className="text-base font-bold tracking-widest ">
                           why trust us
                        </p>
                        <h1 className="text-5xl capitalize font-bold ">
                            our special powers
                        </h1>
                    </div>

                    <div className="flex flex-col justify-center items-center lg:flex-row my-16">
                        <div className="flex flex-col gap-5">
                            <div className="w-60  flex justify-between items-center">
                                <div className="h-12 w-12 rounded-full bg-[#a7cab1] flex items-center justify-center">
                                    <AiOutlineCodeSandbox className="h-8 w-8 text-[#310A31]" />
                                </div>
                                <h4 className="uppercase w-44 text-[#a7cab1]">
                                    convince and functionality
                                </h4>
                            </div>
                            <div className="w-60  flex justify-between items-center">
                                <div className="h-12 w-12 rounded-full bg-[#a7cab1] flex items-center justify-center">
                                    <PiTree className="h-8 w-8 text-[#310A31]" />
                                </div>
                                <h4 className="uppercase w-44 text-[#a7cab1]">
                                    environment friendly materials
                                </h4>
                            </div>
                            <div className="w-60  flex justify-between items-center">
                                <div className="h-12 w-12 rounded-full bg-[#a7cab1] flex items-center justify-center">
                                    <AiOutlineNodeExpand className="h-8 w-8 text-[#310A31]" />
                                </div>
                                <h4 className="uppercase w-44 text-[#a7cab1]">
                                    highest attention to details
                                </h4>
                            </div>
                        </div>
                        <div className="m-5">
                            <img src={logo} alt="" />
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="w-60  flex justify-between items-center flex-row-reverse">
                                <div className="h-12 w-12 rounded-full bg-[#310A31] text-[#a7cab1] flex items-center justify-center">
                                    <PiShootingStarDuotone className="h-8 w-8 text-[#a7cab1] " />
                                </div>
                                <h4 className="uppercase w-44 text-[#a7cab1]">
                                    fabrics of the highest quality
                                </h4>
                            </div>
                            <div className="w-60  flex justify-between items-center flex-row-reverse">
                                <div className="h-12 w-12 rounded-full bg-[#310A31] text-[#a7cab1] flex items-center justify-center">
                                    <VscGitPullRequestCreate className="h-8 w-8 text-[#a7cab1] " />
                                </div>
                                <h4 className="uppercase w-44 text-[#a7cab1]">
                                    creative and developing toys
                                </h4>
                            </div>
                            <div className="w-60  flex justify-between items-center flex-row-reverse">
                                <div className="h-12 w-12 rounded-full bg-[#310A31] text-[#a7cab1] flex items-center justify-center">
                                    <CiHeart className="h-8 w-8 text-[#a7cab1] " />
                                </div>
                                <h4 className="uppercase w-44 text-[#a7cab1]">
                                    made with love
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center relative">
                        <div className="border p-1 rounded-full absolute lg:-bottom-0 xl:-bottom-16 hidden lg:block">
                            <button className="w-10 h-10 bg-[#310A31] rounded-full flex items-center justify-center">
                                <FaArrowDownLong className="w-4 h-4 text-[#a7cab1]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Specialty;
