import searchBarImg from "../../Assets/Images/searchBarImg.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = ({ getBookData }) => {
  let navigate = useNavigate();

  const [input, setinput] = useState("");

  const handleSearch = (e) => {
    setinput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      return getBookData("programming");
    }
    getBookData(input);
    navigate("/all-books");

    setinput("");
  };
  return (
    <form onSubmit={handleSubmit} className="searchbar-wrapper">
      <img
        src={searchBarImg}
        className="searchbar-img"
        alt="opened book with magnifying glass"
        onClick={handleSubmit}
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
