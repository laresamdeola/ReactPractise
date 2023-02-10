import React, { useState, useReducer } from "react";

const ReduceExample4 = () => {
  const [formInputs, setFormInputs] = useState({
    nameInput: "",
    ageInput: "",
    addressInput: "",
  });

  const { nameInput, ageInput, addressInput } = formInputs;

  const defaultItems = {
    people: [],
    actionMessage: "",
  };

  const reduce = (state, action) => {};

  const [state, dispatch] = useReducer(reduce, defaultItems);

  const nameInputHandler = (prevState) => {
    setFormInputs((event) => {
      return {
        ...prevState,
        nameInput: event.target.value,
      };
    });
  };

  const ageInputHandler = (prevState, event) => {
    return {
      ...prevState,
      ageInput: event.target.value,
    };
  };

  const addressInputHandler = (prevState, event) => {
    return {
      ...prevState,
      addressInput: event.target.value,
    };
  };

  return (
    <div>
      <h1>Hello World</h1>
      <form>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          value={nameInput}
          onChange={nameInputHandler}
        />
        <br />
        <label htmlFor="age">Age: </label>
        <input
          type="text"
          name="age"
          value={ageInput}
          onChange={ageInputHandler}
        />
        <br />
        <label htmlFor="address">Address: </label>
        <input
          type="text"
          name="address"
          value={addressInput}
          onChange={addressInputHandler}
        />
        <br />
      </form>
    </div>
  );
};

export { ReduceExample4 };
