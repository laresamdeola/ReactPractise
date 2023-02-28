import React, { useState } from "react";
import data from "../data";

const Arrays = () => {
  const [people, setPeople] = useState(data);

  const clearItems = () => {
    setPeople([]);
  };

  const removeItems = (id) => {
    let filteredPeople = people.filter((person) => person.id !== id);
    setPeople(filteredPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name, countryOfOrigin } = person;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <h3
              style={{
                color:
                  (countryOfOrigin === "Nigeria" && "green") ||
                  (countryOfOrigin === "Mexico" && "orange") ||
                  (countryOfOrigin === "USA" && "red")
              }}
            >
              {countryOfOrigin}
            </h3>
            <button onClick={() => removeItems(id)}>remove</button>
          </div>
        );
      })}
      <br />
      <br />
      <button onClick={clearItems}>Clear</button>
    </>
  );
};

export default Arrays;
