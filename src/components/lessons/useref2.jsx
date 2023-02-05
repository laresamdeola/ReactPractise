import React, { useRef, useState } from "react";

const RefExample2 = () => {
  const nameRef = useRef("");
  const ageRef = useRef(0);
  const addressRef = useRef("");

  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [address, setAddress] = useState("");

  const handleRefForm = (event) => {
    event.preventDefault();
    console.log(
      nameRef.current.value,
      ageRef.current.value,
      addressRef.current.value
    );
    setName(nameRef.current.value);
    setAge(ageRef.current.value);
    setAddress(addressRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleRefForm}>
        <label htmlFor="name">Name: </label>
        <input type="text" ref={nameRef} name="name" />
        <br />
        <label htmlFor="age">Age: </label>
        <input type="number" ref={ageRef} name="age" />
        <br />
        <label htmlFor="address">Address: </label>
        <input type="text" ref={addressRef} name="address" />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{address}</h3>
    </div>
  );
};

export { RefExample2 };
