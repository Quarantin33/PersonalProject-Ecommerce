import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../components/CardProduct";
import ProductContainer from "../components/ProductContainer";
import axiosService from "../services/axiosService";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState("");

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
    //     <CardProduct
    //     />
    <ProductContainer
      id={product.id}
      image={product.image}
      title={product.title}
      price={product.price}
      description={product.description}
      category={product.category}
    />
  );
};

export default ProductDetails;
