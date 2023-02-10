import React, { useState } from "react";

const ReduceExample4 = () => {
  const [formInputs, setFormInputs] = useState({
    nameInput: "hello",
    ageInput: "",
    addressInput: "",
  });

  const { nameInput, ageInput, addressInput } = formInputs;

  console.log(nameInput);

  const defaultItems = {
    people: [],
    actionMessage: "",
  };

  const reduce = (state, action) => {};

  const [state, dispatch] = useReducer(reduce, defaultItems);

  const nameInputHandler = (event) => {
    setFormInputs((prevState) => {
      return {
        ...prevState,
        nameInput: event.target.value,
      };
    });
  };

  const ageInputHandler = (event) => {
    setFormInputs((prevState) => {
      return {
        ...prevState,
        ageInput: event.target.value,
      };
    });
  };

  const addressInputHandler = (event) => {
    setFormInputs((prevState) => {
      return {
        ...prevState,
        addressInput: event.target.value,
      };
    });
  };

  const handleForm = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Hello World</h1>
      <form onSubmit={handleForm}>
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
        <button type="submit">Add Person</button>
      </form>
    </div>
  );
};

export { ReduceExample4 };
