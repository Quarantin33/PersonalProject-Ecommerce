import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardProduct from "./CardProduct";
import axiosService from "../services/axiosService";

const GridProduct = ({ products, setProducts }) => {
  useEffect(() => {
    (async () => {
      const response = await axiosService.getAllProducts();
      console.log(response);
      const prod = response.filter( elem => elem.category !== "electronics");
      setProducts(prod);
    })();
  }, [setProducts]);

  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 0.5, sm: 1, md: 2 }}
        sx={{ padding: 2 }}
      >
        {products.map((prod, index) => (
          <Grid key={index} item xs={3}>
            <CardProduct
              id={prod.id}
              image={prod.image}
              title={prod.title}
              price={prod.price}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GridProduct;
