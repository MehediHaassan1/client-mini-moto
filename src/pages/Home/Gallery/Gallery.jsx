import React from "react";

const Gallery = () => {
    return (
        <>
            <div className="text-center my-10">
                <h1 className="text-5xl capitalize font-bold">our Gallery</h1>  
            </div>
            <div className="max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative bg-gray-50 -z-10">
                <div className="flex flex-col md:flex-row gap-2">
                    <div className="flex flex-1 flex-col gap-2">
                        <div className="flex flex-1 flex-col">
                            <img
                                className="object-cover h-full rounded-lg"
                                src="https://i.ibb.co/RHtq8J9/ferari-red-jiron.jpg"
                            />
                        </div>
                        <div className="hidden md:flex flex-1 flex-row gap-2">
                            <div className="flex flex-1 flex-col">
                                <img
                                    className="object-cover h-full rounded-lg"
                                    src="https://i.ibb.co/JpL0swN/triumphn.jpg"
                                />
                            </div>
                            <div className="hidden md:flex flex-1 flex-col">
                                <img
                                    className="object-cover h-full rounded-lg"
                                    src="https://i.ibb.co/CmLJCJr/yamaha-yzr.jpg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                        <div className="hidden md:flex flex-1 flex-row gap-2">
                            <div className="flex flex-1 flex-col">
                                <img
                                    className="object-cover h-full rounded-lg"
                                    src="https://i.ibb.co/fDVD8NQ/oracle-redbull.jpg"
                                />
                            </div>
                            <div className="hidden md:flex flex-1 flex-col">
                                <img
                                    className="object-cover h-full rounded-lg"
                                    src="https://i.ibb.co/W5S5hhz/gulf-tsm120014.jpg"
                                />
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col">
                            <img
                                className="object-cover h-full rounded-lg"
                                src="https://i.ibb.co/ZSKQzyY/slammed.jpg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;
