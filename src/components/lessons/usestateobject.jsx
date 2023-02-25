import React, { useState } from "react";

const ObjectExample = () => {
  const [person, setPerson] = useState({
    id: new Date().getTime().toString(),
    name: "Hello World",
    age: 0,
  });

  const handleText = () => {
    setPerson({
      ...person,
      name: "Chikam",
      age: 25,
    });
  };

  return (
    <>
      <h1>{person.name}</h1>
      <p>{person.age}</p>
      <button onClick={handleText}>change text</button>
    </>
  );
};

export { ObjectExample };
