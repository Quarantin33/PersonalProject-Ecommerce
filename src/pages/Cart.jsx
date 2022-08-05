import React from "react";
import CardProduct from "../components/CardProduct";
import { useSelector } from "react-redux";
import AccessDenied from "../components/AccessDenied";
import { Box, Grid } from "@mui/material";

const Cart = () => {
  const { token } = useSelector((state) => state.tokenBox);
  const { product } = useSelector((state) => state.cartBox);

  const style = {
    marginTop: '40px',
    marginLeft: '35%'
  };

  console.log(token);
  return (
    <Box sx={{ width: "100%", marginTop: "50px" }}>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 0.5, sm: 1, md: 2 }}
        sx={{ padding: 2 }}
      >
        <Grid item xs={12}>
          <div style={style}>
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
        </Grid>
      </Grid>
      {/* <PaginationProduct /> */}
    </Box>
  );
};

export default Cart;
