// 1. A simple form with the functionality of adding, removing and clearing
// a list of invited gusets to a party
// 2. Use the useReducer() hook here
// 3. It's good when we want several state values to change at the same thing
// or for managing complex state.

import React, { useState, useReducer } from "react";
import { PartyModal } from "./PartyModal";

const PartyInvite = () => {
    const [partyGuest, setPartyGuest] = useState({
        name: "",
        nationality: ""
    });
    
    const {name, nationality} = partyGuest;
    
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
                message: "New Guest Added",
                clear: false
            }
        }
        
        if(action.type === "CLEAR_GUESTS"){
            return {
                ...state,
                guests: [],
                isModalOpen: false,
                message: "All guests have been cleared",
                clear: true
            }
        }
        
        if(action.type === "REMOVE_GUEST"){
            const filtered_guests = state.guests.filter((guest) => guest.id !== action.payload);
            return {
                ...state,
                guests: filtered_guests,
                isModalOpen: true,
                message: "Guest has been removed",
                clear: false
            }
        }
        
        return state;
    }
    
    const [state, dispatch] = useReducer(reducer, defaultItems);
    
    const handleGuests = (event) => {
        event.preventDefault();
        if(name && nationality){
            const newGuest = { 
                id: new Date().getTime().toString(),
                name,
                nationality
            }
            dispatch({type: "ADD_GUEST", payload: newGuest});   
        }
        setPartyGuest({
            name: "",
            nationality: ""
        });
        console.log(`${state.message}`);
    }
    
    const ClearButton = () => {
        return <button onClick={() => dispatch({type: "CLEAR_GUESTS"})}>Clear</button>;
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
                    onChange={(event) => setPartyGuest({
                        ...partyGuest,
                        name: event.target.value
                    })}
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
                    onChange={(event) => setPartyGuest({
                        ...partyGuest,
                        nationality: event.target.value
                    })}
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
                        <button onClick={() => dispatch({type: "REMOVE_GUEST", payload: id})}>remove</button>
                    </section>
                );
            })}
            <br />
            {state.clear && <ClearButton />}
            {state.isModalOpen && <PartyModal message={state.message} />}
        </div>
    );
}

export { PartyInvite };