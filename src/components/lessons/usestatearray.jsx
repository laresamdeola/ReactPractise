import React, { useState } from "react";
import { poets } from "./data";

const ArrayExample = () => {
  const [data, setData] = useState(poets);

  return (
    <>
      <div>
        {data.map((datum) => {
          const { id, name, genre, style, lifeStatus } = datum;
          return (
            <div key={id}>
              <h1>{name}</h1>
              <h3>{genre}</h3>
              <h3>{style}</h3>
              <h3>{lifeStatus}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export { ArrayExample };
