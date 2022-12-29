import React, { useState } from "react";
import perfumes from "../data/perfumes";

const Arrays4 = () => {
  const [perfume, setPerfume] = useState(perfumes);

  const clearPerfume = () => {
    setPerfume([]);
  };

  const removePerfume = (id) => {
    let newPerfumes = perfume.filter((perf) => perf.id !== id);
    setPerfume(newPerfumes);
  };
  return (
    <>
      {perfume.map((perf) => {
        const { id, name, type, longevity, accords } = perf;

        return (
          <div key={id}>
            <h2>{name}</h2>
            <h3>{type}</h3>
            <h4>{longevity}</h4>
            <p>{accords}</p>
            <button onClick={() => removePerfume(id)}>remove</button>
          </div>
        );
      })}
      <br />
      <button onClick={clearPerfume}>clear</button>
    </>
  );
};

export default Arrays4;
