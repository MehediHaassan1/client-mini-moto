import React from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Toy from "../Toy/Toy";

const AllToys = () => {
    const allToys = useLoaderData();

    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center my-16">
                <p className="text-base font-bold tracking-widest text-[#88B7B5]">
                    you get what you want
                </p>
                <h1 className="text-5xl capitalize font-bold">
                    Our best collections
                </h1>
            </div>
            <Tabs defaultFocus={false} className="">
                <TabList>
                    <Tab>All Toys</Tab>
                    <Tab>Cars</Tab>
                    <Tab>Sports Cars</Tab>
                    <Tab>Bikes</Tab>
                </TabList>

                <TabPanel>
                    <div className="max-w-6xl mx-auto md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 my-10">
                        {allToys.map((toy) => (
                            <Toy key={toy._id} toy={toy}></Toy>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default AllToys;
