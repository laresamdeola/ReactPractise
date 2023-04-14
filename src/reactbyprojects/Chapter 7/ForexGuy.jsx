// ForexGuy - done

import React, { useState, useEffect } from "react";

const ForexGuy = () => {
    const [currencyRate, setCurrencyRate] = useState({});
    
    // State to handle null/loading state gracefully and prevent crashes
    const [fetched, setFetched] = useState(false);
    const url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json"
    
    const fetchCurrency = async() => {
        const data = await fetch(url, { mode: "no-cors" });
        const dataJson = await data.json();
        setCurrencyRate(dataJson);
        setFetched(true);
        console.log(dataJson);
    }
    
    useEffect(() => {
        fetchCurrency();
        //document.title = `ForexGuy - Currencies(${Object.keys(currencyRate.usd).length})`;
    }, [url]);
    
    return (
        <div>
            <h3>ForexGuy</h3>
            {fetched ? Object.entries(currencyRate.usd).map(([key, rate]) => {
                return <h4 key={key}>{key} : {rate}</h4>
            }) : alert("loading")}
        </div>
    );    
}

export { ForexGuy };