import React from "react";
import { Routes, Route } from "react-router-dom";
import LogIn from "../pages/LogIn";
import LogPrueba from "../pages/LogPrueba";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";

const AppRoutes = () => {

  return (
        <Routes>
          <Route index element={<LogIn />} />
          <Route path="/prueba" element={<LogPrueba />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
  );
};

export default AppRoutes;
