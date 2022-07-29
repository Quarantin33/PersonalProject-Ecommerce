import React from "react";
import { Routes, Route } from "react-router-dom";
import LogIn from "../pages/LogIn";
import Products from "../pages/Products";

const AppRoutes = () => {
  return (
        <Routes>
          <Route index element={<LogIn />} />
          <Route path="/products" element={<Products />} />
        </Routes>
  );
};

export default AppRoutes;
