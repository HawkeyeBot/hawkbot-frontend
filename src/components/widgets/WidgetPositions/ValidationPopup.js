import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Stack } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ValidationPopup({ open, setOpen, onConfirm, mode, onClose }) {
  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Warning regarding {mode} mode</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            This mode will sell your position with a MARKET order.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Stack sx={{ width: "100%" }} direction="row" justifyContent="space-between">
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onConfirm}>Confirm</Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </>
  );
}
