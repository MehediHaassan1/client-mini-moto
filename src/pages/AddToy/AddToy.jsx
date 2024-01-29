import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../../context/Authorization";
import { useNavigate } from "react-router-dom";

const AddToy = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const [error, setError] = useState("");
    const handleAddToy = (e) => {
        e.preventDefault();

        const form = e.target;

        const type = form.selectOption.value;
        const name = form.itemName.value;
        const picture = form.photoUrl.value;
        let price = form.itemPrice.value;
        let rating = form.itemRating.value;
        let quantity = form.quantity.value;
        const seller = form.sellerName.value;
        const description = form.description.value;

        setError("");
        if (isNaN(price)) {
            const error = "Price must be in number";
            setError(error);
        } else if (isNaN(rating)) {
            const error = "Rating must be in number";
            setError(error);
        } else if (parseFloat(rating) < 1 || parseFloat(rating) > 5) {
            const error = "Rating must be between 1 to 5";
            setError(error);
        } else if (isNaN(quantity)) {
            const error = "Quantity must be in number";
            setError(error);
        }

        const item = {
            type,
            name,
            picture,
            price: parseFloat(price),
            rating: parseFloat(rating),
            quantity: parseInt(quantity),
            seller,
            description,
            sellerEmail: user?.email,
        };

        fetch("https://mini-moto.onrender.com/all-toys", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(item),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your item has been added",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                    navigate("/my-toys");
                }
            });
    };
    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center my-16">
                <p className="text-base font-bold tracking-widest text-[#88B7B5]">
                    join with best product
                </p>
                <h1 className="text-5xl capitalize font-bold">Add Toy</h1>
            </div>
            <div className="max-w-5xl mx-auto">
                <div className="container mx-auto p-4">
                    <form
                        onSubmit={handleAddToy}
                        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md border-black border-2"
                    >
                        <div className="md:grid grid-cols-2 gap-5">
                            <div className="mb-2">
                                <label
                                    htmlFor="select-option"
                                    className="block text-gray-600"
                                >
                                    Select Type
                                </label>
                                <select
                                    id="select-option"
                                    name="selectOption"
                                    required
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                >
                                    <option disabled value="" selected>
                                        Select an option
                                    </option>
                                    <option value="car">Car</option>
                                    <option value="sports car">
                                        Sports Car
                                    </option>
                                    <option value="bike">Bike</option>
                                </select>
                            </div>
                            <div className="mb-2">
                                <label
                                    htmlFor="item-name"
                                    className="block text-gray-600"
                                >
                                    Item Name
                                </label>
                                <input
                                    type="text"
                                    id="item-name"
                                    name="itemName"
                                    required
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>

                            <div className="mb-2">
                                <label
                                    htmlFor="price"
                                    className="block text-gray-600"
                                >
                                    Price
                                </label>
                                <input
                                    type="text"
                                    id="price"
                                    name="itemPrice"
                                    required
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>

                            <div className="mb-2">
                                <label
                                    htmlFor="rating"
                                    className="block text-gray-600"
                                >
                                    Rating
                                </label>
                                <input
                                    type="text"
                                    id="rating"
                                    name="itemRating"
                                    required
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>

                            <div className="mb-2">
                                <label
                                    htmlFor="quantity"
                                    className="block text-gray-600"
                                >
                                    Quantity
                                </label>
                                <input
                                    type="text"
                                    id="quantity"
                                    name="quantity"
                                    required
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>

                            <div className="mb-2">
                                <label
                                    htmlFor="seller"
                                    className="block text-gray-600"
                                >
                                    Seller
                                </label>
                                <input
                                    type="text"
                                    id="seller"
                                    name="sellerName"
                                    defaultValue={user?.displayName}
                                    required
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>

                            <div className="mb-2 col-span-2">
                                <label
                                    htmlFor="photoUrl"
                                    className="block text-gray-600"
                                >
                                    Photo Url
                                </label>
                                <input
                                    type="text"
                                    id="photoUrl"
                                    name="photoUrl"
                                    required
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-4 col-span-2">
                                <label
                                    htmlFor="description"
                                    className="block text-gray-600"
                                >
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    required
                                    rows="4"
                                    cols="50"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                ></textarea>
                            </div>
                        </div>
                        <div className="my-2">
                            <p className="text-red-500">{error}</p>
                        </div>
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="bg-[#A7CAB1] text-[#310A31] px-4 py-2 rounded-md focus:outline-none hover:bg-[#88B7B5] w-full font-bold duration-300"
                            >
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddToy;
