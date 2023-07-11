import Cart from "../images/icon-cart.svg";
import { useState } from "react";
const Description = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="descripion-div">
      <div>
        <p className="company">SNEAKER COMPANY</p>
        <h1>
          Fall Limited Edition <br /> Sneakers
        </h1>
        <p className="info">
          These low-profile sneakers are your perfect casual wear <br />{" "}
          companion. Featuring a durable rubber outer sole, they&#39;ll <br />{" "}
          withstand anything the weather can offer.
        </p>
        <div className="price">
          <p className="new-price">$125.00</p>
          <p className="discount">50%</p>
        </div>
        <p className="actual-price">$250.00</p>
      </div>
      <div className="add-cart">
        <div className="add-delete">
          <button onClick={() => setCount(count - 1)}>-</button>
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        <button className="cart-button">
          <img src={Cart} />
          <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
};

export default Description;
