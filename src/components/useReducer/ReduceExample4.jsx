import React, { useState, useReducer } from "react";

const ReduceExample4 = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [country, setCountry] = useState("");
  const [writing, setWriting] = useState("");
  const [alive, setAlive] = useState(false);

  const defaultPoets = {
    poets: [],
    isModalOpen: false,
    modalContents: "",
  };

  const reducer = (state, action) => {
    if (action.type === "ADD_POET_4") {
      const newPoets = [...state.poets, action.payload];
      return {
        ...state,
        poets: newPoets,
        isModalOpen: true,
        modalContents: "New Poet Added",
      };
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, defaultPoets);

  const handleForm = (event) => {
    event.preventDefault();
    const newPoet = {
      id: new Date().getTime().toString(),
      name,
      genre,
      country,
      writing,
      alive,
    };
    dispatch({ type: "ADD_POET_4", payload: newPoet });
    console.log("Form submitted");
    setName("");
    setGenre("");
    setCountry("");
    setWriting("");
    setAlive("");
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
        <label htmlFor="alive">Alive: </label>
        <input
          type="text"
          name="alive"
          value={alive}
          onChange={(event) => setAlive(event.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {state.poets.map((poet) => {
        const { id, name, genre, country, writing } = poet;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <h2>{genre}</h2>
            <h2>{country}</h2>
            <h2>{writing}</h2>
          </div>
        );
      })}
    </>
  );
};

export default ReduceExample4;
