import React, {useState} from "react";
import PropTypes from "prop-types";
import data from "./data";

const Products = () => {
    const [noodles, setNoodles] = useState(data);
    
    return (
        <>
            {noodles.map((noodle) => {
                const { id, name, price } = noodle;
                return (
                    <div key={id || 0}>
                        <h3>{name || "Biscuits"}</h3>
                        <h5>${price || 1}</h5>
                    </div>
                )
            })}
        </>
    )
}

Products.propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
};

Products.defaultProps = {
    id: 0,
    name: "Biscuit",
    price: 1
};

export { Products };