import React, { useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { MODES } from "./constants";
import ValidationPopup from "./ValidationPopup";
import useNotification from "src/components/alerts/hook";
import { setModeOnServer } from "./services";

export default function ModeSelector({ currentMode, symbol, position_side }) {
  const [mode, setMode] = useState(currentMode);
  const [previousMode, setPreviousMode] = useState(currentMode);
  const [openConfirmation, setOpenConfirmation] = useState(false);

  const [sendNotification] = useNotification();

  const handleChange = (event) => {
    const requestedMode = event.target.value;

    setPreviousMode(mode);
    setMode(requestedMode);

    if (MODES[requestedMode]?.requiresValidation) {
      setOpenConfirmation(true);
    } else {
      setModeOnServer(requestedMode, previousMode, symbol, position_side, setMode, sendNotification);
    }
  };

  const onConfirm = () => {
    setModeOnServer(mode, previousMode, symbol, position_side, setMode, sendNotification);
    setOpenConfirmation(false);
  };

  const onCloseConfirmation = () => {
    setOpenConfirmation(false);
    setMode(previousMode);
  };

  return (
    <>
      <FormControl sx={{ minWidth: 125 }} size="small">
        <Select value={MODES[mode]?.value} onChange={handleChange}>
          {Object.values(MODES).map((m) => (
            <MenuItem key={m.value} value={m.value}>
              {m.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <ValidationPopup open={openConfirmation} onConfirm={onConfirm} onClose={onCloseConfirmation} mode={mode} />
    </>
  );
}
