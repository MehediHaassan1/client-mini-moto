import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Toy from "../Toy/Toy";

const AllToys = () => {
    const allToys = useLoaderData();

    const [allCars, setAllCars] = useState([]);
    const [allSportsCar, setAllSportsCar] = useState([]);
    const [allBike, setAllBike] = useState([]);

    const carUrl = "https://mini-moto.onrender.com/cars?car=car";
    const sportsCarUrl =
        "https://mini-moto.onrender.com/sports-car?sportsCar=sports_car";
    const bikeUrl = "https://mini-moto.onrender.com/bike?bike=bike";
    const getToyItemByTag = (url, tag) => {
        if (tag === "car") {
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    setAllCars(data);
                });
        } else if (tag === "sports car") {
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    setAllSportsCar(data);
                });
        } else if (tag === "bike") {
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    setAllBike(data);
                });
        }
    };
    useEffect(() => {
        getToyItemByTag(carUrl, "car");
        getToyItemByTag(sportsCarUrl, "sports car");
        getToyItemByTag(bikeUrl, "bike");
    }, []);

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
                        {allToys.slice(0, 12).map((toy) => (
                            <Toy key={toy._id} toy={toy}></Toy>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="max-w-6xl mx-auto md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 my-10">
                        {allCars.map((toy) => (
                            <Toy key={toy._id} toy={toy}></Toy>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="max-w-6xl mx-auto md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 my-10">
                        {allSportsCar.map((toy) => (
                            <Toy key={toy._id} toy={toy}></Toy>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="max-w-6xl mx-auto md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 my-10">
                        {allBike.map((toy) => (
                            <Toy key={toy._id} toy={toy}></Toy>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default AllToys;
