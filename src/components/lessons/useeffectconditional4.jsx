import React, { useState, useEffect } from "react";

const Conditional4 = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    if (number) {
      document.title = `Basics(${number})`;
    } else {
      document.title = `Basics(0)`;
    }
  }, [number]);

  return (
    <div>
      <h2>{number}</h2>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
      <button onClick={() => setNumber(number * number)}>squared</button>
      <button onClick={() => setNumber(0)}>reset</button>
    </div>
  );
};

export { Conditional4 };
