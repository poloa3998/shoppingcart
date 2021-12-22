import "./BookCard.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const BookCard = ({ image, title, author, published, price }) => {
  const { cart, setCart } = useContext(CartContext);

  const addtoCart = (bookTitle, bookImage, bookPrice) => {
    if (cart.some((e) => e.title === bookTitle)) {
      cart.forEach((item) => {
        if (item.title === bookTitle) {
          item.quantity++;
        }
      });
    } else {
      setCart([
        ...cart,
        {
          title: bookTitle,
          image: bookImage,
          price: bookPrice,
          quantity: 1,
        },
      ]);
    }
  };
  const setPrice = () => {
    if (price === 0) {
      price = "Free";
    } else if (Number.isInteger(price)) {
      price = "$" + (price - 1 + 0.99);
    } else {
      price = "$" + price;
    }
    return price;
  };

  return (
    <div className="bookcard-wrapper">
      <img
        className="bookcard-image"
        src={image === "no-img" ? title : image}
        alt={title}
      />
      <div className="description">
        <h2 className="bookcard-title">{title}</h2>
        <h3 className="bookcard-author">by {author}</h3>
        <h3 className="price">{setPrice()}</h3>
        <button
          className="add-to-cart-btn"
          onClick={() => addtoCart(title, image, price)}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default BookCard;
