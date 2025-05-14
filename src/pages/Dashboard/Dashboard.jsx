import Header from "@/components/header/Header";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./style.css"

const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-[300px] h-screen bg-bg-primary font-[Nunito] flex-shrink-0">
        <ul className="text-white flex flex-col gap-[30px] font-[Nunito] px-[60px] font-semibold text-[18px] pt-[30px]">
          <li>
            <NavLink to={"/dashboard"}>
              {" "}
              <span className="text-[#4880FF] text-[20px] font-extrabold">
                Dash
              </span>
              Stack
            </NavLink>
          </li>
          <li>
            <NavLink className="dashboard__link" to={"/dashboard"}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink className="dashboard__link" to={"get-products"}>Get All Products</NavLink>
          </li>
          <li>
            <NavLink className="dashboard__link" to={"post-products"}>Post Products</NavLink>
          </li>
          <li>
            <NavLink className="dashboard__link" to={"delete-products"}>Delete Products</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 overflow-y-auto">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
