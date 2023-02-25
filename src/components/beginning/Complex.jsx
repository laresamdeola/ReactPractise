import React, { useState } from "react";

const Complex = () => {
    const [count, setCount] = useState(0);
    
    const complexIncrease = () => {
        setTimeout(() => {
            setCount((prevCount) => {
                return prevCount + 1;
            });
        }, 2000);
    }
    
    return (
        <main>
            <h1>Complex Increase</h1>
            <h1>{count}</h1>
            <button onClick={complexIncrease}>increase</button>
        </main>
    );
}

export default Complex;