import Cart from "../images/icon-cart-white.svg";
const Description = (props) => {
  const { products, onAdd, count, setCount } = props;
  return (
    <div className="descripion-div">
      <div>
        <p className="company">SNEAKER COMPANY</p>
        <h1>{products.name}</h1>
        <p className="info">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they&#39;ll withstand anything
          the weather can offer.
        </p>
        <div className="price">
          <div className="price-right">
            <p className="new-price">${products.price}</p>
            <p className="discount">50%</p>
          </div>
          <p className="actual-price">$250.00</p>
        </div>
      </div>
      <div className="add-cart">
        <div className="add-delete">
          <button
            onClick={() => {
              count <= 1 ? setCount(count) : setCount(count - 1);
            }}
          >
            -
          </button>
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        <button
          onClick={() =>{ count == 0 ? " " : onAdd()}}
          className="cart-button"
        >
          <img src={Cart} className="cart-icon" />
          <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
};

export default Description;
