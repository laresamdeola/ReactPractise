import React, { useState, useEffect } from "react";
import { useFetch } from "../customhooks/useFetch";

const FetchData = () => {
  const url = "https://api.github.com/users";
  const github = useFetch(url);
  const { isLoading, data } = github;

  return (
    <>
      {!isLoading
        ? data.map((datum) => {
            const { id, login, avatar_url } = datum;
            return (
              <div key={id}>
                <h3>{login}</h3>
                <img src={avatar_url} alt={login} />
              </div>
            );
          })
        : alert("data is loading")}
    </>
  );
};

export { FetchData };
