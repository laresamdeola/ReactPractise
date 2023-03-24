import React, { useState } from "react";

const UseStateObject = () => {
  const [form, setForm] = useState({
    id: new Date().getTime().toString(),
    firstName: "",
    age: "",
  });

  const handleForm = (event) => {
    event.preventDefault();
    setForm({ ...form });
    console.log(form);
  };

  return (
    <>
      <h1>Forms</h1>
      <br />
      <form onSubmit={handleForm}>
        <label htmlFor="name"> Name: </label>
        <input
          name="name"
          value={form.firstName}
          onChange={(event) => {
            setForm({ ...form, firstName: event.target.value });
          }}
        />
        <label htmlFor="age"> Age: </label>
        <input
          name="age"
          value={form.age}
          onChange={(event) => setForm({ ...form, age: event.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export { UseStateObject };
