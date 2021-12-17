import BookCard from "./BookCard";
import "./BookList.scss";
import uniqid from "uniqid";
const BookList = ({ books, loading, setloading }) => {
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
          books.map((book, index) => {
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
