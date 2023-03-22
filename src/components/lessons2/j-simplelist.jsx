// Continue from here
// use map here - create a list then loop through using map

import React from "react";

const SimpleList = () => {
  const data = [
    {
      id: 1,
      name: "Lare",
      age: 10,
    },
    {
      id: 2,
      name: "Sholape",
      age: 74,
    },
    {
      id: 3,
      name: " Damilola",
      age: 43,
    },
  ];

  return (
    <div>
      {data.map((datum) => {
        const { id, name, age } = datum;
        return (
          <section key={id}>
            <h3>{name}</h3>
            <h4>{age}</h4>
          </section>
        );
      })}
    </div>
  );
};

export { SimpleList };
