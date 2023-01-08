import React, { useState, useReducer } from "react";

const ReduceExample3 = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [country, setCountry] = useState("");
  const [writing, setWriting] = useState("");
  const [isAlive, setIsAlive] = useState(false);

  const defaultAttributes = {
    poets: [],
    isModalOpen: false,
    modalContents: "",
  };

  const reduce = (state, action) => {
    if (action.type === "ADD_POET") {
      const newPoets = [...state.poets, action.payload];
      return {
        ...state,
        poets: newPoets,
        isModalOpen: true,
        modalContents: `${name} has been added`,
      };
    }

    return state;
  };

  const [state, dispatch] = useReducer(reduce, defaultAttributes);

  const handleForm = (event) => {
    event.preventDefault();
    const newPoet = {
      id: new Date().getTime().toString(),
      name,
      genre,
      country,
      writing,
      isAlive,
    };
    dispatch({ type: "ADD_POET", payload: newPoet });
    setName("");
    setGenre("");
    setCountry("");
    setWriting("");
    setIsAlive("");
    console.log(`${name} has been added`);
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
        <label htmlFor="writing">Writing Style: </label>
        <input
          type="text"
          name="writing"
          value={writing}
          onChange={(event) => setWriting(event.target.value)}
        />
        <br />
        <label htmlFor="isAlive">Status: </label>
        <input
          type="text"
          name="isAlive"
          value={isAlive}
          onChange={(event) => setIsAlive(event.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ReduceExample3;
