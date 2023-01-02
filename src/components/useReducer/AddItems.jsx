import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import dataReducer as data from "./dataReducer";

const AddItems = () => {
    const [name, setName] = useState("");
    const reduce = (state, action) => {
        
    }
    
    const defaultItems = {
        people: [],
        isModalOpen: false,
        modalContent: "Hello World"
    }
    
    const [state, dispatch] = useReducer(reduce, defaultItems);
    
    const handleForm = (event) => {
        event.preventDefault();
    }
    
    return (
        <>
            {state.isModalOpen && <Modal modalContent={state.modalContent}/>}
            <form onSubmit={handleForm}>
                <input 
                    type="text"
                    value={name}
                    onChange={(event) => {setName(event.target.value)}} 
                />
                <button type="submit">Add</button>
            </form>
        </>
    );
}

export default AddItems;