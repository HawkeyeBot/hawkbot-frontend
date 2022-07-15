// @mui
import { Grid, Card, Paper, Typography, CardHeader, CardContent } from "@mui/material";
// utils

import { useRecoilValue } from "recoil";
import { dataAtom } from "src/recoil/atoms";

// ----------------------------------------------------------------------

export default function Resources() {
  const { resources, api_weight } = useRecoilValue(dataAtom);

  return (
    <Card>
      <CardHeader title="Resources" />
      <CardContent>
        <Grid container spacing={2}>
          <Item
            key={"api_last"}
            site={{
              name: "API Last",
              value: api_weight?.last,
            }}
          />

          <Item
            key={"api_max"}
            site={{
              name: "API Max",
              value: api_weight?.max,
            }}
          />

          {Object.keys(resources).map((resource) => (
            <Item
              key={resource}
              site={{
                name: resource,
                value: resources[resource],
              }}
            />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

// ----------------------------------------------------------------------

function Item({ site }) {
  const { value, name } = site;

  return (
    <Grid item xs={2.4}>
      <Paper variant="outlined" sx={{ py: 1, textAlign: "center" }}>
        <Typography variant="h6">{value}</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {name}
        </Typography>
      </Paper>
    </Grid>
  );
}
