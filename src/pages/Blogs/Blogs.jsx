import React from "react";

const Blogs = () => {
    return (
        <div className="relative -z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
            <div className="container relative flex px-6 py-16 mx-auto">
                <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
                    <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span>
                    <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
                        Be on
                        <span className="text-5xl sm:text-7xl">Time</span>
                    </h1>
                    <p className="text-sm text-gray-700 sm:text-base dark:text-white">
                        Dimension of reality that makes change possible and
                        understandable. An indefinite and homogeneous
                        environment in which natural events and human existence
                        take place.
                    </p>
                    <div className="flex gap-5">
                        <div>
                            <span className="countdown font-mono text-4xl">
                                <span style={{ "--value": 15 }}></span>
                            </span>
                            days
                        </div>
                        <div>
                            <span className="countdown font-mono text-4xl">
                                <span style={{ "--value": 10 }}></span>
                            </span>
                            hours
                        </div>
                        <div>
                            <span className="countdown font-mono text-4xl">
                                <span style={{ "--value": 24 }}></span>
                            </span>
                            min
                        </div>
                        <div>
                            <span className="countdown font-mono text-4xl">
                                <span style={{ "--value": 54 }}></span>
                            </span>
                            sec
                        </div>
                    </div>
                </div>
                <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
                    <img
                        src="https://media.tenor.com/3AsA7_b0FekAAAAi/sport-utility-vehicle-joypixels.gif"
                        className="max-w-xs m-auto md:max-w-sm"
                    />
                </div>
            </div>
        </div>
    );
};

export default Blogs;
