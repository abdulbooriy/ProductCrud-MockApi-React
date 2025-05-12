import React from "react";
import { MdDashboard } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-[256px] h-screen bg-bg-primary font-[Nunito]">
        <div className="flex justify-center mt-6">
          <h1 className="text-[20px] font-extrabold text-[#4880FF]">
            <a href="#">
              Dash<span className="text-[#202224]">Stack</span>
            </a>
          </h1>
        </div>
        <ul className="w-full h-[50px]  mt-[30px]">
          <div className="flex items-center justify-center gap-4">
            <li className="pl-10 text-[22px]">
              <a href="#">
                <MdDashboard />
              </a>
            </li>
            <li className="font-semibold">
              <a href="#">
                <h1>Dashboard</h1>
              </a>
            </li>
          </div>

          <div className="flex items-center justify-center gap-4">
            <li className="pl-10 text-[22px]">
              <a href="#">
                <AiOutlineProduct />
              </a>
            </li>
            <li className="font-semibold">
              <a href="#">
                <p>Products</p>
              </a>
            </li>
          </div>
        </ul>
      </div>
      <div className="w-full h-[70px] bg-bg-primary py-[15px] px-[30px]"></div>
    </div>
  );
};

export default Dashboard;
