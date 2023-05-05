import React from "react";
import { useGreeting } from "./useGreeting";
import { useHeader } from "./useHeader";
import { useModal } from "./useModal";

const CustomHooks1 = () => {
    const {header, headerTitle} = useHeader("Hello World", "red", "low");
    header.color = "purple";
    return <h1 style={header}>{headerTitle}</h1>;
};

const CustomHooks2 = () => {
    const message = useGreeting("", "", 0);
    
    return <h1>{`${message.greeting}`}</h1>
}

const CustomHooks3 = () => {
    const modal = useModal("ORIGINS", true, "Okay", true, "Close");
    return modal;
}

export { CustomHooks3 };