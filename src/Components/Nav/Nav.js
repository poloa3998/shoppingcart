import "./Nav.css";
import logo from "../../Assets/Images/logo.svg";
import shoppingCart from "../../Assets/Images/shoppingCart.svg";
import ShoppingCartModal from "../Shopping-Cart/modal";
import { Link, NavLink } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { BookContext } from "../../contexts/BookContexts";
import { CartContext } from "../../contexts/CartContext";
const Nav = () => {
  let [books, loading, getBookData, setBooks, setLoading] =
    useContext(BookContext);
  let [cart, setCart] = useContext(CartContext);
  const [hidden, setHidden] = useState(true);

  let navigate = useNavigate();
  const switchPage = () => {
    if (!Array.isArray(books)) {
      getBookData("programming");
      navigate("/all-books");
    } else {
      navigate("/all-books");
    }
  };

  const setActive = () => {
    document.body.classList.add("modal-open");
    setHidden(false);
  };

  return (
    <>
      {hidden ? null : (
        <ShoppingCartModal
          setHidden={setHidden}
          books={books}
          cart={cart}
          setCart={setCart}
          getBookData={getBookData}
        />
      )}
      <div className="nav">
        <Link to="/">
          <div className="logo-wrapper">
            <h1 className="title">BookBarn</h1>
            <img
              src={logo}
              className="logo-img"
              alt="3 books laying ontop of eachother"
            />
          </div>
        </Link>
        <Searchbar getBookData={getBookData} />

        <p className="all-books" onClick={switchPage}>
          All Books
        </p>

        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive ? "about-us active" : "about-us"
          }
        >
          <p className="about-us">About Us</p>
        </NavLink>
        <div className="shoppingcart-container" onClick={setActive}>
          {cart.length === 0 && (
            <img
              src={shoppingCart}
              className="shoppingcart"
              alt="Shopping Cart"
            />
          )}
          {cart.length !== 0 && (
            <div className="shoppingcart-container">
              <span className="nav-cart-items" data-count={cart.length} />
              <img
                src={shoppingCart}
                className="shoppingcart"
                alt="Shopping Cart"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
