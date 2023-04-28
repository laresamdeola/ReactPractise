import React, { useState } from "react";

const useHeader = (title, titleColor, titleBrightness) => {
    
    const headerStyle = {
        color: titleColor,
        opacity: titleBrightness
    };
    
    const [header, setHeader] = useState(headerStyle);
    const [headerTitle, setHeaderTitle] = useState(title);
    
    
    switch(titleBrightness){
        case "low":
            headerStyle.opacity = 1;
            break;
        case "medium":
            headerStyle.opacity = 0.5;
            break;
        case "high":
            headerStyle.opacity = 0.1;
            break;
        default:
            headerStyle.opacity = 1;
    }
    
    return {
        header,
        headerTitle
    };   
}

export { useHeader };