import React, { useState } from "react";
import poets from "./data";

const Poets = () => {
  const [data, setData] = useState(poets);
  console.log(data[0].name);
  return (
    <>
      <Poet name={data[0].name} genre={data[0].genre} />
      <Poet name={data[1].name} genre={data[1].genre} />
      <Poet name={data[2].name} genre={data[2].genre} />
    </>
  );
};

const Poet = (props) => {
  const [highlight, setHighlight] = useState(false);

  const clicked = () => {
    setHighlight(true);
    console.log("highlight pressed");
  };

  return (
    <div key={props.id}>
      <h1 style={{ color: highlight ? "yellow" : "initial" }}>{props.name}</h1>
      <h3>{props.genre}</h3>
      <button onClick={clicked}>Highlight</button>
    </div>
  );
};

export { Poets };
