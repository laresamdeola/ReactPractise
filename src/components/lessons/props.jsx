import React from "react";

const Authors = () => {
  return (
    <Poet
      name="Sedar Senghor"
      genre="Negritude"
      style="Poetic"
      lifeStatus="Dead"
    />
  );
};

const Poet = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.genre}</h2>
      <h2>{props.style}</h2>
      <h2>{props.lifeStatus}</h2>
    </div>
  );
};

export { Authors };
