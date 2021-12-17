import React, { useState, createContext } from "react";

export const BookContext = createContext();

export const BookProvider = (props) => {
  const [books, setBooks] = useState("");
  const [loading, setLoading] = useState(true);

  const getBookData = async (value) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${value}&maxResults=25`
      );
      const bookData = await response.json();
      setBooks(bookData.items);
    } catch (err) {
      console.log(err.stack);
    } finally {
      setTimeout(function () {
        setLoading(false);
      }, 1500);
    }
  };

  return (
    <BookContext.Provider
      value={[books, loading, getBookData, setBooks, setLoading]}
    >
      {props.children}
    </BookContext.Provider>
  );
};
