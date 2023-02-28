import React, { useState, useEffect } from "react";
import { useFetch } from "../customhooks/useFetch";

const MultipleReturnsFetch = () => {
  const url = "https://api.github.com/users";
  const users = useFetch(url);
  const { isLoading, data } = users;

  const dataStructure = () => {
    return (
      <>
        {data.map((datum) => {
          const { id, login, avatar_url, site_admin, url } = datum;
          return (
            <div key={id}>
              <a href={url}>
                <h2>{login}</h2>
              </a>
              <h3>{site_admin.toString()}</h3>
              <img src={avatar_url} alt={login} />
            </div>
          );
        })}
      </>
    );
  };

  return <>{!isLoading ? dataStructure() : alert("Data is loading")}</>;
};

export { MultipleReturnsFetch };
