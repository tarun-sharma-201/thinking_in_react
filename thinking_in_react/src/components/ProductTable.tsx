import { Grid } from "@mui/material";
import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({ products, filterText, inStockOnly }: any) => {
  const rows: any = [];
  let lastCategory: any = null;

  products.forEach((product: any) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          key={product.category}
          category={product.category}
        />
      );
    }
    rows.push(<ProductRow key={product.name} product={product} />);
    lastCategory = product.category;
  });
  console.log(rows);

  return (
    <div>
      <Grid container>
        <Grid item xs={6} md={6}>
          Name
        </Grid>
        <Grid item xs={6} md={6}>
          Price
        </Grid>
      </Grid>
      {rows}
    </div>
  );
};

export default ProductTable;
