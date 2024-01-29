import React from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const MyToy = ({ toy, index, handleDeleteItem }) => {
    const navigate = useNavigate();
    const { _id, name, type, quantity, price, description } = toy;

    const handleUpdateMyToy = (e) => {
        e.preventDefault();

        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const description = e.target.description.value;

        const updatedInfo = { price, quantity, description };

        fetch(`http://localhost:5000/my-toys/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success("Updated Successfully.");
                    navigate("/all-toys");
                }
            });
    };

    return (
        <>
            <tr className="hover:bg-gray-200 ">
                <th className="py-3">{index + 1}</th>
                <td className="py-3">{name}</td>
                <td className="py-3">{type}</td>
                <td className="py-3">{quantity}</td>
                <td className="py-3">
                    <button
                        onClick={() =>
                            document
                                .getElementById(`updateInfoModal/${_id}`)
                                .showModal()
                        }
                        className="btn btn-xs text-[#310A31] mx-1 font-bold bg-green-400 hover:bg-green-400"
                    >
                        Update
                    </button>
                    <button
                        onClick={() => handleDeleteItem(_id)}   
                        className="btn btn-xs text-[#310A31] mx-1 font-bold bg-red-400 hover:bg-red-400"
                    >
                        Delete
                    </button>
                    <dialog id={`updateInfoModal/${_id}`} className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                    ✕
                                </button>
                            </form>
                            <h3 className="font-bold text-lg">
                                Update Information
                            </h3>
                            <form
                                onSubmit={handleUpdateMyToy}
                                className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
                            >
                                <div className="md:grid grid-cols-2 gap-5">
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
                                            defaultValue={price}
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
                                            defaultValue={quantity}
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
                                            rows="4"
                                            cols="50"
                                            required
                                            defaultValue={description}
                                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        className="bg-[#A7CAB1] text-[#310A31] px-4 py-2 rounded-md focus:outline-none hover:bg-[#88B7B5] w-full font-bold duration-300"
                                    >
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </dialog>
                </td>
            </tr>
        </>
    );
};

export default MyToy;
