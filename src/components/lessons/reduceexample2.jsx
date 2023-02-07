import React, { useReducer, useState } from "react";

const ReduceExample2 = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("");

  const defaultItems = {
    item: [],
    itemMessage: "",
  };

  const reduce = (state, action) => {
    if (action.type === "ADD_PERSON") {
      const newItems = [...state.item, action.payload];
      return {
        ...state,
        item: newItems,
        itemMessage: "New Person added",
      };
    }
    return state;
  };

  const [state, dispatch] = useReducer(reduce, defaultItems);

  const handleForm = (event) => {
    event.preventDefault();
    const person = {
      id: new Date().getTime().toString(),
      name,
      age,
      address,
    };
    dispatch({ type: "ADD_PERSON", payload: person });
    console.log(state.itemMessage);
  };

  return (
    <form onSubmit={handleForm}>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <label htmlFor="age">Age: </label>
      <input
        type="number"
        name="age"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />
      <br />
      <label htmlFor="address">Address: </label>
      <input
        type="text"
        name="address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
      <br />
      <button type="submit">Add</button>
    </form>
  );
};

export { ReduceExample2 };
