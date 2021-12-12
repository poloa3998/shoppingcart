import "./BookCard.css";

const BookCard = ({
  image,
  title,
  author,
  published,
  cart,
  setCart,
  cartTotal,
  setCartTotal,
}) => {
  const addtoCart = (test, test2) => {
    if (cart.items.some((e) => e.title === test)) {
      cart.items.forEach((item) => {
        if (item.title === test) {
          item.quantity++;
          return;
        }
      });
    } else {
      cart.items.push({ title: test, image: test2, quantity: 1 });
      console.log(cart);
    }
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
        <button
          className="add-to-cart-btn"
          onClick={() => addtoCart(title, image)}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default BookCard;
