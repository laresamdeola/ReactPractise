import React, { useState, useReducer } from "react";
import ReduceModal6 from "./ReduceModal6";

const ReduceExample6 = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [country, setCountry] = useState("");
  const [style, setStyle] = useState("");

  const defaultItems = {
    poets6: [],
    isModalOpen6: false,
    modalContents6: "",
  };

  const reducer = (state, action) => {
    if (action.type === "ADD_POET_6") {
      const newPoets6 = [...state.poets6, action.payload];
      return {
        ...state,
        poets6: newPoets6,
        isModalOpen6: true,
        modalContents6: `${action.payload.name} has been added`,
      };
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, defaultItems);

  const handleForm6 = (event) => {
    event.preventDefault();
    const newPoet6 = {
      id: new Date().getTime().toString(),
      name,
      genre,
      country,
      style,
    };
    dispatch({ type: "ADD_POET_6", payload: newPoet6 });
    console.log(`${newPoet6.name} has been added`);
    setName("");
    setGenre("");
    setCountry("");
    setStyle("");
  };

  return (
    <>
      {state.isModalOpen6 && (
        <ReduceModal6 modalContents={state.modalContents6} />
      )}
      <form onSubmit={handleForm6}>
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
        <label htmlFor="style">Writing Style: </label>
        <input
          type="text"
          name="style"
          value={style}
          onChange={(event) => setStyle(event.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ReduceExample6;
