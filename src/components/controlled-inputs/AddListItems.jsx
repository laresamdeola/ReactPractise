import React, { useState, useEffect } from "react";

const AddListItems = () => {
    const [number, setNumber] = useState(0);
    const [age, setAge] = useState(0);
    const [height, setHeight] = useState("");
    const [details, setDetails] = useState([]);
    
    const handleList = (event) => {
        event.preventDefault();
        setDetails((prevDetail) => {
            return [...prevDetail, {id: new Date().getTime().toString(), number, age, height}]
        });
        console.log(details);
    }
    
    const handleNumber = (event) => {
        if(event.target.value >= 0){
            setNumber(event.target.value);;    
        } else {
            alert("Enter a valid phone number");
        }
    }
    
    const handleAge = (event) => {
        if(event.target.value >= 0){
            setAge(event.target.value);    
        } else {
            alert("You age can't be less than 0");
        }     
    }
    
    const handleHeight = (event) => {
        setHeight(event.target.value);
    }
    
    return (
        <>
            <form onSubmit={handleList}>
                <label htmlFor="number">Phone Number: </label>
                <br />
                <input 
                    type="number" 
                    id="number" 
                    name="number"
                    value={number}
                    onChange={handleNumber} 
                />
                <br />
                <br />
                <label htmlFor="age">Age: </label>
                <br />
                <input 
                    type="number" 
                    id="age" 
                    name="age"
                    value={age}
                    onChange={handleAge} 
                />
                <br />
                <br />
                <label htmlFor="height">Height: </label>
                <br />
                <input 
                    type="text" 
                    id="height" 
                    name="height"
                    value={height}
                    onChange={handleHeight} 
                />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
            <section>
                {details.map((detail) => {
                    const {id, number, age, height} = detail;
                    return (
                        <div key={id}>
                            <h2>{number}</h2>
                            <h2>{age}</h2>
                            <h2>{height}</h2>
                        </div>
                    )
                })}
            </section>
        </>
    );
}

export default AddListItems;