import BookCard from "./BookCard";
import "./BookList.scss";
import uniqid from "uniqid";
import { useCallback, useEffect, useContext } from "react";
import { auth } from "../../firebase/firebase";
import { db } from "../../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { CartContext } from "../../contexts/CartContext";
const BookList = ({ books, loading, setloading }) => {
  const { cart } = useContext(CartContext);
  const addItemsToUser = useCallback(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        return await updateDoc(doc(db, "users", auth.currentUser.uid), {
          cart: cart,
        });
      } else {
        return;
      }
    });
  }, [cart]);
  useEffect(() => {
    addItemsToUser();
  }, [addItemsToUser]);
  return (
    <>
      {loading && !Array.isArray(books) && (
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
      {books === undefined && (
        <p className="not-found"> Sorry!, we couldn't find that book :( </p>
      )}
      <div className="book-list">
        {!loading &&
          Array.isArray(books) &&
          books.map((book) => {
            return (
              <BookCard
                key={uniqid()}
                image={
                  book.volumeInfo.imageLinks === undefined
                    ? "no-img"
                    : book.volumeInfo.imageLinks.thumbnail
                }
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                published={book.volumeInfo.publishedDate}
                price={
                  book.saleInfo.listPrice === undefined
                    ? 19.99
                    : book.saleInfo.listPrice.amount
                }
              />
            );
          })}
      </div>
    </>
  );
};

export default BookList;
