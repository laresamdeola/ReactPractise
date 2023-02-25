import React, { useState } from "react";

const FormBasics = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const handleForm = (event) => {
    event.preventDefault();
    console.log(name, age, country);
    setIsButtonPressed(true);
  };

  return (
    <div>
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
        <label htmlFor="country">Country of Origin: </label>
        <input
          type="text"
          name="country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h4>{isButtonPressed && name}</h4>
      <h4>{isButtonPressed && age}</h4>
      <h4>{isButtonPressed && country}</h4>
    </div>
  );
};

export { FormBasics };
