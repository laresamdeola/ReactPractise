// 1. Introduction to Higher Order Functions - start with map() - done
// 2. Create a simple application that uses map()
// 3. Create a Search Poetry Site.

import React from "react";

const HigherOrderFunctions = () => {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    // Remember to talk about the importance of the key prop
    const MapFunction = () => {
        return (
        <>
            {numbers.map((number, index) => {
                return (
                    <ul key={index}>
                        <li>{number}</li>
                    </ul>
                );
            })}
        </>
        );
    }
    
    const FilterFunction = () => {
        return (
            <>
                {numbers.filter((number) => {
                    return number < 5; 
                })}
            </>
        )
    }
    
    const ReduceFunction = () => {
        return (
            <>
                {numbers.reduce((total, currentValue) => {
                    return total + currentValue;
                })}
            </>
        );
    }
    
    const FindFunction = () => {
        return (
            <>
                {numbers.find((num, index) => {
                    return num == 5;  
                })}
            </>
        );
    }
    
    const FindIndexFunction = () => {
        return (
            <>
                {numbers.findIndex((value, index) => {
                    if(value == 2) return index;
                })}
            </>
        )
    }
    
    return <FindIndexFunction />
       
}

export { HigherOrderFunctions };