import React, { useState, useReducer } from "react";
import ReduceModal2 from "./ReduceModal2";

const ReduceExample2 = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [country, setCountry] = useState("");
  const [writing, setWriting] = useState("");

  const defaultItems = {
    poets2: [],
    isModalOpen2: false,
    modalContents2: "",
  };

  const reduce2 = (state, action) => {
    if (action.type === "ADD_POET_2") {
      const newPoets2 = [...state.poets2, action.payload];
      return {
        ...state,
        poets2: newPoets2,
        isModalOpen2: true,
        modalContents2: "New Poet Added",
      };
    }
    return state;
  };

  const [state, dispatch] = useReducer(reduce2, defaultItems);

  const handleForm2 = (event) => {
    event.preventDefault();
    if (name && genre && country) {
      const newPoet2 = {
        id: new Date().getTime().toString(),
        name,
        genre,
        country,
      };
      dispatch({ type: "ADD_POET_2", payload: newPoet2 });
      console.log("new poet added");
      setName("");
      setGenre("");
      setCountry("");
    }
  };

  return (
    <>
      {state.isModalOpen2 && (
        <ReduceModal2 modalContents2={state.modalContents2} />
      )}
      <form onSubmit={handleForm2}>
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
        <label htmlFor="name">Country: </label>
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
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ReduceExample2;
