import React, { useState } from "react";

const Affection = () => {
  const [affection, setAffection] = useState("");

  return (
    <>
      <div>
        <h1>I love {affection ? "Chikam" : "..."}</h1>
        <button onClick={() => setAffection("Chikam")}>guess</button>
      </div>
    </>
  );
};

export { Affection };
