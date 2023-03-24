// Create a birthday reminder application

import React, { useState } from "react";

const MultipleStateValues = () => {
  // date UseStateObject
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [message, setMessage] = useState("");

  const BirthDayForm = () => {
    const handleForm = (event) => {
      event.preventDefault();
      setMessage(
        `Hi ${name}, your birthday is on ${birthdate}; 
        \n I can't wait for that day!`
      );
      console.log(name, birthdate);
    };

    const clearForm = () => {
      setName("");
      setBirthdate("");
      setMessage("");
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
        <label htmlFor="birthdate">Birthday: </label>
        <input
          type="date"
          name="birthdate"
          value={birthdate}
          onChange={(event) => setBirthdate(event.target.value)}
        />
        <button type="submit">Add</button>
        <button onClick={() => clearForm()}>Reset</button>
      </form>
    );
  };

  return (
    <div>
      <BirthDayForm />
      <h3>{message}</h3>
    </div>
  );
};

export { MultipleStateValues };
