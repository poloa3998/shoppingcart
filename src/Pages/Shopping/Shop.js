import BookList from "../../Components/Books/BookList";
import React, { useEffect, useContext } from "react";
import { BookContext } from "../../contexts/BookContexts";

const Shop = () => {
  let { books, loading, getBookData, setLoading } = useContext(BookContext);
  if (!Array.isArray(books) && books !== undefined) {
    getBookData("programming");
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <BookList books={books} loading={loading} setloading={setLoading} />
      )}
    </div>
  );
};

export default Shop;
