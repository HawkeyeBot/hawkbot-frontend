import React from "react";

import { Typography } from "@mui/material";

const SymbolAndChart = ({ symbol, side }) => {
  return (
    <>
      <Typography color={side === "LONG" ? "#54D62C" : "error"} variant="subtitle2">
        {symbol}
      </Typography>
    </>
  );
};

export default SymbolAndChart;
