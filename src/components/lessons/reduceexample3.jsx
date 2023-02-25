import React, { useState, useReducer } from "react";

const ReduceExample3 = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("");

  const defaultItems = {
    people: [],
    peopleMessage: "",
  };

  const reduce = (state, action) => {};

  const [state, dispatch] = useReducer(reduce, defaultItems);

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
      </form>
    </div>
  );
};
