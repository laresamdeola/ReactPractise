import React from "react";

const ProperList = () => {
  const artists = [
    {
      id: 1,
      genre: "New World",
      artistName: "Enya",
    },
    {
      id: 2,
      genre: "Afrobeat",
      artistName: "Fela",
    },
    {
      id: 3,
      genre: "Reggae",
      artistName: "Bob Marley",
    },
  ];

  return (
    <div>
      {artists.map((artist) => {
        const { id, genre, artistName } = artist;
        return (
          <section key={id}>
            <h2>{artistName}</h2>
            <h3>{genre}</h3>
            <br />
          </section>
        );
      })}
    </div>
  );
};

export { ProperList };
