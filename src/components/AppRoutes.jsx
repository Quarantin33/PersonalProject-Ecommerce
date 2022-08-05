import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import AccessDenied from "./AccessDenied";
import LogIn from "../pages/LogIn";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";
import NavBar from "./NavBar";
import Profile from "../pages/Profile";
import Cart from "../pages/Cart";

const AppRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<LogIn />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/access-denied" element={<AccessDenied />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
