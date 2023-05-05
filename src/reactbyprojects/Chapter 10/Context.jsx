// Prop Drilling using the useContext() hook

import React, { useState, useContext} from "react";
import { shoes } from "../Chapter 9/shoes";

const Context = () => {
    const [newShoes, setNewShoes] = useState(shoes);
    const ShoesContext = React.createContext();
    
    const PopularityText = () => {
        const { popularity } = useContext(ShoesContext);
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
                    <ShoesContext.Provider key={id} value={{popularity}}>
                        <section>
                            <h3>{`${brand} ${name}`}</h3>
                            <p>{price}</p>
                            <PopularityText />
                        </section>
                    </ShoesContext.Provider>
                );
            })}
        </div>
    );
}

export { Context };