import React, { useState, useEffect } from "react";
import { bearerToken } from "./token";

const FetchPets = () => {
  const [pets, petsData] = useState([]);
  const [response, setRespone] = useState(false);

  const getPets = async () => {
    const data = await fetch(url, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    const dataJson = data.json();
    setResponse(true);
    console.log(dataJson);
  };

  useEffect(() => {
    getPets();
  }, []);

  return <h1>{response ? <h1>Hello Data</h1> : <h1>No Data Yet</h1>}</h1>;
};
