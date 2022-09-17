import * as React from "react";
import PrimaryList from "../Lists/PrimaryList";

export default function NestedList({ list }) {
  return (
    <>
      {list.map((arrayElements, index) => (
        <PrimaryList key={index} elements={arrayElements} />
      ))}
    </>
  );
}
