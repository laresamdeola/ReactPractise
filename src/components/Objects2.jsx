import React, { useState } from "react";

const Objects2 = () => {
  const [books, setBooks] = useState({
    title: "Wizard of the Crow",
    author: "Ngugi wa Thiong'o",
    reviews: "Amazing literary work"
  });

  const { title, author, reviews } = books;

  const changeReview = () => {
    setBooks({ ...books, reviews: "I love this book!" });
  };

  return (
    <section>
      <h1>{title}</h1>
      <h3>{author}</h3>
      <h4>{reviews}</h4>
      <button onClick={changeReview}>change review</button>
    </section>
  );
};

export default Objects2;
