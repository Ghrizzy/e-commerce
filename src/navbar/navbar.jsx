import Logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import Image1Thumb from "../images/image-product-1-thumbnail.jpg";
import Profileimage from "../images/image-avatar.png";
import Del from "../images/icon-delete.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
// import { LiaTimesSolid } from "react-icons/Li";
const Navbar = ({ countup }) => {
  const [Show, setShow] = useState(false);

  const HandleMouseEnter = () => {
    setShow(true);
  };
  const HandleMouseLeave = () => {
    setShow(false);
  };

  //   const [cartValue, setCartValue] = useState(localStorage.getItem("quantity"))
  // useEffect(() => {
  //    setCartValue(cartValue)
  //   console.log(cartValue)
  // }, [cartValue]);

  return (
    <div>
      <div className="nav">
        <div className="nav-left">
          <GiHamburgerMenu className="menu" onClick={HandleMouseEnter} />
          <img src={Logo} className="logo" />
          {/* {Show && ( */}
          <div className={`${Show ? "nav-list" : "desktop-navlist"}`}>
            <div className={`${Show ? "nav-links" : ""}`}>
              <button className="x-mark" onClick={HandleMouseLeave}>
                X
              </button>
              <ul className="nav-items">
                <li>
                  <a>Collections</a>
                </li>
                <li>
                  <a>Men</a>
                </li>
                <li>
                  <a>Women</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <div className={`${Show ? "transparent" : ""}`}></div>
          </div>
          {/* // )} */}
        </div>
        <div className="nav-right">
          <img src={cart} className="cart" />
          <p className="cart-number">{countup}</p>
          <img src={Profileimage} className="profie-img" />
        </div>
      </div>
      <div className="Shopping-Cart">
        <div className="cart-heading">
          <p>Cart</p>
        </div>
        <hr />
        <div className="cart-item">
          <img src={Image1Thumb} className="cart-thumb" />
          <div>
            <p>Fall Limited Edition Sneakers</p>
            <p>
              $125.00 * 3 <span className="checkout-price">$375.00</span>
            </p>
          </div>
          <img src={Del} />
        </div>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Navbar;
