import React from "react";
import { AlertTitle, Alert } from "@mui/material";

const ErrorNotification = ({ message = "Something went wrong" }) => {
  return (
    <Alert severity="error">
      <AlertTitle>Something went wrong</AlertTitle>
      {message}
    </Alert>
  );
};

export default ErrorNotification;
