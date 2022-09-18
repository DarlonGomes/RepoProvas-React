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
        {discipline.categories.length === 0 && <EmptyCategory/ >}
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
          <ListItemButton key={test.id * 0.33}>
            <TestText>
              <a>
                {test.date} - {test.name} - {test.teacherName}
              </a>
            </TestText>
          </ListItemButton>
        ))}
      </List>
    </>
  );
}

function EmptyCategory(){
  return(
    <EmptyBox>
     <p> This category doesn't have any posted test</p>
    </EmptyBox>
  )
}
