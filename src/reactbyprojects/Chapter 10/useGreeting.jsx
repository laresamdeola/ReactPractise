// An alert to welcome a new user to a sit

import React, { useState, useEffect } from "react";

const useGreeting = (siteName, siteGreeting, siteTime) => {
    const [name, setName] = useState(siteName || "Nigeria");
    const [greeting, setGreeting] = useState(siteGreeting || `Hello from ${name}`);
    const [time, setTime] = useState(siteTime || 1000);
    
    useEffect(() => {
        setTimeout(() => {
            alert(greeting);
        }, time);
    }, []);
    
    return {name, greeting, time};
};

export { useGreeting };