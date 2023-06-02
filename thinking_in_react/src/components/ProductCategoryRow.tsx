import { Box, Grid } from "@mui/material";
import React from "react";

const ProductCategoryRow = ({ category }: any) => {
  return (
    <div>
      <Grid item xs={12} md={12}>
        <Box sx={{ marginInline: "25%" }}> {category} </Box>
      </Grid>
    </div>
  );
};

export default ProductCategoryRow;
