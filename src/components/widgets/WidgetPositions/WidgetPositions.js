// @mui
import { Card, Table, TableRow, TableBody, TableCell, TableHead, CardHeader, TableContainer } from "@mui/material";

// Components
import Scrollbar from "../../Scrollbar";
import { useRecoilValue } from "recoil";
import { dataAtom } from "src/recoil/atoms";
import PositionRow from "./PositionRow";

// ----------------------------------------------------------------------

export default function WidgetPositions() {
  const { positions } = useRecoilValue(dataAtom);

  return (
    <>
      <Card>
        <CardHeader title="Positions" sx={{ mb: 3 }} />
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
                  <TableCell sx={{ minWidth: 40 }}>TP</TableCell>
                  <TableCell sx={{ minWidth: 40 }}>DCA</TableCell>
                  <TableCell sx={{ minWidth: 40 }}>Mode</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {Object.keys(positions).map((symbol) => {
                  const positionSides = positions[symbol];

                  return Object.keys(positionSides).map((side) => {
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
