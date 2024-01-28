import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blog = () => {
    return (
        <div className="max-w-5xl mx-auto min-h-screen">
            <div className="text-center py-16 ">
                <p className="text-base font-bold tracking-widest text-[#88B7B5] ">
                    some good reads
                </p>
                <h1 className="text-5xl capitalize font-bold ">
                    from our blog
                </h1>
            </div>
            <div className="md:grid grid-cols-2 gap-5">
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="kids playing"
                        className="md:h-32 w-full object-cover"
                    />
                    <div className="flex justify-between items-center p-5">
                        <div className="flex flex-col justify-center items-center">
                            <p className="text-2xl mb-0">18</p>
                            <div className="w-7 divider m-0 h-1 bg-blue-400"></div>
                            <p className="text-2xl mt-0">06</p>
                        </div>
                        <div className="w-4/5">
                            <h3 className="text-lg font-semibold">
                                1 Here comes the title that is pretty long and
                                goes into 2 lines
                            </h3>
                            <div className="flex gap-10 text-xs font-bold">
                                <p>admin</p>
                                <p>comments</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:row-span-2 h-full">
                    <div className="h-fit">
                        <img
                            src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="kids playing"
                            className="h-full w-full object-cover"
                        />
                        <div className="flex justify-between items-center p-5 h-fit">
                            <div className="flex flex-col justify-center items-center">
                                <p className="text-2xl mb-0">18</p>
                                <div className="w-7 divider m-0 h-1 bg-blue-400"></div>
                                <p className="text-2xl mt-0">06</p>
                            </div>
                            <div className="w-4/5">
                                <h3 className="text-lg font-semibold">
                                    2 Here comes the title that is pretty long
                                    and goes into 2 lines
                                </h3>
                                <div className="flex gap-10 text-xs font-bold">
                                    <p>admin</p>
                                    <p>comments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="kids playing"
                        className="md:h-32 w-full object-cover"
                    />
                    <div className="flex justify-between items-center p-5">
                        <div className="flex flex-col justify-center items-center">
                            <p className="text-2xl mb-0">18</p>
                            <div className="w-7 divider m-0 h-1 bg-blue-400"></div>
                            <p className="text-2xl mt-0">06</p>
                        </div>
                        <div className="w-4/5">
                            <h3 className="text-lg font-semibold">
                                3 Here comes the title that is pretty long and
                                goes into 2 lines
                            </h3>
                            <div className="flex gap-10 text-xs font-bold">
                                <p>admin</p>
                                <p>comments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center z-[-1] my-10">
                    
                    <Link>
                        <button className="w-fit flex items-center justify-center border-2 border-[#310A31]  text-[#310A31] py-2 px-4 gap-2 rounded-full uppercase text-xs font-bold tracking-widest">
                            Blogs
                            <span className="w-6 h-6 p-1 flex items-center justify-center rounded-full text-[#310A31] bg-[#A7CAB1]">
                                <FaArrowRight />
                            </span>
                        </button>
                    </Link>
                </div>
        </div>
    );
};

export default Blog;
