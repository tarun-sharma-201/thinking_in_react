import { Checkbox, TextField } from "@mui/material";
import React from "react";

const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}: any) => {
  return (
    <div>
      <TextField
        placeholder="Search for any item here"
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <Checkbox
        checked={inStockOnly}
        onChange={(e) => onInStockOnlyChange(e.target.checked)}
      />
    </div>
  );
};

export default SearchBar;
