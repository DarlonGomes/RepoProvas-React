import React, { useState } from "react";
import {
  ShortText,
  RadioButtonUnchecked,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { Paragraph, TestText, EmptyBox } from "./style";

export default function TeacherTestList({ details }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "600px", bgcolor: "#FBFBFB", margin: "0 50px 10px" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ShortText />
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary={details.name}
          sx={{
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: "500",
            color: "#303030",
            marginLeft: "-20px",
          }}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {details.tests.map((test) => {
          return <Test key={test.id} test={test} />;
        })}
      </Collapse>
    </List>
  );
}

function Test({ test }) {
  function changePage() {
    const url = test.pdfUrl;
    const response = window.confirm(
      `Do you want to open this pdf: ${test.name} ?`
    );
    if (response) window.open(url, "_blank");
  }
  return (
    <>
      <List component="div" sx={{ width: "500px", margin: "0 50px" }}>
        <ListItemButton
          onClick={() => {
            changePage();
          }}
        >
          <TestText>
            <RadioButtonUnchecked sx={{ fontSize: "10px" }} />
            <a>
              {test.date} - {test.name} - {test.discipline}
            </a>
          </TestText>
        </ListItemButton>
      </List>
    </>
  );
}
