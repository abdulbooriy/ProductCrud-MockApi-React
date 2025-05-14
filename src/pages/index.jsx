import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "../utils/index";

const GetProduct = lazy(() => import("./Dashboard/getProducts/GetProducts"));
const PostProduct = lazy(() => import("./Dashboard/postProduct/PostProducts"));
const DeleteProduct = lazy(() =>
  import("./Dashboard/deleteProducts/Deleteproducts")
);
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));

const MainRouters = ({reload, setReload}) => {
  return (
    <Routes>
    <Route path="/dashboard" element={<Dashboard />}>
      <Route path="get-products" element={<Suspense><GetProduct reload={reload} /></Suspense>}/>
      <Route path="post-products" element={<Suspense><PostProduct setReload={setReload} /></Suspense>}/>
      <Route path="delete-products" element={<Suspense><DeleteProduct /></Suspense>}/>
    </Route>
    </Routes>
  );
};

export default MainRouters;
