import "./modal.css";
import modalImg from "../../Assets/Images/modal.svg";
import { useNavigate } from "react-router-dom";
const ShoppingCartModal = ({ hidden, setHidden, books, cart, cartTotal }) => {
  let navigate = useNavigate();
  const hideModal = () => {
    document.body.classList.remove("modal-open");
    setHidden(true);
  };
  const switchPage = () => {
    books.book = "programming";
    navigate("./all-books", {
      state: {
        books: books,
      },
    });
    hideModal();
  };
  const removeItem = (value) => {
    let copy = cart;
    copy = cart.items.filter((item) => item !== value);
    cart = copy;
  };
  console.log(cart);
  return (
    <div className="modal">
      {cart.items.length === 0 && (
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

      {cart.items.length !== 0 && (
        <div className="menu">
          <p className="modal-title">Cart ( {cart.items.length})</p>
          <div className="close" onClick={hideModal}></div>
          {cart.items.map((item, index) => {
            return (
              <>
                <p key={item.title + index}>{item.title}</p>
                <p key={item.quantity + index}> {item.quantity}</p>
                <img
                  key={index + item.image}
                  src={item.image}
                  alt="testing books"
                />
                <button
                  key={index + item.title + item.image}
                  onClick={removeItem(item.title)}
                >
                  Remove
                </button>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ShoppingCartModal;
