import React, { useState } from "react";
import { Dehaze, ExpandMore, ExpandLess } from "@mui/icons-material";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import SecondaryList from "../SecondaryList";

export default function PrimaryList({ elements }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  console.log(elements);
  return (
    <List
      sx={{
        width: "700px",
        bgcolor: "background.paper",
        marginBottom: "10px",
        borderRadius: "10px",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <Dehaze />
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary={elements.number + "º period"}
          sx={{
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: "500",
            marginLeft: "-20px",
          }}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {elements?.disciplines?.map((discipline) => (
          <SecondaryList discipline={discipline} key={discipline.id * 0.23} />
        ))}
      </Collapse>
    </List>
  );
}
