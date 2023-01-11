import React, { useState, useReducer } from "react";
import ReduceModal5 from "./ReduceModal5";

const ReduceExample5 = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [country, setCountry] = useState("");
  const [writing, setWriting] = useState("");
  const [alive, setAlive] = useState("");

  const defaultPoets5 = {
    poets: [],
    isModalOpen5: false,
    modalContents5: "",
  };

  const reducer = (state, action) => {
    if (action.type === "ADD_POET_5") {
      const newPoets5 = [...state.poets, action.payload];
      return {
        ...state,
        poets: newPoets5,
        isModalOpen5: true,
        modalContents5: "New Poet added",
      };
    }
    if (action.type === "CLOSE_MODAL") {
      return {
        ...state,
        isModalOpen5: false,
      };
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, defaultPoets5);

  const handleForm5 = (event) => {
    event.preventDefault();
    const newPoet5 = {
      id: new Date().getTime().toString(),
      name,
      genre,
      country,
      writing,
      alive,
    };
    dispatch({ type: "ADD_POET_5", payload: newPoet5 });
    setName("");
    setGenre("");
    setCountry("");
    setWriting("");
    setAlive("");
    console.log(`${newPoet5.name} has been added`);
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.isModalOpen5 && (
        <ReduceModal5
          modalContents={state.modalContents5}
          closeModal={closeModal}
        />
      )}
      <form onSubmit={handleForm5}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <label htmlFor="genre">Genre: </label>
        <input
          type="text"
          name="genre"
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
        />
        <br />
        <label htmlFor="country">Country: </label>
        <input
          type="text"
          name="country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        />
        <br />
        <label htmlFor="writing">Writing Style: </label>
        <input
          type="text"
          name="writing"
          value={writing}
          onChange={(event) => setWriting(event.target.value)}
        />
        <br />
        <label htmlFor="alive">Life Status: </label>
        <input
          type="text"
          name="alive"
          value={alive}
          onChange={(event) => setAlive(event.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ReduceExample5;
