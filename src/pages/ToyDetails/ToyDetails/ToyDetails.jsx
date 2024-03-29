import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const toy = useLoaderData();
    const { _id, name, picture, price, description, quantity, seller } = toy;

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
                    <p className="md:my-6 lg:text-4xl md:w-3/4">${price}</p>
                    <div className="flex justify-between items-center">
                        <p className="md:my-6 lg:text-xl md:w-2/4 text-[#310A31] font-bold">
                            Seller :{" "}
                            <span className="capitalize">{seller}</span>
                        </p>
                        <p className="md:my-6 lg:text-xl md:w-2/4 text-[#310A31]">
                            Quantity : {quantity}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;
