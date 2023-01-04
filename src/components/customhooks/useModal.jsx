import React, { useState, useEffect } from "react";

//const text = "Hello World";

const useModal = (text, time) => {
    const [modal, setModal] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setModal(false);
        }, time)
    },[text, time]);
    return (
        <h3>{modal ? text : null}</h3>
    )
}

export {useModal};