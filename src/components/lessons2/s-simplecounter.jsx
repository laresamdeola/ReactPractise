import React, { useState } from "react";

const SimpleCounter = () => {
  const [num, setNum] = useState(0);

  const add = () => {
    setNum(num + 1);
  };

  const minus = () => {
    setNum(num - 1);
  };

  const reset = () => {
    setNum(0);
  };

  const double = () => {
    setNum(num * 2);
  };

  return (
    <>
      <h1>{num}</h1>
      <button onClick={() => add()}>add</button>
      <button onClick={() => minus()}>minus</button>
      <button onClick={() => reset()}>reset</button>
      <button onClick={() => double()}>double</button>
    </>
  );
};

export { SimpleCounter };
