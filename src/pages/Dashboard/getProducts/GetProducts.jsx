import { api } from "@/api";
import React, { useEffect, useState } from "react";

const GetProducts = ({ reload }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get("/Products")
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [reload]);

  return (
    <div className="mt-[150px]">
      <div className="container mx-auto">
        {data.length === 0 ? (
          <h1 className="text-center text-2xl font-[Nunito] font-semibold">
            No Products available yet
          </h1>
        ) : (
          <div className="flex flex-wrap justify-center gap-6">
            {data?.data?.map((product) => (
              <div
                key={product.id}
                className="w-[350px] bg-white rounded-[15px] shadow-lg flex flex-col justify-between overflow-hidden">
                <div className="px-6 py-4">
                  <img
                    className="w-full h-[350px] object-cover rounded-md"
                    src={product.img}
                    alt={product.name}
                  />
                </div>

                <div className="flex flex-col justify-between flex-grow px-6 pb-4 font-[Nunito]">

                  <div className="flex flex-col gap-2.5 text-center">
                    <h1 className="font-semibold text-2xl">{product.name}</h1>
                    <strong className="text-[#4880FF] text-[16px] font-bold">
                      {product.price}.000 USD
                    </strong>
                    <p className="text-[17px] text-gray-700 line-clamp-3 mb-4">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <button className="w-full h-[45px] bg-[#2563eb] hover:bg-blue-700 text-white rounded-xl text-[17px] font-semibold transition duration-200">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GetProducts;
