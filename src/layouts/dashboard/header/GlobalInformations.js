// @mui
import { Grid, Paper, Typography } from "@mui/material";
// utils

import { useRecoilValue } from "recoil";
import { dataAtom } from "src/recoil/atoms";
import { fTime } from "src/utils/formatTime";

// ----------------------------------------------------------------------

export default function GlobalInformations() {
  const { resources, api_weight, version, status, refreshTime, balance } = useRecoilValue(dataAtom);

  return (
    <>
      <Grid container direction="row" spacing={3}>
        <Item
          site={{
            name: "Last Update",
            value: fTime(refreshTime),
          }}
        />

        <Item
          site={{
            name: "Balance",
            value: `${parseFloat(balance?.USDT).toFixed(2)} USDT`,
          }}
        />

        <Item
          site={{
            name: "CPU",
            value: resources["CPU"],
          }}
        />

        <Item
          site={{
            name: "Memory",
            value: resources["Memory"],
          }}
        />

        <Item
          site={{
            name: "API Last / Max",
            value: `${api_weight?.last} / ${api_weight?.max}`,
          }}
        />

        <Item
          site={{
            name: "Status",
            value: status?.status,
          }}
        />

        <Item
          site={{
            name: "Version",
            value: version?.version?.split(" ")[0],
          }}
        />
      </Grid>
    </>
  );
}

// ----------------------------------------------------------------------

function Item({ site }) {
  const { value, name } = site;

  return (
    <Grid item xs={1.7}>
      <Paper variant="outlined" sx={{ py: 0.6, textAlign: "center" }}>
        <Typography variant="subtitle2">{value}</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {name}
        </Typography>
      </Paper>
    </Grid>
  );
}
