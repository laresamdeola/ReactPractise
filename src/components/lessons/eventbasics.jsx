import React, { useState } from "react";
import { poets as data } from "./data";

const EventBasics = () => {
  const [poets, setPoets] = useState(data);

  const handleClick = (name) => {
    alert(`${name} has been clicked`);
    console.log(`${name} has been clicked`);
  };

  return (
    <>
      {poets.map((poet) => {
        const { id, name, genre, style, lifeStatus } = poet;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <h3>{genre}</h3>
            <h3>{style}</h3>
            <h3>{lifeStatus}</h3>
            <button onClick={() => handleClick(name)}>Click</button>
          </div>
        );
      })}
    </>
  );
};

export { EventBasics };
