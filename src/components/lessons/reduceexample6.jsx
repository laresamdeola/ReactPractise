import React, { useState, useReducer } from "react";

const ReduceExample6 = () => {
  const [formInputs, setFormInputs] = useState({
    nameInput: "",
    ageInput: "",
    addressInput: "",
  });

  const { nameInput, ageInput, addressInput } = formInputs;

  return (
    <>
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
          type="number"
          name="age"
          value={ageInput}
          onChange={ageInputHandler}
        />
        <br />
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          value={nameInput}
          onChange={nameInputHandler}
        />
        <br />
      </form>
    </>
  );
};
