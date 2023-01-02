import React, { useState, useReducer } from "react";
import PoetModal from "./PoetModal";
//import poets as data from "../../data/poets";

const FavoritePoets = () => {
    const defaultPoet = {
        poets: [],
        isPoetModalOpen: false,
        poetModalContent: "New Poet Added"
    }
    
    const reducer = (state, action) => {
        if(action.type === "ADD_POET"){
            const newPoets = [...state.poets, action.payload];
            return {
                ...state,
                poets: newPoets,
                isPoetModalOpen: true,
                poetModalContent: "New Poet Added"
            }
        }
        
        if(action.type === "CLOSE_MODAL"){
            return {
                ...state,
                isPoetModalOpen: false
            }
        }
        
        if(action.type === "REMOVE_POET"){
            const filteredPoets = state.poets.filter((poet) => poet.id !== action.payload);
            
            return {
                ...state,
                poets: filteredPoets,
                isPoetModalOpen: true,
                poetModalContent: "Poet Deleted"
            }
        }
        
        return state;
    }
    
    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [country, setCountry] = useState("");
    const [state, dispatch] = useReducer(reducer, defaultPoet);
    
    const handlePoets = (event) => {
        event.preventDefault();
        if(name && genre && country){
            const newPoet = {
                id: new Date().getTime().toString(),
                name,
                genre,
                country
            };
            
            dispatch({type: "ADD_POET", payload: newPoet });
            setName("");
            setGenre("");
            setCountry("");
            console.log("Poet has been added");
        }
    }
    
    const closePoetModal = () => {
        dispatch({type: "CLOSE_MODAL"});
    }
    
    return (
        <>
            {state.isPoetModalOpen && <PoetModal poetModalContent={state.poetModalContent} closePoetModal={closePoetModal}/>}
            <form onSubmit={handlePoets}>
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
            {state.poets.map((poet) => {
                const {id, name, genre, country} = poet;
                
                return (
                    <div key={id}>
                        <h1>{name}</h1>
                        <h3>{genre}</h3>
                        <p>{country}</p>
                        <button onClick={() => dispatch({type: "REMOVE_POET", payload: id})}>remove</button>
                    </div>
                )
            })}
        </>
    )
}

export default FavoritePoets;