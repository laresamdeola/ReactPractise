import React, { useState } from "react";

const Objects1 = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "Random Message"
  });

  const changeMessage = () => {
    setPerson({ ...person, message: "Hello World!" });
  };

  return (
    <>
      <h1>{person.name}</h1>
      <h3>{person.age}</h3>
      <h2>{person.message}</h2>
      <button onClick={changeMessage}>change message</button>
    </>
  );
};

export default Objects1;
