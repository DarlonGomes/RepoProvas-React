import React from "react";
import Alert from "@mui/material/Alert";
import { AlertTitle } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

export default function HandleAlert({ isOpen, setIsOpen, message }) {
  return (
    <Collapse in={isOpen}>
      <Alert
        severity="warning"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setIsOpen(false);
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
