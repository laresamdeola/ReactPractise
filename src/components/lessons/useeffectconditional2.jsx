import React, { useState, useEffect } from "react";

const Conditional2 = () => {
  const [num, setNum] = useState(0);

  const add = () => {
    setNum(num + 1);
  };

  const substract = () => {
    setNum(num - 1);
  };

  const reset = () => {
    setNum(0);
  };

  const double = () => {
    setNum(num * 2);
  };

  useEffect(() => {
    num ? (document.title = `Basics(${num})`) : (document.title = `Basics(0)`);
  }, [num]);

  return (
    <div>
      <h2>{num}</h2>
      <button onClick={add}>+</button>
      <button onClick={substract}>-</button>
      <button onClick={double}>double</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export { Conditional2 };
