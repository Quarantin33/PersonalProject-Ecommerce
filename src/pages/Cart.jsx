import React from "react";
import { useSelector } from "react-redux";
import AccessDenied from "../components/AccessDenied";
import { Box, Grid } from "@mui/material";
import GridProduct from "../components/GridProduct";

const Cart = () => {
  const { token } = useSelector((state) => state.tokenBox);
  const { products } = useSelector((state) => state.cartBox);

  return (
    <Box sx={{ width: "100%", marginLeft: '35px' }}>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 0.5, sm: 1, md: 2 }}
        sx={{ padding: 2 }}
      >
        <Grid item xs={12}>
          <div>
            {token ? (
              products.length > 0 ? (
                <GridProduct products={products}/>
              ) : ("No hay productos en el carrito")
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
