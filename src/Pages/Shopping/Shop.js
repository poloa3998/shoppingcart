import { useLocation } from "react-router-dom";
import BookList from "../../Components/Books/BookList";
import React, { useState, useEffect, useMemo } from "react";

const Shop = ({ books, cart, setCart, cartTotal, setCartTotal }) => {
  const [loading, setLoading] = useState(true);
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const getBookData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${books.book}&maxResults=25`
        );
        const bookData = await response.json();
        books.book = bookData.items;
      } catch (err) {
        console.log(err.stack);
      } finally {
        setLoading(false);
        location.state.newSearch = false;
      }
    };
    setTimeout(() => {
      getBookData();
    }, 1000);
    return () => {
      setLoading(true);
    };
  }, [books, location.state]);
  console.log(location.state);
  console.log(loading);
  console.log(books);
  return (
    <div>
      {loading && (
        <div className="test">
          <div className="bookshelf_wrapper">
            <ul className="books_list">
              <li className="book_item first"></li>
              <li className="book_item second"></li>
              <li className="book_item third"></li>
              <li className="book_item fourth"></li>
              <li className="book_item fifth"></li>
              <li className="book_item sixth"></li>
            </ul>
            <div className="shelf"></div>
          </div>
        </div>
      )}
      {!loading && (
        <BookList
          books={books.book}
          loading={loading}
          cart={cart}
          setCart={setCart}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
        />
      )}
    </div>
  );
};

export default Shop;
