import React, { useState, useEffect } from "react";
import { petDirectory } from "./petDirectory";

const RandomPetName = () => {
    // Since the pet name directory would keep expanding, it's wise
    // to put it in a different file
    /*var petDirectory = ["SweetHeart", "Peaches", "Love of My Life",
    "My Moonlight"];*/
    
    const [isSweetHeart, setIsSweetHeart] = useState(false);
    
    var randomnumber = Math.floor(Math.random() * petDirectory.length);
    let petname = petDirectory[randomnumber];
    
    /*
    if(petname === "SweetHeart") {
        setIsSweetHeart(true);
    } else {
        setIsSweetHeart(false);
    }
    */
    
    // Introduction to the useEffect Hook - 
    // first try it with useState and Conditional Rendering
    useEffect(() => {
        petname === "SweetHeart" ? setIsSweetHeart(true) : setIsSweetHeart(false);
    },[petname]);
    
    const PetDetails = () => {
        return <h4>Popular Choice! {"<3"} </h4>
    }
        
    return (
        <div>
            <h2 style={{ color: "red" }}> {petname} </h2>
            {isSweetHeart && <PetDetails />}
        </div>
    );
}

export { RandomPetName };