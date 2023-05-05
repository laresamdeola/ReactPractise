// 1. use the useReducer() to handle the various state values.

import React, { useState, useEffect, useContext } from "react";
import { apiKey } from "./details";

const CryptoKing = () => {
    const [prices, setPrices] = useState([]);
    const PriceContext = React.createContext();
    const url = `https://rest.coinapi.io/v1/assets`;
    const options = {
        "method": "GET",
        "headers": {'X-CoinAPI-Key': apiKey}
    };
    const THRESHOLD = 20000;
    
    const fetchPrices = async() => {
        const data = await fetch(url, options);
        const dataJson = await data.json();
        setPrices(dataJson);
        console.log("Current Crypto Currency Prices have been fetched");
    }
    
    useEffect(() => {
        fetchPrices();
    }, [url]);
    
    const ValueCoin = () => {
        const {price_usd} = useContext(PriceContext);
        const HIGHVALUECOIN = 30000;
        
        // Using the Ternary Operator
        //price_usd >= 15000 ? <h4 style={{color: "gold"}}>{price_usd}</h4> : <h4>{price_usd}</h4>;
        
        if(price_usd >= HIGHVALUECOIN){
            return <h4 style={{color: "gold"}}>{price_usd}</h4>;
        } else {
            return <h4>{price_usd}</h4>;
        }
    };
    
    const NoValueCoin = () => {
        return <h1>No High Value Cryptocurrency Coin for now</h1>
    };
    
    return (
        <>
            <h1>Welcome to CryptoKing!</h1>
            {prices.map((price) => {
                const {asset_id, name, price_usd, type_is_crypto} = price;
                if(price_usd > THRESHOLD && type_is_crypto) {
                    return (
                        <PriceContext.Provider value={{name, price_usd}}>
                            <div key={asset_id}>
                                <h3>{name}</h3>
                                <ValueCoin />
                                <br /> 
                            </div>
                        </PriceContext.Provider>
                    );
                } else {
                    return <NoValueCoin />;
                } 
            })}
        </>
    );
};

export { CryptoKing };