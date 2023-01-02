import React, { useState, useReducer } from "react";
import Poets2Modal from "./Poets2Modal";

const FavoritePoets2 = () => {
    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [country, setCountry] = useState("");
    const [age, setAge] = useState(0);
    
    const defaultPoets2 = {
        poets2: [],
        isPoets2ModalOpen: false,
        poets2ModalContents: ""
    }
    
    const reducer = (state, action) => {
        if(action.type === "ADD_POETS_2"){
            const newPoets2 = [...state.poets2, action.payload];
            
            return {
                ...state,
                poets2: newPoets2,
                isPoets2ModalOpen: true,
                poets2ModalContents: "Added new poet"
            }
        }
        
        if(action.type === "CLOSE_MODAL_2"){
            return {
                ...state,
                isPoets2ModalOpen: false
            }
        }
        
        return state;
    }
    
    const [state, dispatch] = useReducer(reducer, defaultPoets2);
    
    const handlePoets2 = (event) => {
        event.preventDefault();
        if(name && genre && country && age){
            const newPoet2 = {
                id: new Date().getTime().toString(),
                name,
                genre,
                country,
                age
            }
            
            dispatch({type: "ADD_POETS_2", payload: newPoet2});
            //console.log("Added new poet");
            setName("");
            setGenre("");
            setCountry("");
            setAge(0);
        }
    }
    
    const closePoet2Modal = () => {
        dispatch({type: "CLOSE_MODAL_2"});
    }
    
    return (
        <>
            {state.isPoets2ModalOpen && <Poets2Modal poets2ModalContents={state.poets2ModalContents} closePoet2Modal={closePoet2Modal}/>}
            <form onSubmit={handlePoets2}>
                <label htmlFor="name">Name: </label><br />
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={(event) => {setName(event.target.value)}}
                />
                <br />
                <label htmlFor="genre">Genre: </label><br />
                <input 
                    type="text" 
                    name="genre"
                    value={genre} 
                    onChange={(event) => {setGenre(event.target.value)}}
                />
                <br /><label htmlFor="country">Country: </label><br />
                <input 
                    type="text" 
                    name="country" 
                    value={country} 
                    onChange={(event) => {setCountry(event.target.value)}}
                />
                <br /><label htmlFor="age">Age: </label><br />
                <input 
                    type="number" 
                    name="age"
                    value={age} 
                    onChange={(event) => {setAge(event.target.value)}}
                />
                <br />
                <br />
                <button type="submit">Add</button>
            </form>
            {state.poets2.map((poet2) => {
                const {id, name, genre, country, age} = poet2;
                return (
                    <div key={id}>
                        <h3>{name}</h3>
                        <h3>{genre}</h3>
                        <h3>{country}</h3>
                        <h3>{age}</h3>
                    </div>
                )
            })}
        </>
    )
    
}

export default FavoritePoets2;