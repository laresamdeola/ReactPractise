import React, { useState, useEffect } from "react";

const EffectBasics2 = () => {
  const display = () => {
    alert(age);
  };

  useEffect(() => {
    display();
  }, []);

  return (
    <>
      <h1>{age}</h1>
      <button onClick={display}>display</button>
    </>
  );
};

export { EffectBasics2 };
