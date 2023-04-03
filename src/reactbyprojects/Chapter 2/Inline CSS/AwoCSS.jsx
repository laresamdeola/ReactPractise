// Inline CSS - Color Library - AwoCSS (Aah-WOH)

import React from "react";

const Awo = () => {
    
    const showProperty = (tag) => {
        const element = document.querySelector(tag);
        const elementStyle = getComputedStyle(element).getPropertyValue("background-color");
        return alert(elementStyle);
    }
    
    // Example of Internal/Object Styling
    const bluePropertyValue = {
                                backgroundColor: "blue", 
                                width: "100px",
                                height: "100px",
                                display: "inline-block",
                                marginLeft: "5%",
                                marginTop: "5%"
                            }
    
    return (
        <div>
            <div className="red-div" style={{backgroundColor: "red", 
                            width: "100px",
                            height: "100px",
                            display: "inline-block",
                            marginLeft: "5%",
                            marginTop: "5%"}
                         } onClick={() => showProperty(".red-div")}></div>
                         
            <div className="yellow-div" style={{backgroundColor: "yellow", 
                            width: "100px",
                            height: "100px",
                            display: "inline-block",
                            marginLeft: "5%",
                            marginTop: "5%"}
                         } onClick={() => showProperty(".yellow-div")}></div>
                         
            <div className="green-div" style={{backgroundColor: "green", 
                            width: "100px",
                            height: "100px",
                            display: "inline-block",
                            marginLeft: "5%",
                            marginTop: "5%"}
                         } onClick={() => showProperty(".green-div")}></div>
                         
            <div className="blue-div" style={bluePropertyValue} onClick={() => showProperty(".blue-div")}></div>
                         
        </div>
    );
}

export { Awo };