import "./modal.css";
import modalImg from "../../Assets/Images/modal.svg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import uniqid from "uniqid";
const ShoppingCartModal = ({
  setHidden,
  books,
  cart,
  setCart,
  getBookData,
}) => {
  let navigate = useNavigate();
  const [cartTotal, setCartTotal] = useState(0);

  const hideModal = () => {
    document.body.classList.remove("modal-open");
    setHidden(true);
  };

  const switchPage = () => {
    if (!Array.isArray(books)) {
      getBookData("programming");
      navigate("/all-books");
    } else {
      navigate("/all-books");
    }
    hideModal();
  };

  const removeFromCart = (bookTitle) => {
    let copy = [...cart];
    copy = copy.filter((cartItem) => cartItem !== bookTitle);
    setCart(copy);
  };

  const increment = (bookTitle) => {
    let copy = [...cart];
    copy.forEach((item) => {
      if (item.title === bookTitle) {
        item.quantity++;
      }
    });
    setCart(copy);
  };

  const decrement = (bookTitle) => {
    let copy = [...cart];
    copy.forEach((item) => {
      if (item.title === bookTitle) {
        if (item.quantity === 1) {
          const index = copy.findIndex((item) => item.title === bookTitle);
          copy.splice(index, 1);
        } else {
          item.quantity--;
        }
      }
    });
    setCart(copy);
  };
  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].price === "Free") {
        cart[i].price = 0;
      }
      if (isNaN(cart[i].price)) {
        cart[i].price = parseFloat(cart[i].price.substring(1));
        console.log(cart[i].price);
      }
      totalVal += cart[i].quantity * cart[i].price;
    }
    setCartTotal(totalVal.toFixed(2));
  };
  useEffect(() => {
    total();
  });

  return (
    <div className="modal">
      {cart.length === 0 && (
        <div className="menu">
          <p className="modal-title">Cart</p>
          <div className="close" onClick={hideModal}></div>
          <div className="empty-cart">
            <img src={modalImg} className="modal-img" alt="happy book" />

            <p>Your cart is empty</p>
            <button className="shop-books-btn" onClick={switchPage}>
              Shop Books
            </button>
          </div>
        </div>
      )}

      {cart.length !== 0 && (
        <div className="menu">
          <p className="modal-title">Cart ( {cart.length})</p>
          <div className="close" onClick={hideModal}></div>
          <div className="cartInfo">
            {cart.map((item, index) => {
              return (
                <div key={uniqid()} className="bookInfo">
                  <img
                    className="bookCartImage"
                    key={uniqid()}
                    src={item.image}
                    alt="testing books"
                  />

                  <div key={uniqid()} className="bookCartInfo">
                    <p>{item.title}</p>
                    <p> {item.price === 0 ? "Free" : "$" + item.price}</p>
                    <div className="quantity-container">
                      <button
                        className="decrement"
                        onClick={() => decrement(item.title)}
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        className="increment"
                        onClick={() => increment(item.title)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="removeCartBtn"
                      type="submit"
                      key={index + item.title + item.image}
                      onClick={() => removeFromCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="total">
            <p> Estimated Total: </p>
            <p> {cartTotal === 0 ? "Free" : "$" + cartTotal}</p>
          </div>
          <div className="checkOut-Container">
            <button className="checkOut" type="submit">
              CONTINUE TO CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartModal;
