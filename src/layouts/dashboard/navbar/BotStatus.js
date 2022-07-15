// @mui
import { Grid, Typography } from "@mui/material";

import { useRecoilValue } from "recoil";
import { dataAtom } from "src/recoil/atoms";
import { fDateTime } from "src/utils/formatTime";
// ----------------------------------------------------------------------

export default function BotStatus() {
  const { version, status, refreshTime } = useRecoilValue(dataAtom);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Typography variant="overline" noWrap sx={{ color: "text.secondary" }}>
            Last update: {fDateTime(refreshTime)}
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Typography variant="overline" noWrap sx={{ color: "text.secondary" }}>
            {status?.status}
          </Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="overline" noWrap sx={{ color: "text.secondary" }}>
            {version?.version}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
