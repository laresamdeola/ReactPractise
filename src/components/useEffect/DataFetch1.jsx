import React, { useState, useEffect } from "react";

const DataFetch1 = () => {
    const [data, setData] = useState([]);
    
    const url = "https://api.github.com/users";
    
    const getData = async() => {
        const response = await fetch(url);
        const users = await response.json();
        console.log(users);
        setData(users);
    }
    useEffect(() => {
        getData();
    }, [])
    
    return (
        <>
            <h2>Github Users</h2>
               {data.map((datum) => {
                   const {id, login, avatar_url, repos_url} = datum;
                   return (
                       <ul>
                           <li>{login}</li>
                           <img src={avatar_url} alt={login} />
                           <br />
                           <a href={repos_url}>Profile</a>
                       </ul>
                   );
               })}
        </>
    );
}

export default DataFetch1;