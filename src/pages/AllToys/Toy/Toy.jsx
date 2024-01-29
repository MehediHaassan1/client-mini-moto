import React from "react";
import { Link } from "react-router-dom";

const Toy = ({ toy }) => {
    const { _id, name, picture, rating, price, quantity } = toy;
    return (
        <div className="max-w-md w-full bg-gray-900 shadow-lg rounded-xl p-6 my-5">
            <div className="h-60 w-68 mb-3">
                <img
                    src={picture}
                    alt={name}
                    className=" w-full object-cover rounded-2xl h-60 "
                />
            </div>
            <div className="flex-auto justify-evenly">
                <div className="flex flex-wrap ">
                    <div className="w-full flex-none text-sm flex items-center text-gray-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-[#88B7B5] mr-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-gray-400 whitespace-nowrap mr-3">
                            {rating}
                        </span>
                        <span className="mr-2 text-gray-400">USA</span>
                    </div>
                    <div className="flex items-center w-full justify-between min-w-0 ">
                        <h2 className="text-lg mr-auto cursor-pointer text-gray-200 hover:text-purple-500 truncate ">
                            {name}
                        </h2>
                        <div>
                            {quantity > 0 ? (
                                <div className="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                                    INSTOCK
                                </div>
                            ) : (
                                <div className="flex items-center bg-red-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                                    OUTSTOCK
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="text-xl text-white font-semibold mt-1">
                    $ {price}
                </div>
            </div>
            <div className="flex space-x-2 text-sm font-medium justify-start ">
                <button className="transition ease-in duration-300 inline-flex items-center text-sm my-2 md:mb-0 bg-[#A7CAB1] px-5 py-1 hover:shadow-lg tracking-wider text-gray-900 rounded-full hover:bg-[#88B7B5] font-bold  ">
                    <Link to={`/details/${_id}`}>
                        <span>Details</span>
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Toy;
