// 1. A simple form with the functionality of adding, removing and clearing
// a list of invited gusets to a party
// 2. Use the useReducer() hook here
// 3. It's good when we want several state values to change at the same thing
// or for managing complex state.

import React, { useState, useReducer } from "react";

const PartyInvite = () => {
    const [guest, setGuest] = useState({
        guestName: "",
        guestNationality: ""
    });
    
    const defaultGuests = {
        guestsGroup: [],
        isGuestModalOpen: false,
        guestMessage: ""
    };
    
    const reducer = (state, action) => {
        if(action.type === "ADD_GUEST"){
            const newGuests = [...state.guestsGroup, action.payload];
            return {
                ...state,
                guestsGroup: newGuests,
                isGuestModalOpen: true,
                guestMessage: `${guestName} has been added`
            }
        }
        if(action.type === "REMOVE_GUEST"){
            const filtered_guest = state.guestsGroup.filter((guest) => guest.id !== action.payload);
            return {
                ...state,
                guestsGroup: filtered_guest,
                isGuestModalOpen: true,
                guestMessage: ""
            }
        }
        return state;
    }
    
    const [state, dispatch] = useReducer(reducer, defaultGuests);
    
    const {guestName, guestNationality} = guest;
    
    const handleGuests = (event) => {
        event.preventDefault();
        const newGuest = {
            id: new Date().getTime().toString(),
            guestName,
            guestNationality
        };
        dispatch({type: "ADD_GUEST", payload: newGuest});
        console.log("New Guest Added");
        setGuest({
            guestName: "",
            guestNationality: ""
        });
    }
    
    
    return (
        <>
            <form onSubmit={handleGuests}>
                <label htmlFor="guestName">Invited Guest Name: </label>
                <br />
                <input 
                    type="text"
                    name="guestName"
                    id="guestName"
                    value={guestName}
                    onChange={(event) => setGuest({
                        ...guest,
                        guestName: event.target.value})}
                />
                <br />
                <label htmlFor="guestNationality">Invited Guest Nationality: </label>
                <br />
                <input 
                    type="text"
                    name="guestNationality"
                    id="guestNationality"
                    value={guestNationality}
                    onChange={(event) => setGuest({...guest,
                    guestNationality: event.target.value})}
                />
                <br />
                <button type="submit">Add</button>
             </form>
             {state.guestsGroup.map((guestMember) => {
                 const {id, guestName, guestNationality} = guestMember;
                 return (
                     <div key={id}>
                         <h3>{guestName}</h3>
                         <h4>{guestNationality}</h4>
                         <button onClick={() => dispatch({
                             type: "REMOVE_GUEST",
                             payload: id
                         })}>Remove</button>
                     </div>
                 )
             })}
        </>
    );
}

export { PartyInvite };