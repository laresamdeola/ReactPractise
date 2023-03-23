import React from "react";

const SpreadOperator = () => {
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
    {
      id: 4,
      genre: "Funk",
      artistName: "James Brown",
    },
  ];

  const Artist = (props) => {
    const { id, genre, artistName } = props;
    return (
      <section key={id}>
        <h2>{artistName}</h2>
        <h3>{genre}</h3>
        <br />
      </section>
    );
  };

  return (
    <div>
      {artists.map((artist) => {
        return <Artist {...artist} />;
      })}
    </div>
  );
};

export { SpreadOperator };
