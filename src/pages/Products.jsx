import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GridProduct from "../components/GridProduct";
import AccessDenied from "../components/AccessDenied";
import axiosService from "../services/axiosService";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { token } = useSelector((state) => state.tokenBox);

  useEffect(() => {
    (async () => {
      const response = await axiosService.getAllProducts();
      // console.log(response);
      const prod = response.filter((elem) => elem.category !== "electronics");
      setProducts(prod);
    })();
  }, [setProducts]);

  return (
    <>
      {token ? (
        <GridProduct products={products}/>
      ) : (
        <AccessDenied />
      )}
    </>
  );
};

export default Products;
