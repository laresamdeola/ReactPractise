import React, { useState, useEffect } from "react";

const EffectBasics2 = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    document.title = `Basics(${count})`;
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => add()}>+</button>
    </>
  );
};

export { EffectBasics2 };
