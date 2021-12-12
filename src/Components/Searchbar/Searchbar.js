import searchBarImg from "../../Assets/Images/searchBarImg.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = ({ books, setBooks }) => {
  let navigate = useNavigate();
  const [input, setinput] = useState("");

  const handleSearch = (e) => {
    books.book = e.target.value;
    setinput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      books.book = "programming";
    }
    books.newsearch = true;
    navigate("/shoppingcart/all-books", {
      state: { books: books, test: books.newsearch },
    });
    setinput("");
  };
  return (
    <form onSubmit={handleSubmit} className="searchbar-wrapper">
      <img
        src={searchBarImg}
        className="searchbar-img"
        alt="opened book with magnifying glass"
      />
      <input
        name="book"
        onChange={handleSearch}
        type="text"
        className="searchbar"
        placeholder="search"
        value={input}
      />
    </form>
  );
};

export default Searchbar;
