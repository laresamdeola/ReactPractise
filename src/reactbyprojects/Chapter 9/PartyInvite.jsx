// 1. A simple form with the functionality of adding, removing and clearing
// a list of invited gusets to a party
// 2. Use the useReducer() hook here
// 3. It's good when we want several state values to change at the same thing
// or for managing complex state.

import React, { useState, useReducer } from "react";

const PartyInvite = () => {
    const [name, setName] = useState("");
    const [nationality, setNationality] = useState("");
    
    const defaultItems = {
        guests: [],
        isModalOpen: false,
        message: ""
    }
    
    const reducer = (state, action) => {
        if(action.type === "ADD_GUEST"){
            const newGuests = [...state.guests, action.payload];
            return {
                ...state,
                guests: newGuests,
                isModalOpen: true,
                message: "New Guest Added"
            }
        }
        
        return state;
    }
    
    const [state, dispatch] = useReducer(reducer, defaultItems);
    
    const handleGuests = (event) => {
        event.preventDefault();
        const newGuest = {
            id: new Date().getTime().toString(),
            name,
            nationality
        }
        dispatch({type: "ADD_GUEST", payload: newGuest});
    }
    
    return (
        <div>
            <form onSubmit={handleGuests}>
                <label htmlFor="name">Invited Guest Name: </label>
                <br />
                <input 
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    required
                    onChange={(event) => setName(event.target.value)}
                />
                <br />
                <label htmlFor="nationality">Invited Guest Nationality: </label>
                <br />
                <input 
                    type="text"
                    id="nationality"
                    name="nationality"
                    value={nationality}
                    required
                    onChange={(event) => setNationality(event.target.value)}
                />
                <br />
                <button type="submit">Add</button>
            </form>
            {state.guests.map((guest) => {
                const {id, name, nationality} = guest;
                return (
                    <section key={id}>
                        <h4>{name}</h4>
                        <h5>{nationality}</h5>
                    </section>
                );
            })}
        </div>
    );
}

export { PartyInvite };