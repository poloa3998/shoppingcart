import BookCard from "./BookCard";

import "./BookList.scss";
const BookList = ({
  books,
  loading,
  cart,
  setCart,
  cartTotal,
  setCartTotal,
}) => {
  console.log(books);
  return (
    <>
      {loading ||
        (!Array.isArray(books) && (
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
        ))}
      {books === undefined && (
        <p className="not-found"> Sorry!, we couldn't find that book :( </p>
      )}
      <div className="book-list">
        {!loading &&
          Array.isArray(books) &&
          books.map((book, index) => {
            return (
              <BookCard
                image={
                  book.volumeInfo.imageLinks === undefined
                    ? "no-img"
                    : book.volumeInfo.imageLinks.thumbnail
                }
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                published={book.volumeInfo.publishedDate}
                key={index}
                cart={cart}
                setCart={setCart}
                cartTotal={cartTotal}
                setCartTotal={setCartTotal}
              />
            );
          })}
      </div>
    </>
  );
};

export default BookList;
