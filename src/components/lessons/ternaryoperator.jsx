import React, { useState } from "react";

const Ternary = () => {
  const [name, setName] = useState("Chikam");
  const [affection, setAffection] = useState("");

  const handleAffection = () => {
    setAffection("I love you");
    affection === "I love you"
      ? alert(`${name} you're so lucky`)
      : alert(`Hmm...`);
  };

  return (
    <div>
      <h1>{name}</h1>
      <h3>{affection}</h3>
      <button type="button" onClick={handleAffection}>
        Show Affection
      </button>
    </div>
  );
};

export { Ternary };
