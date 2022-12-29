import React, { useState } from "react";
import singersData from "../singers";

const Arrays2 = () => {
  const [singers, setSingers] = useState(singersData);

  const clearSingers = () => {
    setSingers([]);
  };

  const removeSinger = (id) => {
    let newSingers = singers.filter((singer) => singer.id !== id);
    setSingers(newSingers);
  };

  return (
    <>
      {singers.map((singer) => {
        const { id, name, image, genre } = singer;
        return (
          <div key={id}>
            <img src={image} alt={name} height="100px" width="100px" />
            <h3>{name}</h3>
            <p>{genre}</p>
            <button onClick={() => removeSinger(id)}>remove</button>
          </div>
        );
      })}
      <button onClick={clearSingers}>clear</button>
    </>
  );
};

export default Arrays2;
