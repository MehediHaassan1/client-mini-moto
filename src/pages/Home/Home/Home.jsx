import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Specialty from "../Specialty/Specialty";
import ExtraSpecialty from "../ExtraSpecialty/ExtraSpecialty";
import ProductsCategory from "../ProductsCategory/ProductsCategory";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <About></About>
            <Specialty></Specialty>
            <ExtraSpecialty></ExtraSpecialty>
            <ProductsCategory></ProductsCategory>
        </div>
    );
};

export default Home;
