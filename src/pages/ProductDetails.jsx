import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AccessDenied from "../components/AccessDenied";
import ProductContainer from "../components/ProductContainer";
import axiosService from "../services/axiosService";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState("");
  const tokenSelector = useSelector((state) => state.tokenBox);

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosService.getSingleProduct(productId);
        setProduct(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [productId]);

  return (
    <>
      {tokenSelector.token ? (
        <ProductContainer
          id={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
        />
      ) : (
        <AccessDenied />
      )}
    </>
  );
};

export default ProductDetails;
