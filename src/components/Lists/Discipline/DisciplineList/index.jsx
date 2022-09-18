import * as React from "react";
import PrimaryList from "../PrimaryList";

export default function DisciplineList({ list }) {
  return (
    <>
      {list.map((arrayElements, index) => (
        <PrimaryList key={index} elements={arrayElements} />
      ))}
    </>
  );
}

