import React from "react";

const PropsDestructuring = () => {
  const Food = (props) => {
    const { id, foodName, temperature, desert, drink } = props;
    return (
      <section key={id}>
        <h2>{foodName}</h2>
        <h2>{temperature}</h2>
        <h2>{desert}</h2>
        <h2>{drink}</h2>
      </section>
    );
  };

  return (
    <div>
      <Food
        foodName="Noodles"
        temperature="hot"
        desert="Berries"
        drink="Orange Juice"
      />

      <br />

      <Food
        foodName="Maccaroni"
        temperature="Hot"
        desert="Sliced Apples"
        drink="Cranberry Juice"
      />
    </div>
  );
};

export { PropsDestructuring };
