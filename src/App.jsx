import Navbar from "./navbar/navbar";
import Product from "./items-component/Product";
import Description from "./text-component/Description";
import Basket from "./basket/Basket";
import { useState } from "react";
import data from "./data";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
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
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <>
      <Navbar />
      <Basket
        products={products}
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
      />
      <div className="whole-page">
        <Product />
        <Description products={products} onAdd={onAdd} />
      </div>
    </>
  );
}

export default App;
