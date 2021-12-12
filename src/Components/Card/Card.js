import "./Card.css";
import card1 from "../../Assets/Images/card-1.svg";
import card2 from "../../Assets/Images/card-2.svg";
import card3 from "../../Assets/Images/card-3.svg";
import { useNavigate } from "react-router-dom";
const Card = ({ books }) => {
  let navigate = useNavigate();
  const switchPage = () => {
    books.book = "programming";
    navigate("./all-books", {
      state: {
        books: books,
      },
    });
  };

  return (
    <div className="cards">
      <h2 className="center-text">What Books Do We Sell?</h2>
      <div className="card-wrapper">
        <div className="card">
          <img src={card1} alt="Two Books" />
          <p>
            blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
          </p>
        </div>
        <div className="card">
          <img src={card2} alt="Open Book" />
          <p>Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah</p>
        </div>
        <div className="card">
          <img src={card3} alt="Book" />
          <p>
            Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
          </p>
        </div>
      </div>
      <button className="shop-now-btn" onClick={switchPage}>
        Shop Now
      </button>
    </div>
  );
};

export default Card;
