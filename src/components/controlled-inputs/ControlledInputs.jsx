import React, { useState, useEffect } from "react";

const ControlledInputs = () => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleForm = (event) => {
        event.preventDefault();
        console.log(`${name}, ${email}, ${password}`);
    }
    
    const handleName = (event) => {
        setName(event.target.value);
    }
    
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    
    return (
        <>
            <form onSubmit={handleForm}>
                <label htmlFor="firstname">Name: </label>
                <input 
                    type="text" 
                    id="firstname" 
                    name="firstname"
                    value={name}
                    onChange={handleName} 
                />
                <br />
                <label htmlFor="email">Email: </label>
                <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={email}
                    onChange={handleEmail}
                />
                <br />
                <label htmlFor="password">Password: </label>
                <input 
                    type="password" 
                    id="password" 
                    name="password"
                    value={password}
                    onChange={handlePassword} 
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default ControlledInputs;