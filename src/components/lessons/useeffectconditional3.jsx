import React, { useState, useEffect } from "react";

const Conditional3 = () => {
  const [amount, setAmount] = useState(0);

  const addition = () => {
    setAmount(amount + 1);
  };

  useEffect(() => {
    amount
      ? (document.title = `Basics(${amount})`)
      : (document.title = `Basics(0)`);
  }, [amount]);

  return (
    <div>
      <h2>{amount}</h2>
      <button onClick={addition}>+</button>
    </div>
  );
};

export { Conditional3 };
