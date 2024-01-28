import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const ToyDetails = () => {
    const toy = useLoaderData();
    const { _id, name, picture, price, description, features } = toy;
    const [quantity, setQuantity] = useState(1);
    const handleQuantityIncrease = () => {
        setQuantity(quantity + 1);
    };
    const handleQuantityDecrease = () => {
        if (quantity === 1) {
            setQuantity(1);
        } else {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="max-w-6xl mx-auto my-10">
            <div className="md:p-10 md:flex  gap-5">
                <div className="md:w-1/3 relative z-[-1]">
                    <img src={picture} alt={name} className="w-full h-full" />
                    <div className="md:absolute -z-10 -top-3 -left-3 w-full h-full md:border-2 border-blue-200"></div>
                </div>
                <div className="md:w-2/3">
                    <h1 className="text-3xl lg:text-4xl">{name}</h1>
                    <p className="md:my-6 lg:my-10 lg:text-lg md:w-3/4">
                        {description}{" "}
                    </p>
                    <p className="md:my-6 lg:text-4xl md:w-3/4">
                        ${price}
                    </p>
                    <div className="flex items-center gap-20">
                        <div className="flex items-center justify-between border-2 border-blue-300 w-40 px-4 py-1 rounded-full">
                            <button onClick={handleQuantityIncrease}>
                                <FaPlus className="w-6 h-6" />
                            </button>
                            <p className="text-2xl">{quantity}</p>
                            <button onClick={handleQuantityDecrease}>
                                <FaMinus className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="flex space-x-2 text-sm font-medium justify-start ">
                            <button className="transition ease-in duration-300 inline-flex items-center  my-2 md:mb-0 bg-[#A7CAB1] px-5 py-1 hover:shadow-lg tracking-wider text-gray-900 rounded-full hover:bg-[#88B7B5] font-bold  ">
                                <span>Add Cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Tabs defaultFocus={false} className="">
                    <TabList>
                        <Tab>Description</Tab>
                        <Tab>Features</Tab>
                    </TabList>

                    <TabPanel>
                        <p className="md:w-1/2 lg:w-1/3">{description}</p>
                    </TabPanel>
                    <TabPanel>
                        {features.map((item, index) => (
                            <p key={index}>
                                {index + 1}. {item}
                            </p>
                        ))}
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ToyDetails;
