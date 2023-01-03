import React, { useState, useReducer } from "react";
import Poets4Modal from "./Poets4Modal";

const FavoritePoets4 = () => {
    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [country, setCountry] = useState("Nigeria");
    const [age, setAge] = useState(0);
    
    const defaultItems4 = {
        poets4: [],
        isPoets4ModalOpen: false,
        poets4ModalContents: ""
    }
    
    const reducer4 = (state, action) => {
        if(action.type === "ADD_POET_4"){
            const newlyAddedPoet4 = [...state.poets4, action.payload];
            
            return {
                ...state,
                poets4: newlyAddedPoet4,
                isPoets4ModalOpen: true,
                poets4ModalContents: "New Poet Added"
            }
        }
        
        if(action.type === "CLOSE_MODAL_4"){
            return {
                ...state,
                isPoets4ModalOpen: false
            }
        }
        
        if(action.type === "REMOVE_POET_4"){
            const filtered_poets_4 = state.poets4.map((thepoet4) => thepoet4.id !== action.payload);
            
            return {
                ...state,
                poets4: filtered_poets_4,
                isPoets4ModalOpen: true,
                poets4ModalContents: "Poet Removed"
            }
        }
        
        return state;
    }
    
    const [state, dispatch] = useReducer(reducer4, defaultItems4);
    
    const handlePoets4 = (event) => {
        event.preventDefault();
        if(name && genre && country && age){
            const newPoets4 = {
            id: new Date().getTime().toString(),
            name,
            genre,
            country,
            age
        }
        dispatch({type: "ADD_POET_4", payload: newPoets4});
        }   
    }
    
    const closeModal4 = () => {
        dispatch({type: "CLOSE_MODAL_4"})
    }
    return (
        <>
            {state.isPoets4ModalOpen && <Poets4Modal poets4ModalContents={state.poets4ModalContents} closeModal4={closeModal4}/>}
            <form onSubmit={handlePoets4}>
                <label htmlFor="name">Name: </label>
                <br />
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={(event) => setName(event.target.value)} 
                />
                <br />
                <label htmlFor="genre">Genre: </label>
                <br />
                <input 
                    type="text" 
                    name="genre" 
                    value={genre} 
                    onChange={(event) => setGenre(event.target.value)} 
                />
                <br />
                <label htmlFor="country">Country: </label>
                <br />
                <input 
                    type="text" 
                    name="country" 
                    value={country} 
                    onChange={(event) => setCountry(event.target.value)} 
                />
                <br />
                <label htmlFor="age">Age: </label>
                <br />
                <input 
                    type="number" 
                    name="age" 
                    value={age} 
                    onChange={(event) => setAge(event.target.value)} 
                />
                <br />
                <button type="submit">Add</button>
            </form>
            {state.poets4.map((poet4) => {
                const {id, name, genre, country, age} = poet4;
                return (
                    <div key={id}>
                        <p>{name}</p>
                        <p>{genre}</p>
                        <p>{country}</p>
                        <p>{age}</p>
                        <button onClick={() => dispatch({type: "REMOVE_POET_4", payload: id})}>remove</button>
                    </div>
                )
            })}
        </>
    )
}

export default FavoritePoets4;