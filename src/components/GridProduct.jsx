import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardProduct from "./CardProduct";

const GridProduct = ({ products }) => {
  return (
    <Box sx={{ width: "100%", marginTop: "50px" }}>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 0.5, sm: 1, md: 2 }}
        sx={{ padding: 2 }}
      >
        {products.map((prod, index) => (
          <Grid
            key={index}
            item
            // container
            // rowSpacing={3}
            // columnSpacing={{ xs: 0.5, sm: 1, md: 2 }}
            sx={{ padding: 2 }}
            xs={4}
          >
            <CardProduct
              id={prod.id}
              image={prod.image}
              title={prod.title}
              price={prod.price}
            />
          </Grid>
        ))}
      </Grid>
      {/* <PaginationProduct /> */}
    </Box>
  );
};

export default GridProduct;
