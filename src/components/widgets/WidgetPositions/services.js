import axios from "axios";

const SET_MODE_URL = "http://localhost:6969/setMode";
const CANCEL_ORDER_URL = "http://localhost:6969/cancelOrder";
const CLOSE_POSITION_URL = "http://localhost:6969/closePosition";

export const setModeOnServer = (requestedMode, previousMode, symbol, position_side, setMode, sendNotification) => {
  axios
    .post(SET_MODE_URL, {
      symbol,
      mode: requestedMode,
      position_side,
    })
    .then((response) => {
      sendNotification({
        msg: `Your mode was correctly set to ${requestedMode} for ${symbol} ${position_side}`,
        variant: "success",
      });
    })
    .catch((err) => {
      sendNotification({
        msg: `Something wrong happened when setting ${symbol} ${position_side} to ${requestedMode}`,
        variant: "error",
      });
      setMode(previousMode);
    });
};

export const cancelOrderOnServer = (symbol, order_id, sendNotification) => {
  axios
    .post(CANCEL_ORDER_URL, {
      symbol,
      order_id,
    })
    .then((response) => {
      sendNotification({
        msg: `Your order ${order_id} for ${symbol} was cancelled`,
        variant: "success",
      });
    })
    .catch((err) => {
      sendNotification({
        msg: `Something wrong happened when cancelling order ${order_id} for ${symbol}`,
        variant: "error",
      });
    });
};

export const closePositionOnServer = (symbol, position_side, orderType, sendNotification) => {
  axios
    .post(CLOSE_POSITION_URL, {
      symbol,
      position_side,
      orderType,
    })
    .then((response) => {
      sendNotification({
        msg: `A ${orderType} close for ${symbol} ${position_side} was sent`,
        variant: "success",
      });
    })
    .catch((err) => {
      sendNotification({
        msg: `Something wrong happened when trying to ${orderType} close for ${symbol} ${position_side}`,
        variant: "error",
      });
    });
};
