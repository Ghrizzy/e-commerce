import Image1Thumb from "../images/image-product-1-thumbnail.jpg";
import Del from "../images/icon-delete.svg";

const Basket = (props) => {
  const { products, cartItems, onRemove, count } = props;

  return (
    <div className="Shopping-Cart">
      <div className="cart-heading">
        <p>Cart</p>
      </div>
      <hr />
      <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
      {cartItems.length !== 0 && (
        <>
          <div className="cart-item">
            <img src={Image1Thumb} className="cart-thumb" />
            <div>
              <p>{products.name}</p>
              <p>
                ${products.price} * {count}
                <span className="checkout-price">
                  {" "}
                  ${products.price * count}
                </span>
              </p>
            </div>
            <img
              src={Del}
              onClick={() => {
                onRemove();
                console.log("stop clicking");
              }}
            />
          </div>
          <div>
            <button>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Basket;
