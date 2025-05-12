import { api } from "@/api";
import React, { useEffect, useState } from "react";

const Product = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    api.get("/Products").then((res) => {
      setData(res);
    });
  }, []);

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-5">
          {data?.data?.map((product, index) => (
            <div key={product.id} className="w-[350px] bg-[#FFFFFF] rounded-2xl">
              <div>
                <img
                  className="w-full h-[328px] object-cover rounded-2xl"
                  src={product.img}
                  alt={product.name}
                />
              </div>
              <div>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <strong>{product.price}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
