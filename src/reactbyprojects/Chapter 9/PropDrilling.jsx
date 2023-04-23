import React, { useState, useEffect } from "react";
import { shoes } from "./shoes";

const PropDrilling = () => {
    const [newShoes, setNewShoes] = useState(shoes);
    
    const PopularityText = ({popularity}) => {
        var popMessage = null;
        popularity >= 4 ? popMessage = "Popular Item" : "";
        return (
            <h5>{popMessage}</h5>
        );
    }
    
    return (
        <div>
            {newShoes.map((shoe) => {
                const { id, name, brand, price, popularity } = shoe;
                return (
                    <section key={id}>
                        <h3>{`${brand} ${name}`}</h3>
                        <p>{price}</p>
                        <PopularityText popularity={popularity}/>
                    </section>
                );
            })}
        </div>
    );
}

export { PropDrilling };