// @mui
import {
  Card,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  CardHeader,
  TableContainer,
  Switch,
  Stack,
  Typography,
} from "@mui/material";

// Components
import Scrollbar from "../../Scrollbar";
import { useRecoilValue } from "recoil";
import { dataAtom } from "src/recoil/atoms";
import PositionRow from "./PositionRow";
import { useState } from "react";
import { isEmpty } from "lodash";

// ----------------------------------------------------------------------

export default function WidgetPositions() {
  const [showInactivePositions, setShowInactivePositions] = useState(true);
  const { positions } = useRecoilValue(dataAtom);

  return (
    <>
      <Card>
        <CardHeader
          title="Positions"
          sx={{ mb: 1 }}
          action={
            <Stack direction="row" alignItems="center">
              <Switch
                size="small"
                checked={showInactivePositions}
                onChange={(e) => setShowInactivePositions(e.target.checked)}
                inputProps={{ "aria-label": "controlled" }}
              />
              <Typography variant="subtitle2">Show inactive positions</Typography>
            </Stack>
          }
        />

        <Scrollbar>
          <TableContainer sx={{ minWidth: 720 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  {/* For the arrow */}
                  <TableCell />

                  <TableCell sx={{ minWidth: 40 }}>Symbol</TableCell>
                  <TableCell sx={{ minWidth: 40 }}>Cost</TableCell>
                  <TableCell sx={{ minWidth: 40 }}>Size</TableCell>
                  <TableCell sx={{ minWidth: 40 }}>Position price</TableCell>
                  <TableCell sx={{ minWidth: 40 }}>Current price</TableCell>
                  <TableCell sx={{ minWidth: 40 }}>PnL</TableCell>
                  <TableCell sx={{ minWidth: 20 }}>TP</TableCell>
                  <TableCell sx={{ minWidth: 20 }}>DCA</TableCell>
                  <TableCell sx={{ minWidth: 40 }}>Mode</TableCell>
                  <TableCell sx={{ minWidth: 20 }}>Close</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {Object.keys(positions).map((symbol) => {
                  const positionSides = positions[symbol];

                  return Object.keys(positionSides).map((side) => {
                    // If switched off, don't display inactive positions
                    if (!showInactivePositions && isEmpty(positionSides[side].position_size)) {
                      return null;
                    }

                    return (
                      <PositionRow
                        key={`${symbol}_${side}`}
                        symbol={symbol}
                        side={side}
                        positionSides={positionSides}
                      />
                    );
                  });
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>
      </Card>
    </>
  );
}
