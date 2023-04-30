// show a modal/an alert box

import React, { useState, useEffect } from "react";

const useModal = (theContent, theIsThereButton, theButtonText, theCloseButton, theCloseButtonText) => {
    const [isShowing, setIsShowing] = useState(true);
    const [content, setContent] = useState(theContent);
    const [isThereButton, setIsThereButton] = useState(theIsThereButton);
    const [buttonText, setButtonText] = useState(theButtonText);
    const [closeButton, setCloseButton] = useState(theCloseButton);
    const [closeButtonText, setCloseButtonText] = useState(theCloseButtonText);
    
    //const [isContent, setIsContent] = useState(true);
    
    const closeModal = () => {setIsShowing(false); console.log("clicked");};
    
    const Modal = () => {
        if(!content) setIsShowing(false);
        
        return (
            <>
                {isShowing &&
                <div style={
                    {width: "400px", 
                     height: "200px", 
                     backgroundColor: "LightGrey",
                     border: "2px solid red"}
                     }>
                    <p>{content}</p>
                    {isThereButton && <button>{buttonText}</button>}
                    <br />
                    <button onClick={() => closeModal()}>{closeButtonText}</button>
                </div>} 
            </>
        )
    }
    
    useEffect(() => {
        Modal();
    }, [isShowing]);
    
    return <Modal />;
}

export { useModal };