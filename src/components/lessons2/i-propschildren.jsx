import React from "react";

const PropsChildren = () => {
  const Food = (props) => {
    const { id, foodName, temperature, desert, drink, children } = props;
    return (
      <section key={id}>
        <h2>{foodName}</h2>
        <h2>{temperature}</h2>
        <h2>{desert}</h2>
        <h2>{drink}</h2>
        {children}
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
      >
        <h3>Hello World!</h3>
      </Food>
    </div>
  );
};

export { PropsChildren };
