import React from "react";

const artists = [
  {
    id: 1,
    genre: "New World",
    artistName: "Enya",
    imageURL: "",
  },
  {
    id: 2,
    genre: "Afrobeat",
    artistName: "Fela",
    imageURL: "",
  },
  {
    id: 3,
    genre: "Reggae",
    artistName: "Bob Marley",
    imageURL: "",
  },
  {
    id: 4,
    genre: "Funk",
    artistName: "James Brown",
    imageURL: "",
  },
];

const Artist = (props) => {
  const { id, genre, artistName, imageURL } = props;
  return (
    <section key={id}>
      <h2>{artistName}</h2>
      <h3>{genre}</h3>
      <img src={imageURL} alt={artistName} />
      <br />
    </section>
  );
};

const SpreadOperator = () => {
  return (
    <div>
      {artists.map((artist) => {
        return <Artist {...artist} />;
      })}
    </div>
  );
};

export { SpreadOperator, artists, Artist };
