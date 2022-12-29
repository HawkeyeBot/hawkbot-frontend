import React, { Fragment, useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/material/SvgIcon/SvgIcon";

const useNotification = () => {
  const [conf, setConf] = useState({});
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    if (conf?.msg) {
      let variant = "info";
      if (conf.variant) {
        variant = conf.variant;
      }

      enqueueSnackbar(conf.msg, {
        variant: variant,
        autoHideDuration: 5000,
        action: (key) => {
          return (
            <Fragment>
              <IconButton
                onClick={() => {
                  closeSnackbar(key);
                }}
              >
                <CloseIcon />
              </IconButton>
            </Fragment>
          );
        },
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },
      });
    }
  }, [conf, enqueueSnackbar, closeSnackbar]);
  return [setConf];
};

export default useNotification;
