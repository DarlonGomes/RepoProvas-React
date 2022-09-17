import React, { useState } from "react";
import { ShortText, RadioButtonUnchecked, ExpandMore, ExpandLess } from "@mui/icons-material";
import {List, ListItemButton, ListItemIcon, ListItemText, Collapse} from "@mui/material"


export default function SecondaryList({ discipline }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  console.log(discipline)
  return (
    <List
      sx={{ width: "600px", bgcolor: "#FBFBFB", margin: "0 50px 10px" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick} >
      <ListItemIcon>
          <ShortText />
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary={discipline.name}
          sx={{
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: "500",
            color: "#303030",
            marginLeft: "-20px"
          }}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" sx={{width: "500px", margin: "0 50px"}}>
          <ListItemButton >
            <ListItemIcon>
              <RadioButtonUnchecked sx={{fontSize: "10px"}}/>
            </ListItemIcon>
            <ListItemText  sx={{marginLeft: "-30px"}}> Olá</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
