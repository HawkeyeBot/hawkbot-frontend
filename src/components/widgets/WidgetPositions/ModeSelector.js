import React, { useState } from "react";
import axios from "axios";
import { errorAtom } from "src/recoil/atoms";
import { useSetRecoilState } from "recoil";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { MODES } from "./constants";
import ValidationPopup from "./ValidationPopup";
import useNotification from "src/components/alerts/hook";

const REST_URL = "http://localhost:6969/setMode";

export default function ModeSelector({ currentMode, symbol, position_side }) {
  const [mode, setMode] = useState(currentMode);
  const [previousMode, setPreviousMode] = useState(currentMode);
  const [openConfirmation, setOpenConfirmation] = useState(false);

  const setErrorRecoil = useSetRecoilState(errorAtom);
  const [msg, sendNotification] = useNotification();

  const setUpdatedModeOnServer = (requestedMode, previousMode) => {
    axios
      .post(REST_URL, {
        symbol,
        mode: requestedMode,
        position_side,
      })
      .then((response) => {
        sendNotification({
          msg: `Your mode was correctly set to ${requestedMode} for ${symbol} ${position_side}`,
          variant: "success",
        });
      })
      .catch((err) => {
        setErrorRecoil(err);
        sendNotification({
          msg: `Something wrong happened when setting ${symbol} ${position_side} to ${requestedMode}`,
          variant: "error",
        });
        setMode(previousMode);
      });
  };

  const handleChange = (event) => {
    const requestedMode = event.target.value;

    setPreviousMode(mode);
    setMode(requestedMode);

    if (MODES[requestedMode]?.requiresValidation) {
      setOpenConfirmation(true);
    } else {
      setUpdatedModeOnServer(requestedMode, previousMode);
    }
  };

  const onConfirm = () => {
    setUpdatedModeOnServer(mode, previousMode);
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

      <ValidationPopup
        open={openConfirmation}
        setOpen={setOpenConfirmation}
        onConfirm={onConfirm}
        onClose={onCloseConfirmation}
        mode={mode}
      />
    </>
  );
}
