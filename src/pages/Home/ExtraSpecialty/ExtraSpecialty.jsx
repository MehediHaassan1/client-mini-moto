import React from "react";
import { IoIosMan, IoIosSend } from "react-icons/io";
import { FaTruckMoving } from "react-icons/fa";

const ExtraSpecialty = () => {
    return (
        <div className="max-w-7xl mx-auto min-h-screen md:flex flex-col justify-center">
            <div className="text-center py-16 ">
                <p className="text-base font-bold tracking-widest text-[#88B7B5] ">
                    but that's not all
                </p>
                <h1 className="text-5xl capitalize font-bold ">
                    you can also expect these
                </h1>
            </div>
            <div className="md:flex justify-center gap-5 ">
                <div className="bg-[#A7CAB1] flex gap-2 py-5 px-3 my-5 md:w-96 md:py-2 md:px-0 rounded-md xl:p-5">
                    <IoIosMan className="w-16 h-16 my-2 text-[#fff]" />
                    <div className="w-4/6">
                        <h1 className="text-lg lg:text-xl my-2 font-semibold">
                            Safe and handmade
                        </h1>
                        <p>
                            Toys we sell are provided by the best manufactures
                            on the market. Safe handmade and certified.
                        </p>
                    </div>
                </div>

                <div className="bg-[#88B7B5] flex gap-2 py-5 px-3 my-5 md:w-96 md:py-2 md:px-0 rounded-md xl:p-5">
                    <IoIosSend className="w-16 h-16 my-2 text-[#fff]" />
                    <div className="w-4/6">
                        <h1 className="text-lg lg:text-xl my-2 font-semibold">
                            Fast delivery
                        </h1>
                        <p>
                            We have a dedicated packaging and delivery team that
                            will make everything for fast shipment.
                        </p>
                    </div>
                </div>

                <div className="bg-[#A7CAB1] flex gap-2 py-5 px-3 my-5 md:w-96 md:py-2 md:px-0 rounded-md xl:p-5">
                    <FaTruckMoving className="w-16 h-16 my-2 text-[#fff]" />
                    <div className="w-4/6">
                        <h1 className="text-lg lg:text-xl my-2 font-semibold">
                            Free returns
                        </h1>
                        <p>
                            You can return all purchase for up to 7 days after
                            transaction. No strings attached.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSpecialty;
