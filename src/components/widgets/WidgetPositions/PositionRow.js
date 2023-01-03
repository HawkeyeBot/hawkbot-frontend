import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";

import {
  Box,
  Button,
  Collapse,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { useRecoilValue } from "recoil";
import Label from "src/components/Label";
import { dataAtom } from "src/recoil/atoms";
import ModeSelector from "./ModeSelector";
import { cancelOrderOnServer } from "./services";
import useNotification from "src/components/alerts/hook";
import { fPercent } from "src/utils/formatNumber";

const PositionRow = ({ symbol, side, positionSides }) => {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";

  const [sendNotification] = useNotification();
  const { open_orders } = useRecoilValue(dataAtom);
  const [open, setOpen] = useState(false);

  const { cost, entry_price, position_size, current_price, mode, pnl } = positionSides && positionSides[side];
  const symbolOpenOrders = open_orders[symbol].filter((order) => order?.position_side === side);
  const dca_number = symbolOpenOrders.filter((order) => order?.order_type_identifier === "DCA").length;
  const tp_number = symbolOpenOrders.filter((order) => order?.order_type_identifier === "TP").length;

  console.log(symbol, pnl);

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography color={side === "LONG" ? "#54D62C" : "error"} variant="subtitle2">
              {symbol}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell>{cost}</TableCell>
        <TableCell>{position_size}</TableCell>
        <TableCell>{entry_price}</TableCell>
        <TableCell>{current_price}</TableCell>
        <TableCell>
          <Typography color={pnl >= 0 ? "#54D62C" : "error"} variant="inherit">
            {pnl}
          </Typography>
        </TableCell>

        <TableCell>
          <Label variant={isLight ? "ghost" : "filled"}>{tp_number}</Label>
        </TableCell>
        <TableCell>
          <Label
            variant={isLight ? "ghost" : "filled"}
            color={dca_number > 1 || position_size < 1 ? "default" : dca_number === 1 ? "warning" : "error"}
          >
            {dca_number}
          </Label>
        </TableCell>
        <TableCell>
          <ModeSelector currentMode={mode} symbol={symbol} position_side={side} />
        </TableCell>
      </TableRow>

      {/* Table for the Open Orders */}
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 0 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Open Order Type</TableCell>
                    <TableCell>Cost</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Type</TableCell>
                    <TableCell align="right">Side</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {symbolOpenOrders
                    .sort((order1, order2) => order2.price - order1.price)
                    .map(({ id, order_type_identifier, quantity, side, type, cost, price }) => (
                      <TableRow key={id}>
                        <TableCell component="th" scope="row">
                          {order_type_identifier}
                        </TableCell>
                        <TableCell>{cost}</TableCell>
                        <TableCell align="right">{price}</TableCell>
                        <TableCell align="right">{quantity}</TableCell>
                        <TableCell align="right">{type}</TableCell>
                        <TableCell align="right">
                          <Typography color={side === "BUY" ? "#54D62C" : "error"} variant="subtitle2">
                            {side}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Button variant="text" onClick={() => cancelOrderOnServer(symbol, id, sendNotification)}>
                            Cancel
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default PositionRow;
