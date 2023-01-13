import React from "react";

const FirstName = ({ firstName }) => {
  return <h1>{firstName}</h1>;
};

const SurName = ({ surName }) => {
  return <h2>{surName}</h2>;
};

export { FirstName, SurName };
