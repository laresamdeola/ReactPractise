import React, { useState } from "react";

const Conditional = () => {
    const [text, setIsText] = useState("hello world");
    const [renderText, setRenderText] = useState(false);
    
    return (
        <>
            <h1 style={{color: "blue"}}>Conditional Rendering</h1>
            <h1>{renderText && text}</h1>
        </>
    );
}

export default Conditional;