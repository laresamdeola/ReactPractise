import React, { useState, useReducer } from "react";
import Modal from "./Modal.jsx";
import dataReducer from "./dataReducer";
import reducer from "./reducer.js"

const AddItems2 = () => {

  const defaultItems = {
    people: [],
    isShowModal: false,
    modalContent: "Hello World"
  };

  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultItems);

  const handleForm = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    
    if(name){
        const newItem = {
            id: new Date().getTime().toString(), 
            name
        }
        
        dispatch({type: "ADD_ITEM", payload: newItem});
    }
  };

  const closeModal = () => {
      dispatch({type: "CLOSE_MODAL"});
  }

  return (
    <>
      {state.isShowModal && <Modal modalContent={state.modalContent} closeModal={closeModal}/>}
      <form onSubmit={handleForm}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {
          state.people.map((person) => {
              return (
                  <div key={person.id}>
                      <p>{person.name}</p>
                      <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: person.id})}>remove</button>
                  </div>
              )
          })
      }
    </>
  );
};

export default AddItems2;
