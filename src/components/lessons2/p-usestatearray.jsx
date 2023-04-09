import React, { useState } from "react";

const UseStateArray = () => {
  const [steps, setSteps] = useState(0);

  const addSteps = () => {
    setSteps(steps + 1);
  };

  const removeSteps = () => {
    if (steps > 0) {
      setSteps(steps - 1);
    } else {
      setSteps(0);
    }
  };

  const resetSteps = () => {
    setSteps(0);
  };

  return (
    <div>
      <h1>{steps}</h1>
      <br />
      <button onClick={() => addSteps()}>+</button>
      <button onClick={() => removeSteps()}>-</button>
      <button onClick={() => resetSteps()}>reset</button>
    </div>
  );
};

export { UseStateArray };
