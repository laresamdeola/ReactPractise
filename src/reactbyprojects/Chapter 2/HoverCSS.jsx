// Procedures for HoverCSS II
// Animation Library for different Hover Effects. 
// 1. Search Bar for entering text
// 2. Fields of text
// 3. Each Text Auto Updates from the Search Bar Entry
// 4. Each Hover Style Animation updates with each dynamic Entry
// 5. Button to reveal the CSS Code
// 6. Functionality to copy this CSS Code.

// Procedures for HoverCSS II - done.
// 1. Fields of Static Text
// 2. Ccreate the different hover styles
// 3. Button to reveal CSS Code
// 4. Functionality to copy this code

// External CSS - done
// Inline CSS - Smaller Version of the HoverCSS Library
// Internal/Object CSS - Medium Sized Version of the HoverCSS Library

import React from "react";
import "./hovercss.css";

const HoverCSS = () => {
    const name = "Madagascar";
    //let cssCode;
    const Texts = () => {
        
        const showHoverStyle = (code) => {
            return (alert(code));
        }
        
        return (
            <div>
                <ul className="list-elements">
                    <li className="hover-color">{name} <br/> 
                        <button onClick={() => showHoverStyle(`.hover-color:hover {
    color: red;
}`)}> Code </button>
                    </li>
                    
                    <li className="hover-shadow">{name} <br />
                        <button onClick={() => showHoverStyle(`.hover-shadow:hover {
    text-shadow: 2px 2px red;
}`)}>Code</button>
                    </li>
                    
                    <li className="hover-letter-spacing">{name}<br />
                        <button onClick={() => showHoverStyle(`.hover-letter-spacing:hover {
    letter-spacing: 2px;
}`)}>Code</button></li>

                    <br />
                    
                    <li className="hover-slant">{name} <br />
                        <button onClick={() => showHoverStyle(`.hover-slant:hover {
    font-style: italic;
}`)}>Code</button></li>

                    <li className="hover-uppercase">{name} <br />
                        <button onClick={() => showHoverStyle(`.hover-uppercase:hover {
    text-transform: uppercase;
}`)}>Code</button></li>
                    
                    <li className="hover-lowercase">{name} <br />
                        <button onClick={() => showHoverStyle(`.hover-lowercase:hover {
    text-transform: lowercase;
}`)}>Code</button></li>
                    
                    <br />
                    
                    <li className="hover-capitalize">{name} <br />
                        <button onClick={() => showHoverStyle(`.hover-capitalize:hover {
    text-transform: capitalize;
}`)}>Code</button></li>
                    
                    <li className="hover-translate">{name} <br />
                        <button onClick={() => showHoverStyle(`.hover-translate:hover {
    transform: translate(20px, 0px);
}`)}>Code</button></li>
                    
                    <li className="hover-rotate">{name} <br />
                        <button onClick={() => showHoverStyle(`.hover-rotate:hover {
    transform: rotate(2deg);
}`)}>Code</button></li>
                    
                    <br />
                    
                    <li className="hover-text-medium">{name} <br />
                        <button onClick={() => showHoverStyle(`.hover-text-medium:hover {
    font-size: 12px;
}`)}>Code</button></li>
                    
                    <li className="hover-text-large">{name} <br />
                        <button onClick={() => showHoverStyle(`.hover-text-large:hover {
    font-size: 24px;
}`)}>Code</button></li>
                    
                    <li className="hover-text-extra-large">{name} <br />
                        <button onClick={() => showHoverStyle(`.hover-text-extra-large:hover {
    font-size: 36px;
}`)}>Code</button></li>
                </ul>
                
            </div> 
        );
    }
    
    return <Texts />;
}

export { HoverCSS };