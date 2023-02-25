import React, { useState, useEffect } from "react";

const Conditional = () => {
  const [amount, setAmount] = useState(0);

  const add = () => {
    setAmount(amount + 1);
  };

  const substract = () => {
    setAmount(amount - 1);
    console.log(amount);
  };

  const reset = () => {
    setAmount(amount * 0);
    console.log(amount);
  };

  useEffect(() => {
    if (amount) {
      document.title = `Basics(${amount})`;
    } else {
      document.title = "Basics(0)";
    }
  }, [amount]);

  return (
    <div>
      <h1>{amount}</h1>
      <button onClick={add}>+</button>
      <button onClick={substract}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export { Conditional };
