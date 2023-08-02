import Navbar from "./navbar/navbar";
import Product from "./items-component/Product";
import Description from "./text-component/Description";
import Basket from "./basket/Basket";
import { useState } from "react";
import data from "./data";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);
  const [showCart, setShowCart] = useState(false);

  const ShowBasket = () => {
    setShowCart(
      !showCart
    );
  };

  const onAdd = (product) => {
    const exist = cartItems;
    if (exist) {
      setCartItems(exist + 1);
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = () => {
    setCartItems([]);
  };

  return (
    <>
      <Navbar
        count={count}
        // shown={shown}
        // setShown={setShown}
        ShowBasket={ShowBasket}
      />
      {showCart && (
        <Basket
          products={products}
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          count={count}
          // shown={shown}
        />
      )}
      <div className="whole-page">
        <Product />
        <Description
          products={products}
          onAdd={onAdd}
          count={count}
          setCount={setCount}
          cartItems={cartItems}
        />
      </div>
    </>
  );
}

export default App;
