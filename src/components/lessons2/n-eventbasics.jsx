import React from "react";
import { artists, Artist } from "./m-spreadoperator";

const EventBasics = () => {
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
        <br />
        <button onClick={() => alertMe(artistName)}>Click Me!</button>
        <br />
        <br />
        <br />
      </section>
    );
  };

  const alertMe = (artistName) => {
    alert(`Is ${artistName} your favorite artist?`);
  };

  return (
    <>
      {artists.map((artist) => {
        return <Artist {...artist} />;
      })}
    </>
  );
};

export { EventBasics };
