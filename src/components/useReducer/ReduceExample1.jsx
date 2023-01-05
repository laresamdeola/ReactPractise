import React, { useState, useReducer } from "react";

const ReduceExample1 = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [country, setCountry] = useState("");

  const defaultItems = {
    poets: [],
    isModalOpen: false,
    modalContents: "",
  };

  const reduce = (state, action) => {
    if (action.type === "ADD_POET") {
      const newPoet = [...state.poets, action.payload];
      return {
        ...state,
        poets: newPoet,
        isModalOpen: true,
        modalContents: "Added New Poet",
      };
    }

    return state;
  };

  const [state, dispatch] = useReducer(reduce, defaultItems);

  const handleForm = (event) => {
    event.preventDefault();
    const newPoets = {
      id: new Date().getTime().toString(),
      name,
      genre,
      country,
    };
    dispatch({ type: "ADD_POET", payload: newPoets });
    console.log(state.modalContents);
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
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ReduceExample1;
