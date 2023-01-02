import React, { useEffect } from "react";

const Poets3Modal = ({closePoets3Modal}) => {
    useEffect(() => {
        setTimeout(() => {
            closePoets3Modal();
        }, 1000)
    });
    
    return <h1>Added New Poet</h1>
}

export default Poets3Modal;

