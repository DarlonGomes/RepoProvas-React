import * as React from "react";
import CategoryList from "../PrimaryList";

export default function TeacherList({ list }) {
  return (
    <>
      {list.map((arrayElements, index) => (
        <CategoryList key={index} elements={arrayElements} />
      ))}
    </>
  );
}

