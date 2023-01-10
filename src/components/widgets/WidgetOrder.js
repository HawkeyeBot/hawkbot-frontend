// @mui
import { Card, Typography, CardHeader, CardContent, Stack } from "@mui/material";
import {
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineConnector,
} from "@mui/lab";
// utils
import { fTime } from "../../utils/formatTime";
import { useRecoilValue } from "recoil";
import { dataAtom } from "src/recoil/atoms";

// ----------------------------------------------------------------------

export default function WidgetOrder() {
  const { latest_orders } = useRecoilValue(dataAtom);

  return (
    <Card
      sx={{
        "& .MuiTimelineItem-missingOppositeContent:before": {
          display: "none",
        },
        ".MuiTimelineItem-root": {
          minHeight: 60,
        },
      }}
    >
      <CardHeader title="Latest orders" />
      <CardContent>
        <Timeline>
          {latest_orders
            .filter((order) => order?.status === "FILLED")
            .map((order, index) => (
              <OrderItem key={order.id} order={order} isLast={index === latest_orders.length - 1} />
            ))}
        </Timeline>
      </CardContent>
    </Card>
  );
}

// ----------------------------------------------------------------------

function OrderItem({ order, isLast }) {
  const { event_time, order_type_identifier, position_side, quantity, symbol, price } = order;

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          color={
            (order_type_identifier === "TP_REFILL" && "warning") ||
            (order_type_identifier === "TP" && "success") ||
            (order_type_identifier === "INITIAL_ENTRY" && "info") ||
            "error"
          }
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>

      <TimelineContent>
        <Stack direction="row" spacing={0.5}>
          <Typography display="inline" variant="subtitle2" color={position_side === "LONG" ? "#54D62C" : "error"}>
            {symbol}
          </Typography>
          <Typography display="inline" variant="subtitle2">
            {order_type_identifier}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={0.5}>
          <Typography display="inline" variant="caption">
            {quantity} @ {price} -
          </Typography>
          <Typography display="inline" variant="caption">
            {fTime(event_time)}
          </Typography>
        </Stack>
      </TimelineContent>
    </TimelineItem>
  );
}
