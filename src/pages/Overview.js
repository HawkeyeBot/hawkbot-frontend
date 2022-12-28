// @mui
import { Container, Grid } from "@mui/material";

// hooks
import useSettings from "../hooks/useSettings";
// components
import Page from "../components/Page";
import WidgetPositions from "src/components/widgets/WidgetPositions/WidgetPositions";
import WidgetOrder from "src/components/widgets/WidgetOrder";

// ----------------------------------------------------------------------

export default function OverviewPage() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Overview">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <WidgetPositions />
          </Grid>

          <Grid item xs={6} md={6} lg={4}>
            <WidgetOrder />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
