// 1. Create a simple page. - done
// 2. A button to click to generate a random name - done

import React, { useState } from "react";
import { RandomPetName } from "./RandomPetName";

const PetName = () => {
    
    // Using the useState Hook
    const [isPetNameCreated, setIsPetNameCreated] = useState(false);
    
    // Components inside a Component - 1
    /*
    const RandomPetName = () => {
        var petDirectory = ["SweetHeart", "Peaches", "Love of My Life",
        "My Moonlight"];
        var randomnumber = Math.floor(Math.random() * petDirectory.length);
        return <h2 style={{ color: "red" }}> {petDirectory[randomnumber]} </h2>;
    }
    */
    
    const handleForm = (event) => {
        event.preventDefault();
        console.log("Pet Name created");
        //console.log(RandomPetName());
        setIsPetNameCreated(true);
    }
    
    return (
        <>
            <h3>{PetName.name}</h3>
            <form onSubmit={handleForm}>
                <label>Find a Pet Name</label>
                <br />
                <button type="submit">purrr!</button>
                <button type="button" onClick={() => setIsPetNameCreated(false)}>reset</button>
            </form>
            {isPetNameCreated && <RandomPetName />}
        </>
    );
}

export default PetName;