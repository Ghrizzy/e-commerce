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

  const onAdd = (product) => {
    const exist = cartItems;
    if (exist) {
      setCartItems(
         exist.qty + 1 
        
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems;
      if (exist) {
        setCartItems(exist.qty - 1);
      } else {
        setCartItems([cartItems, { product, qty: 1 }]);
      }
    // if (exist.qty === 1) {
    //   setCartItems(cartItems.filter((x) => x !== product.id));
    // } else {
    //   setCartItems(
    //      exist.qty - 1 
    //   );
    // }
  };

  return (
    <>
      <Navbar />
      <Basket
        products={products}
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        count={count}
      />
      <div className="whole-page">
        <Product />
        <Description products={products} onAdd={onAdd} count={count} setCount={setCount} />
      </div>
    </>
  );
}

export default App;
