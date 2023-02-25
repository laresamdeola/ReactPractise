import React, { useState, useReducer } from "react";
import Poets3Modal from "./Poets3Modal";

const FavoritePoets3 = () => {
    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [country, setCountry] = useState("");
    const [age, setAge] = useState(0);
    
    const defaultItems3 = {
        poets3: [],
        isPoet3ModalOpen: false,
        poet3ModalContents: "",
        hasAlert: false
    }
    
    const reducer3 = (state, action) => {
        if(action.type === "ADD_POET"){
            const newPoets3 = [...state.poets3, action.payload];
            return {
                ...state,
                poets3: newPoets3,
                isPoet3ModalOpen: true,
                poet3ModalContents: "Added New Poet",
                hasAlert: false
            }
        }
        
        if(action.type === "CLOSE_POETS3_MODAL"){
            return {
                ...state,
                isPoet3ModalOpen: false
            }
        }
        
        if(action.type === "REMOVE_POET_3"){
            const filtered_poet_3 = state.poets3.filter((poet3) => poet3.id !== action.payload);
            return {
                ...state,
                poets3: filtered_poet_3,
                poet3ModalContents: `Removed ${state.name}`
            }
        }
        
        return state;
    }
    
    const [state, dispatch] = useReducer(reducer3, defaultItems3);
    
    const resetStateValues = () => {
        setName("");
        setGenre("");
        setCountry("");
        setAge(0);
    }
    
    const handlePoets3 = (event) => {
        event.preventDefault();
        if(name && genre && country && age){
            const newPoet3 = {
            id: new Date().getTime().toString(),
            name, 
            genre, 
            country, 
            age
            }
        dispatch({type: "ADD_POET", payload: newPoet3});
        resetStateValues();
        console.log("New poet added");    
        }
    }
    
    const closePoets3Modal = () => {
        dispatch({type: "CLOSE_POETS3_MODAL"});
    }
    
    return (
        <>
            {state.isPoet3ModalOpen && <Poets3Modal poet3ModalContents={state.poet3ModalContents} closePoets3Modal={closePoets3Modal}/>}
            <form onSubmit={handlePoets3}>
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
            {state.poets3.map((poet3) => {
                const {id, name, genre, country, age} = poet3;
                
                return (
                    <div key={id}>
                        <h3>{name}</h3>
                        <h3>{genre}</h3>
                        <h3>{country}</h3>
                        <h3>{age}</h3>
                        <button onClick={() => dispatch({type: "REMOVE_POET_3", payload: id})}>remove</button>
                    </div>
                )
            })}
        </>
    )
}

export default FavoritePoets3;