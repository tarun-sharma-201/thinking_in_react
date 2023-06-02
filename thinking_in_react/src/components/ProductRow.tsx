import { Box, Grid } from "@mui/material";
import React from "react";

const ProductRow = ({ product }: any) => {
  const name = product.stocked ? (
    product.name
  ) : (
    <Box sx={{ color: "red" }}>{product.name}</Box>
  );
  return (
    <Grid container>
      <Grid item xs={6} md={6}>
        {name}
      </Grid>
      <Grid item xs={6} md={6}>
        {product.price}
      </Grid>
    </Grid>
  );
};

export default ProductRow;
