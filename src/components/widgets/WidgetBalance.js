import merge from "lodash/merge";
import ReactApexChart from "react-apexcharts";
// @mui
import { alpha, styled } from "@mui/material/styles";
import { Box, Card, Typography, Stack, useTheme } from "@mui/material";
// utils
import { fNumber } from "../../utils/formatNumber";
// components
import Iconify from "../Iconify";
import { BaseOptionChart } from "../chart";
import { useRecoilValue } from "recoil";
import { dataAtom } from "src/recoil/atoms";

// ----------------------------------------------------------------------

const IconWrapperStyle = styled("div")(({ theme }) => ({
  width: 24,
  height: 24,
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  justifyContent: "center",
  marginRight: theme.spacing(1),
  color: theme.palette.success.main,
  backgroundColor: alpha(theme.palette.success.main, 0.16),
}));

// ----------------------------------------------------------------------

export default function WidgetBalance() {
  const { balance } = useRecoilValue(dataAtom);
  const theme = useTheme();

  const percent = 69;

  const chartOptions = merge(BaseOptionChart(), {
    colors: [theme.palette.chart.green[0]],
    chart: { animations: { enabled: true }, sparkline: { enabled: true } },
    stroke: { width: 2 },
    tooltip: {
      x: { show: false },
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: () => "",
        },
      },
      marker: { show: false },
    },
  });

  return (
    <Card sx={{ display: "flex", alignItems: "center", p: 3 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle2" paragraph>
          Balance
        </Typography>
        <Typography variant="h3" gutterBottom>
          {fNumber(balance?.total_balance)}
        </Typography>

        <Stack direction="row" alignItems="center">
          <IconWrapperStyle
            sx={{
              ...(percent < 0 && {
                color: "error.main",
                bgcolor: (theme) => alpha(theme.palette.error.main, 0.16),
              }),
            }}
          >
            <Iconify
              width={16}
              height={16}
              icon={percent >= 0 ? "eva:trending-up-fill" : "eva:trending-down-fill"}
            />
          </IconWrapperStyle>

          <Typography variant="subtitle2" component="span">
            {percent > 0 && "+"}
            {`${percent}%`}
          </Typography>
          <Typography variant="body2" component="span" noWrap sx={{ color: "text.secondary" }}>
            &nbsp;than yesterday
          </Typography>
        </Stack>
      </Box>

      <ReactApexChart
        type="line"
        series={[{ data: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55] }]}
        options={chartOptions}
        width={120}
        height={80}
      />
    </Card>
  );
}
