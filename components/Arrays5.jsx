import React, { useState } from "react";
import instruments from "../data/instruments";

const Arrays5 = () => {
  const [theInstruments, setTheInstruments] = useState(instruments);

  const clearInstruments = () => {
    setTheInstruments([]);
  };

  const removeInstrument = (id) => {
    let newInstruments = theInstruments.filter(
      (instrument) => instrument.id !== id
    );
    setTheInstruments(newInstruments);
  };

  return (
    <>
      {theInstruments.map((instrument) => {
        const { id, name, sharps, canPlay, family } = instrument;

        return (
          <div key={id}>
            <h1>{name}</h1>
            <h3>{sharps}</h3>
            <h3>{canPlay}</h3>
            <p>{family}</p>
            <button onClick={() => removeInstrument(id)}>
              remove instrument
            </button>
          </div>
        );
      })}
      <br />
      <button onClick={clearInstruments}>clear instruments</button>
    </>
  );
};

export default Arrays5;
