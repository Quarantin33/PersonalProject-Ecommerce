import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import AccessDenied from "./AccessDenied";
import LogIn from "../pages/LogIn";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";
import NavBar from "./NavBar";

const AppRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<LogIn />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/access-denied" element={<AccessDenied />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
