import React, { useEffect, useState } from "react";

const EffectBasics = () => {
  const name = "Chikam";

  const showName = () => {
    alert(`i love you ${name}`);
  };

  useEffect(() => {
    showName();
  }, [showName]);

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={showName}>Alert</button>
    </div>
  );
};

export { EffectBasics };
