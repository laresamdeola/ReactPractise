import React, { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleForm = (event) => {
    event.preventDefault();
    console.log(name, email);
    setName("");
    setEmail("");
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <button type="submit">Add Person</button>
      </form>
    </>
  );
};

export { ControlledInputs };
