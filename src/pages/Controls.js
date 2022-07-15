// @mui
import { Container, Typography } from "@mui/material";
// hooks
import useSettings from "../hooks/useSettings";
// components
import Page from "../components/Page";

// ----------------------------------------------------------------------

export default function Controls() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Controls">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Typography variant="h3" component="h1" paragraph>
          Controls
        </Typography>
      </Container>
    </Page>
  );
}
