// @mui
import { Container, Typography } from "@mui/material";
// hooks
import useSettings from "../hooks/useSettings";
// components
import Page from "../components/Page";

// ----------------------------------------------------------------------

export default function Logs() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Logs">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Typography variant="h3" component="h1" paragraph>
          Logs
        </Typography>
      </Container>
    </Page>
  );
}
