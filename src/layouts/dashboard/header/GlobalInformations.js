// @mui
import { Grid, Paper, Typography, Stack, Tooltip } from "@mui/material";
// utils

import { useRecoilValue } from "recoil";
import { dataAtom } from "src/recoil/atoms";
import { fTime } from "src/utils/formatTime";
import { fCurrency } from "src/utils/formatNumber";

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

        <BalanceItem balance={balance} />

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
            name: "API Weight Last / Max",
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

function BalanceItem({ balance }) {
  const sortedBalances = Object.entries(balance).sort(([, amountA], [, amountB]) => amountB - amountA);

  const renderBalances = (limitNumber) =>
    // limitNumber defines the number of balance to display
    // if undefined, displays all the balances

    sortedBalances?.map(([symbol, amount], index) => {
      return index >= limitNumber ? null : (
        <Typography key={symbol} variant="subtitle2">
          {fCurrency(amount)} {symbol}
        </Typography>
      );
    });

  return (
    <Tooltip title={<Stack direction="column">{renderBalances()}</Stack>} arrow>
      <Grid item xs={1.7}>
        <Paper variant="outlined" sx={{ py: 0.6, textAlign: "center" }}>
          <Stack direction="column">
            {renderBalances(1)}

            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Balance
            </Typography>
          </Stack>
        </Paper>
      </Grid>
    </Tooltip>
  );
}
