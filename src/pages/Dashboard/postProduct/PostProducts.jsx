import { api } from "@/api";
import React, { useState } from "react";
import { toast } from "react-toastify";

const PostProducts = ({ setReload }) => {
  const [products, setProducts] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setProducts({ ...products, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    api
      .post("/Products", {
        name: products.name,
        price: Number(products.price),
        description: products.description,
        img: products.image,
      })
      .then((res) => {
        toast.success("Product is successfully created !");
        setReload((p) => !p);
        setProducts({
          name: "",
          price: "",
          description: "",
          image: "",
        });
      })
      .catch((error) => {
        toast.error("Something went wrong !");
        console.log(error.response.data);
      })
      .finally();
  };

  return (
    <div className="flex justify-center mt-[150px]">
      <div className="w-[700px] bg-[#273142] rounded-2xl">
        <div className="container mx-auto">
          <div className="w-full flex px-5 py-5 justify-between items-center text-white pb-2.5 font-[Nunito]">
            <h2 className="font-[500] text-[20px] ">Add Products</h2>
          </div>

          <div className="px-3 pb-5">
            <div className="w-full h-[1px] bg-[#4b5563]"></div>
          </div>

          <form className="flex flex-wrap gap-5 px-5" onSubmit={handleSubmit}>
            <div className="w-full flex gap-5 ">
              <div className="w-1/2 flex flex-col">
                <label
                  className="text-[18px] font-[400] font-[Nunito] text-white"
                  htmlFor="name">
                  <span>Name</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Type Product name here"
                  required
                  value={products.name}
                  onChange={handleChange}
                  className="h-[40px] bg-[#374151] rounded-[5px] border-[1px] border-[#4b5563] indent-2.5 mt-2.5 text-[16px] font-[Nunito] focus:outline-2 focus:outline-[dodgerblue] focus:border-none text-white"
                />
              </div>

              <div className="w-1/2 flex flex-col">
                <label
                  className="text-[18px] font-[400] font-[Nunito] text-white"
                  htmlFor="price">
                  <span>Price</span>
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  placeholder="Price"
                  required
                  value={products.price}
                  onChange={handleChange}
                  className="h-[40px] bg-[#374151] rounded-[5px] border-[1px] border-[#4b5563] indent-2.5 mt-2.5 text-[16px] font-[Nunito] focus:outline-2 focus:outline-[dodgerblue] focus:border-none text-white"
                />
              </div>
            </div>

            <div className="w-full flex gap-5">
              <div className="w-full flex flex-col">
                <label
                  className="text-[18px] font-[400] font-[Nunito] text-white"
                  htmlFor="image">
                  <span>Product Image</span>
                </label>
                <input
                  id="image"
                  name="image"
                  type="text"
                  placeholder="Type Product image here"
                  value={products.image}
                  onChange={handleChange}
                  className="h-[40px] bg-[#374151] rounded-[5px] border-[1px] border-[#4b5563] indent-2.5 mt-2.5 text-[16px] font-[Nunito] focus:outline-2 focus:outline-[dodgerblue] focus:border-none text-white"
                />
              </div>
            </div>

            <div className="w-full flex flex-col">
              <label
                className="text-[18px] font-[400] font-[Nunito] text-white"
                htmlFor="description">
                <span>Description</span>
              </label>
              <textarea
                id="description"
                name="description"
                type="text"
                placeholder="write Product description here"
                required
                value={products.description}
                onChange={handleChange}
                className="w-full h-[130px] bg-transparent opacity-100 rounded-[5px] border-[1px] border-[#4b5563] pl-2.5 pr-2.5 mt-2.5 text-[16px] font-[Nunito] focus:outline-2 focus:outline-[dodgerblue] focus:border-none text-white py-2"
              />
            </div>
            <div className="pb-5">
              <button
                type="submit"
                className="w-[200px] h-[50px] bg-[#2563eb] rounded-3xl hover:bg-blue-700 text-white font-[500] text-center font-[Nunito]">
                <span>+ Add new Product</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostProducts;
