import React, { useState } from "react";

const MultipleState = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [inLove, setInLove] = useState("");

  const handleForm = (event) => {
    event.preventDefault();
    console.log(`${name}, ${age}, ${inLove}`);
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <br />
        <label htmlFor="age">Age: </label>
        <input
          type="text"
          name="age"
          value={age}
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <br />
        <label htmlFor="inLove">Do you love {name}: </label>
        <input
          type="text"
          name="inLove"
          value={inLove}
          onChange={(event) => {
            setInLove(event.target.value);
          }}
        />
        <br />
        <button type="submit">Express</button>
      </form>
      <section>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{inLove}</h1>
      </section>
    </div>
  );
};

export { MultipleState };
