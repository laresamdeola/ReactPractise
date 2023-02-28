import React from "react";

const Poets2 = () => {
  return <Poet2 id="1" name="Okogbule Wonodi" genre="Lyrical Poetry" />;
};

const Poet2 = (props) => {
  const { id, name, genre } = props;
  return (
    <div key={id}>
      <h1>{name}</h1>
      <h3>{genre}</h3>
    </div>
  );
};

export { Poets2 };
