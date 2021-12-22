import "./Nav.css";
import logo from "../../Assets/Images/logo.svg";
import shoppingCart from "../../Assets/Images/shoppingCart.svg";
import ShoppingCartModal from "../Shopping-Cart/modal";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import { useState, useContext, useEffect, useRef } from "react";
import { BookContext } from "../../contexts/BookContexts";
import { CartContext } from "../../contexts/CartContext";
import { auth } from "../../firebase/firebase";
import { useAuth } from "../../contexts/AuthContexts";
import { GoSignOut } from "react-icons/go";
const Nav = () => {
  let { books, getBookData } = useContext(BookContext);
  let { cart, setCart } = useContext(CartContext);
  const [hidden, setHidden] = useState(true);
  const [dropDownHidden, setDropDownHidden] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const wrapperRef = useRef(null);
  const { logout, currentUser } = useAuth();

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

  const setdropDownActive = () => {
    setDropDownHidden(!dropDownHidden);
  };

  useEffect(() => {
    let mounted = true;

    auth.onAuthStateChanged((user) => {
      if (mounted) {
        if (user) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      }
    });

    const handleClickOutside = (event) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target) &&
        mounted
      ) {
        setDropDownHidden(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      mounted = false;
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        <div ref={wrapperRef} className="dropdown" onClick={setdropDownActive}>
          {loggedIn && (
            <div className="account-wrapper">
              <IoPersonCircleOutline className="account" />
              <div>
                <p className="account-text">
                  Welcome
                  {currentUser === null
                    ? "not logged in: "
                    : " " + currentUser.displayName}
                </p>
                <p className="account-text">
                  <strong>Account</strong>
                </p>
              </div>
            </div>
          )}
          {!loggedIn && <IoPersonCircleOutline className="account" />}
          <div
            className={
              dropDownHidden ? "dropdown-content" : "dropdown-content show"
            }
          >
            {loggedIn && (
              <>
                <button className="signout" onClick={() => logout()}>
                  Sign out
                  <GoSignOut className="signout-img" />
                </button>
              </>
            )}
            {!loggedIn && (
              <>
                <Link to="/login">
                  <button className="log-in">Sign In</button>
                </Link>
                <Link to="/createAccount">
                  <button className="create-account">Create an account</button>
                </Link>
              </>
            )}
          </div>
        </div>
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
