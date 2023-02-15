import React, { useState } from "react";

const MultipleInputs = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");

  const handleForm = (event) => {
    event.preventDefault();
    console.log(name, age, gender, country);
    setName("");
    setAge("");
    setGender("");
    setCountry("");
  };

  return (
    <>
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
        <label htmlFor="gender">Gender: </label>
        <input
          type="text"
          name="gender"
          value={gender}
          onChange={(event) => setGender(event.target.value)}
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
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export { MultipleInputs };
