// A directory of animals unique to a particular country - done

import React, { useState, useEffect } from "react";
import { wonderkind } from "./wonderkind";

const WonderKind = () => {
    const [animals, setAnimals] = useState(wonderkind);
    
    return (
        <div>
            <h4 style={{ color: "green" }}>WonderKind</h4>
            {animals.map((animal) => {
                const { id, animalCountry, animalName, animalImage } = animal;
                return (
                    <section key={id}>
                        <h3>{animalName}</h3>
                        <h3>{animalCountry}</h3>
                        <img src={animalImage} alt={animalName} height="35%" width="35%"/>
                        <br />
                        <br />
                    </section>
                );
            })}
        </div>
    );
}

export { WonderKind };