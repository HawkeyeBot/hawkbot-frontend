import React, { useState } from "react";

import { Typography, Modal, Box, Link } from "@mui/material";
import TradingViewWidget from "../TradingView/TradingViewWidget";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "90%",
  bgcolor: "background.paper",
  boxShadow: 24,
};

const SymbolChart = ({ symbol, side }) => {
  const [displayChart, setDisplayChart] = useState(false);

  return (
    <>
      <Typography
        color={side === "LONG" ? "#54D62C" : "error"}
        variant="subtitle2"
        onClick={() => setDisplayChart(true)}
        component={Link}
        sx={{ cursor: "pointer" }}
      >
        {symbol}
      </Typography>
      <Modal
        keepMounted
        open={displayChart}
        onClose={() => setDisplayChart(false)}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <TradingViewWidget symbol={symbol} side={side} />
        </Box>
      </Modal>
    </>
  );
};

export default React.memo(SymbolChart);
