import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { MODES } from "./constants";
import axios from "axios";
import { errorAtom } from "src/recoil/atoms";
import { useSetRecoilState } from "recoil";

const REST_URL = "http://localhost:6969/setMode";

export default function ModeSelector({ currentMode, symbol, position_side }) {
  const [mode, setMode] = useState(currentMode);
  const setErrorRecoil = useSetRecoilState(errorAtom);

  const handleChange = (event) => {
    axios
      .post(REST_URL, {
        symbol,
        mode: event.target.value,
        position_side,
      })
      .then((response) => {
        setMode(event.target.value);
      })
      .catch((err) => {
        setErrorRecoil(err);
        console.log(err);
      });
  };

  return (
    <FormControl sx={{ minWidth: 125 }} size="small">
      {/* <InputLabel id="demo-select-small">Set Mode</InputLabel> */}
      <Select value={MODES[mode]?.value} onChange={handleChange}>
        {Object.values(MODES).map((m) => (
          <MenuItem key={m.value} value={m.value}>
            {m.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
