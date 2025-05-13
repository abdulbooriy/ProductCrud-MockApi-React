import { api } from "@/api";
import React, { useEffect, useState } from "react";

const GetProducts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    api.get("/Products").then((res) => {
      setData(res);
    });
  }, []);

  return (
    <div className="mt-[150px]">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-5">
          {data?.data?.map((product) => (
            <div
              key={product.id}
              className="w-[350px] h-[490px] bg-[#FFFFFF] rounded-[15px] shadow-2xl">
              <div className="px-6 py-6">
                <img
                  className="w-full h-[250px] object-cover rounded"
                  src={product.img}
                  alt={product.name}
                />
              </div>
              <div className="font-[Nunito] px-6 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h1 className="font-semibold text-3xl">{product.name}</h1>
                  <strong className="text-[#4880FF] text-[16px] font-bold">
                    {product.price}.000 USD
                  </strong>
                </div>
                <p className="text-[20px]">{product.description}</p>
              </div>
              <div className="flex justify-center">
                <button className="w-[200px] h-[50px] bg-[#2563eb] rounded-2xl hover:bg-blue-700 text-white font-medium  text-[20px] text-center mt-12 font-[Nunito]">learn more</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetProducts;
