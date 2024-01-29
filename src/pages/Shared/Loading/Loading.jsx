import React from "react";

const Loading = () => {
    return (
        <div className="bg-gray-200 w-full min-h-screen flex justify-center items-center">
            <div className="flex min-h-screen w-full items-center justify-center bg-gray-200">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-[#88B7B5] to-[#310A31] animate-spin">
                    <div className="h-16 w-16 rounded-full bg-gray-200"></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
