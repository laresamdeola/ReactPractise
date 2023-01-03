import React from "react";
import { useFetch }  from "./useFetch";

const FetchExample = () => {
    const url = "https://api.github.com/users"
    
    const {loading, data} = useFetch(url);
    
    return (
        <>
            {loading ? <h1>Fetching Data...</h1>
                : data.map((datum) => {
                const {id, login, url, type} = datum;
                
                return (
                    <div key={id}>
                        <h1>{login}</h1>
                        <h3>{url}</h3>
                        <p>{type}</p>
                    </div>
                )
            })}
        </>
    )
}

export default FetchExample;