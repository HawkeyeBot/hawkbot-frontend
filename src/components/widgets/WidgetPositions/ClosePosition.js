import React, { useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Slide,
} from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import useNotification from "src/components/alerts/hook";
import { isEmpty } from "lodash";
import { closePositionOnServer } from "./services";

const ClosePosition = ({ symbol, position_side, position_size }) => {
  const [sendNotification] = useNotification();
  const [orderType, setOrderType] = useState(null);
  const [openConfirmation, setOpenConfirmation] = useState(false);

  const isCloseDisabled = orderType === null;

  const handleChange = (event) => {
    setOrderType(event.target.value);
  };

  const onClose = () => {
    setOrderType(null);
    setOpenConfirmation(false);
  };

  const onConfirm = () => {
    closePositionOnServer(symbol, position_side, orderType, sendNotification);
    onClose();
  };

  return (
    <>
      <IconButton
        aria-label="close"
        size="small"
        onClick={() => setOpenConfirmation(true)}
        disabled={isEmpty(position_size)}
      >
        <CancelOutlinedIcon fontSize="small" />
      </IconButton>

      <Dialog
        open={openConfirmation}
        onClose={onClose}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-close-position"
      >
        <DialogTitle>Order type selection</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Choose the order type for closing your {symbol} {position_side} position
          </DialogContentText>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="ordertype-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={orderType}
              onChange={handleChange}
            >
              <FormControlLabel value="LIMIT" control={<Radio />} label="Limit" />
              <FormControlLabel value="MARKET" control={<Radio />} label="Market" />
            </RadioGroup>
          </FormControl>
        </DialogContent>

        <DialogActions>
          <Button variant="contained" disabled={isCloseDisabled} onClick={onConfirm}>
            Close position
          </Button>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ClosePosition;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
