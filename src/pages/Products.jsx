import React, { useState } from "react";
import { useSelector } from "react-redux";
import GridProduct from "../components/GridProduct";
import AccessDenied from "../components/AccessDenied";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { token } = useSelector((state) => state.tokenBox);

  console.log(token);

  return (
    <>
      {token ? (
        <GridProduct products={products} setProducts={setProducts} />
      ) : (
        <AccessDenied />
      )}
    </>
  );
};

export default Products;
