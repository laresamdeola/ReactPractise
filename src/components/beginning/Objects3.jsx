import React, { useState } from "react";

const Objects3 = () => {
  const [biscuits, setBiscuits] = useState({
    name: "TUC",
    price: 2,
    reviews: "It's a nice biscuit"
  });

  const [changedPrice, setChangedPrice] = useState(0);

  const { name, price, reviews } = biscuits;

  const newPrice = (event) => {
    setChangedPrice(event.target.value);
  };

  const changePrice = () => {
    setBiscuits({
      ...biscuits,
      price: `$ ${changedPrice}`
    });
  };
  return (
    <main>
      <div>
        <h1>{name}</h1>
        <h3>{price}</h3>
        <input
          placeholder="Enter new price"
          type="number"
          value={changedPrice}
          onChange={newPrice}
        />
        <p>{reviews}</p>
        <button onClick={changePrice}>change price</button>
      </div>
    </main>
  );
};

export default Objects3;
