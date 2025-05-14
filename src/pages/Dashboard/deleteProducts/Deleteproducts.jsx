import { api } from "@/api";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Deleteproducts = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    api
      .get("/Products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch(() => {
        toast.error("Error from rendering products !");
      });
  }, [reload]);

  const handleDelete = (id) => {
    api
      .delete(`/Products/${id}`)
      .then(() => {
        toast.success("Product is successfully deleted !");
        setReload(!reload);
      })
      .catch(() => {
        toast.error("Error from deleting product !");
      });
  };

  return (
    <div className="mt-[100px] px-[30px]">
      <h1 className="text-3xl font-bold text-center mb-6">Delete Products</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border-gray-500 font-[Nunito] bg-white rounded-2xl overflow-hidden">
          <thead className="bg-[#273142] text-white">
            <tr>
              <th className="border px-4 py-3">ID</th>
              <th className="border px-4 py-3">Image</th>
              <th className="border px-4 py-3">Name</th>
              <th className="border px-4 py-3">Price</th>
              <th className="border px-4 py-3">Description</th>
              <th className="border px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <tr key={product.id} className="text-center">
                <td className="border px-4 py-2 text-[20px]">{index + 1}</td>
                <td className="border px-4 py-2">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-[100px] h-[80px] object-cover mx-auto rounded"
                  />
                </td>
                <td className="border px-4 py-2 text-[20px]">{product.name}</td>
                <td className="border px-4 py-2 text-[20px]">{product.price}.000 USD</td>
                <td className="border px-4 py-2 text-[20px]">{product.description}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-[dodgerblue] hover:bg-blue-900 text-white py-1 px-4 rounded transition-all duration-200">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-5 text-2xl">
                  No Products available yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Deleteproducts;
