// 1. Simple Details form 
// 2. Name, Birth Year, Country of Origin
// 3. Make name Capital Case

import React, { useState } from "react";

const HooksIntro = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthYear, setBirthYear] = useState("1970-01-01");
    const [country, setCountry] = useState("");
    const [message, setMessage] = useState("");
    
    const handleForm = (event) => {
        event.preventDefault();
        console.log(firstName, lastName, birthYear, country);
        setFirstName("");
        setLastName("");
        setBirthYear("1970-01-01");
        setCountry("");
        setMessage("Thanks for adding your details");
    }
    
    return (
        <>
            <form onSubmit={handleForm}>
            <label htmlFor="firstName">First Name: </label>
            <input 
                type="text"
                name="firstName"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
            />
            <br />
            <label htmlFor="lastName">Last Name: </label>
            <input 
                type="text"
                name="lastName"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
            />
            <br />
            <label htmlFor="birthYear">Birth Year: </label>
            <input 
                type="date"
                name="birthYear"
                value={birthYear}
                onChange={(event) => setBirthYear(event.target.value)}
            />
            <br />
            <label htmlFor="country">Country: </label>
            <input 
                type="text"
                name="country"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
            />
            <button type="submit">Details</button>
        </form>
        
        <h2>{message}</h2>
        </>
    );
};

export { HooksIntro };