import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/Authorization";
import MyToy from "../MyToy/MyToy";
import Swal from "sweetalert2";

const MyToys = () => {
    const { user, setLoading } = useContext(UserContext);
    const url = `http://localhost:5000/my-toys?email=${user?.email}`;
    const [myToys, setMyToys] = useState([]);

    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem(
                    "mini-moto-web-token"
                )}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setMyToys(data);
            });
    }, [setLoading, url]);

    const handleDeleteItem = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/my-toys/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                            });
                            const remaining = myToys.filter(
                                (toy) => toy._id !== _id
                            );
                            setMyToys(remaining);
                        }
                    });
            }
        });
    };

    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center my-16">
                <p className="text-base font-bold tracking-widest text-[#88B7B5]">
                    i have my best
                </p>
                <h1 className="text-5xl capitalize font-bold">My Toys</h1>
            </div>

            <div className="overflow-x-auto my-10 max-w-4xl mx-auto text-center">
                <table className="min-w-full">
                    <thead className="my-5 text-center">
                        <tr>
                            <th className="my-5"></th>
                            <th className="border-b text-start md:ps-20">
                                Name
                            </th>
                            <th className="border-b text-start md:ps-20">
                                Type
                            </th>
                            <th className="border-b text-start md:ps-20">
                                Quantity
                            </th>
                            <th className="border-b text-start md:ps-20">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {myToys.map((toy, index) => (
                            <MyToy
                                key={toy._id}
                                toy={toy}
                                index={index}
                                handleDeleteItem={handleDeleteItem}
                            ></MyToy>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;
