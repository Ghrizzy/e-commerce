import Logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import Profileimage from "../images/image-avatar.png";
import { GiHamburgerMenu } from "react-icons/gi";
import {useState } from "react";
// import { LiaTimesSolid } from "react-icons/Li";
const Navbar = (props) => {
  const {count, ShowBasket} = props
  const [Show, setShow] = useState(false);
  const HandleMouseEnter = () => {
    setShow(true);
  };

  const HandleMouseLeave = () => {
    setShow(false);
  };

  return (
    <div>
      <div className="nav">
        <div className="nav-left">
          <GiHamburgerMenu className="menu" onClick={HandleMouseEnter} />
          <img src={Logo} className="logo" />
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
          <img src={cart} className="cart" 
          onClick={ShowBasket}
          />
          <p className="cart-number">{count}</p>
          <img src={Profileimage} className="profie-img" />
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Navbar;
