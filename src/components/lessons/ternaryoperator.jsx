import React, { useState } from "react";

const Ternary = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <h3 style={{ color: name === "Chikam" ? "red" : "blue" }}>{name}</h3>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </div>
  );
};

export { Ternary };
