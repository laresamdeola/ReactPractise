import React, { useState, useReducer } from "react";

const ReduceExample4 = () => {
  const [formInputs, setFormInputs] = useState({
    nameInput: "hello",
    ageInput: "",
    addressInput: "",
  });

  const { nameInput, ageInput, addressInput } = formInputs;

  const defaultItems = {
    people: [],
    actionMessage: "",
  };

  const reduce = (state, action) => {
    if (action.type === "ADD_PERSON") {
      const newPeople = [...state.people, action.payload];
      return {
        ...state,
        people: newPeople,
        actionMessage: `${action.payload.name} has been added`,
      };
    }
    if (action.type === "REMOVE_PERSON") {
      const [id, name] = action.payload;
      const filteredPeople = state.people.filter((person) => person.id !== id);
      return {
        ...state,
        people: filteredPeople,
        actionMessage: `${name} has been removed`,
      };
    }
    return state;
  };

  const [state, dispatch] = useReducer(reduce, defaultItems);

  const nameInputHandler = (event) => {
    setFormInputs((prevState) => {
      return {
        ...prevState,
        nameInput: event.target.value,
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

  const addressInputHandler = (event) => {
    setFormInputs((prevState) => {
      return {
        ...prevState,
        addressInput: event.target.value,
      };
    });
  };

  const handleForm = (event) => {
    event.preventDefault();
    const newPerson = {
      id: new Date().getTime().toString(),
      name: nameInput,
      age: ageInput,
      address: addressInput,
    };
    dispatch({ type: "ADD_PERSON", payload: newPerson });
    console.log(state.actionMessage);
  };

  return (
    <div>
      <h1>Hello World</h1>
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
          type="text"
          name="age"
          value={ageInput}
          onChange={ageInputHandler}
        />
        <br />
        <label htmlFor="address">Address: </label>
        <input
          type="text"
          name="address"
          value={addressInput}
          onChange={addressInputHandler}
        />
        <br />
        <button type="submit">Add Person</button>
      </form>
      {state.people.map((person) => {
        const { id, name, age, address } = person;
        return (
          <section key={id}>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{address}</h3>
            <button
              onClick={() => {
                dispatch({ type: "REMOVE_PERSON", payload: [id, name] });
                console.log(state.actionMessage);
              }}
            >
              remove
            </button>
          </section>
        );
      })}
    </div>
  );
};

export { ReduceExample4 };
