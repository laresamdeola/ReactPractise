import React, { useState, useEffect } from "react";
//import { bearerToken } from "./token";
import { pets as petData } from "./petfinder";

// petshelter
// a web application that displays various pets needing shelter or a new home

const UseEffectBasics = () => {
  const [pets, setPets] = useState(petData);
  console.log(pets.length);

  useEffect(() => {
    document.title = `petshelter - ${pets.length}`;
  }, [pets]);

  return (
    <div>
      {pets.map((pet) => {
        const { id, name, description, photos, breeds, type, contact } = pet;
        const { primary } = breeds;
        const { address } = contact;
        const { city, state, postcode, country } = address;
        return (
          <section key={id}>
            <h1>{name}</h1>
            <p>{description}</p>
            <h3>{type}</h3>
            <h3>{primary}</h3>
            <img src={photos[0].medium} alt={name + " " + id} />
            <p>Address: {`${city} ${state} ${postcode} ${country}`}</p>
            <br />
            <br />
          </section>
        );
      })}
    </div>
  );
};

export { UseEffectBasics };
