import React from "react";

const Children = () => {
  return (
    <>
      <Child name="Okogbule Wonodi" genre="Lyrical Poetry" country="Nigeria" />
      <Child name="Ocean Vuong" genre="Expressionism" country="Japan" />
      <Child name="Wole Soyinka" genre="Satire" country="Nigeria">
        <h4>Winner of the Nobel Prize for Literature</h4>
      </Child>
    </>
  );
};

const Child = (props) => {
  const { id, name, genre, country, children } = props;

  return (
    <div key={id}>
      <h1>{name}</h1>
      <h3>{genre}</h3>
      {children}
      <h3>{country}</h3>
    </div>
  );
};

export { Children };
