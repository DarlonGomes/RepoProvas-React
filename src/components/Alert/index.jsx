import React from "react";
import Alert from "@mui/material/Alert";
import { AlertTitle } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

export default function HandleAlert({ isAlertOpen , setIsAlertOpen, message }) {
  return (
    <Collapse in={isAlertOpen }>
      <Alert
        severity="warning"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setIsAlertOpen(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        <AlertTitle>Warning</AlertTitle>
        {message}
      </Alert>
    </Collapse>
  );
}
