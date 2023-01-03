import React, { useState } from "react";
import country from "../country";

const Arrays3 = () => {
  const [countries, setCountries] = useState(country);

  const clearCountries = () => {
    setCountries([]);
  };

  const removeCountry = (id) => {
    let newCountries = countries.filter((country) => country.id !== id);
    setCountries(newCountries);
  };

  return (
    <>
      {countries.map((nation) => {
        const { id, name, population, capital, majorLanguage } = nation;

        return (
          <div key={id}>
            <h2>{name}</h2>
            <p>Has a total population of {population} people</p>
            <p>It's capital is {capital}</p>
            <p>And it's major language is {majorLanguage}</p>
            <button onClick={() => removeCountry(id)}>remove country</button>
          </div>
        );
      })}
      <br />
      <button onClick={clearCountries}>clear countries</button>
    </>
  );
};

export default Arrays3;
