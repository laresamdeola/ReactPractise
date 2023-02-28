import React, { useRef } from "react";

// does not trigger a re render
// used to target dom nodes
// preserves values

const RefExample1 = () => {
  const nameRef = useRef("");
  const ageRef = useRef(0);

  const handleForm = (event) => {
    event.preventDefault();
    console.log(nameRef.current.value, ageRef.current.value);
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <label htmlFor="name">Name: </label>
        <input type="text" ref={nameRef} name="name" />
        <br />
        <label htmlFor="age">Age: </label>
        <input type="number" ref={ageRef} name="name" />
        <br />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export { RefExample1 };
