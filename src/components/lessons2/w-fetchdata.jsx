// fetch data using useEffect

import React, { useState, useEffect } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://api.github.com/users";

  const getData = async () => {
    const theData = await fetch(url);;
    const response = await theData.json();
    console.log(response);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Hello Data!</h1>
    </>
  );
};

export { FetchData };
