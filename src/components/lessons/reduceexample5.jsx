import React, { useState, useReducer } from "react";

const ReduceExample5 = () => {
  const [formInputs, setFormInputs] = useState({
    nameInput: "",
    ageInput: "",
    countryInput: "",
  });

  const [nameInput, ageInput, countryInput] = formInputs;

  const nameInputHandler = (event) => {
    setFormInputs((prevState) => {
      return {
        ...prevState,
        ageInput: event.target.value,
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

  const countryInputHandler = (event) => {
    setFormInputs((prevState) => {
      return {
        ...prevState,
        countryInput: event.target.value,
      };
    });
  };

  const handleForm = (event) => {
    event.preventDefault();
    console.log(nameInput, ageInput, countryInput);
  };

  return (
    <>
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
          type="number"
          name="age"
          value={ageInput}
          onChange={ageInputHandler}
        />
        <br />
        <label htmlFor="country">Country of Origin: </label>
        <input
          type="text"
          name="country"
          value={countryInput}
          onChange={countryInputHandler}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export { ReduceExample5 };
