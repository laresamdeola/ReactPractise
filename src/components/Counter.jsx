import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const lessCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>
        <h1 style={{ color: count < 0 ? "red" : "black" }}>{count}</h1>
        <button onClick={addCount}>+</button>
        <button onClick={lessCount}>-</button>
      </div>
    </>
  );
};

export default Counter;
