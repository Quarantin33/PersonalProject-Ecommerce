import React from "react";
import CardProduct from "../components/CardProduct";
import { useSelector } from "react-redux";
import AccessDenied from "../components/AccessDenied";

const Cart = () => {
  const { token } = useSelector((state) => state.tokenBox);
  const { product } = useSelector((state) => state.cartBox);

  console.log(token);
  return (
    <div>
      {token !== undefined ? (
        <CardProduct
          id={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ) : (
        <AccessDenied />
      )}
    </div>
  );
};

export default Cart;
