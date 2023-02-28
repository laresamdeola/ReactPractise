import React, { useState } from "react";

const Simple = () => {
  const [name, setName] = useState("Chikam");
  return (
    <div>
      <h1>{name}</h1>
      <button
        onClick={() => {
          name === "Chikam" ? setName("Precious") : setName("Chikam");
        }}
      >
        Change
      </button>
    </div>
  );
};

export { Simple };
