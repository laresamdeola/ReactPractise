import React, { useState } from "react";
import { poets as data } from "./data";

const KeyAndSpread = () => {
  const [poets, setPoets] = useState(data);
  console.log(data);
  return (
    <>
      <Poet {...poets[0]} />
      <Poet {...poets[1]} />
      <Poet {...poets[2]} />
    </>
  );
};

const Poet = (props) => {
  return (
    <div key={props.id}>
      <h1>{props.name}</h1>
      <h3>{props.genre}</h3>
      <h3>{props.style}</h3>
      <h3>{props.lifeStatus}</h3>
    </div>
  );
};

export { KeyAndSpread };
