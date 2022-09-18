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

export default function SecondaryList({ discipline }) {
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
          primary={discipline.name}
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
        {discipline.categories.length === 0 && <EmptyCategory />}
        {discipline.categories.map((category) => {
          return <Category key={category.id} category={category} />;
        })}
      </Collapse>
    </List>
  );
}

function Category({ category }) {
  return (
    <>
      <List component="div" sx={{ width: "500px", margin: "0 50px" }}>
        <Paragraph>
          <RadioButtonUnchecked sx={{ fontSize: "10px" }} />
          {category.name}
        </Paragraph>
        {category.tests.map((test) => (
          <Test test={test} key={test.id} />
        ))}
      </List>
    </>
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
    <ListItemButton
      key={test.id * 0.33}
      onClick={() => {
        changePage(test.pdfUrl);
      }}
    >
      <TestText>
        <p>
          {test.date} - {test.name} - {test.teacherName}
        </p>
      </TestText>
    </ListItemButton>
  );
}
function EmptyCategory() {
  return (
    <EmptyBox>
      <p> This category doesn't have any posted test</p>
    </EmptyBox>
  );
}
