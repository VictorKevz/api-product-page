import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

function App() {
  const [product, setProduct] = useState([]);
  const [quantity, setQty] = useState(0);
  const [isCartClicked, setIsCartClicked] = useState(false);

  //Retrieve previous quantity from local storage
  useEffect(() => {
    const savedQty = JSON.parse(localStorage.getItem("cart"));
    if (savedQty) {
      setQty(savedQty);
    }
  }, []);

  // Update local storage's quantity everytime quantity changes!
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(quantity));
  }, [quantity]);

  const increaseQuantity = () => {
    setQty((prevQuantity) => prevQuantity + 1);
  };
  const decreaseQuantity = () => {
    setQty((prevQuantity) => (prevQuantity === 0 ? 0 : prevQuantity - 1));
  };
  const deleteCart = () => {
    setQty(0);
  };
  const toggleCart = () => {
    setIsCartClicked(!isCartClicked);
  };
  return (
    <main className={`outer-container `}>
      <div className="inner-container">
        <Navbar
          quantity={quantity}
          product={product}
          onDelete={deleteCart}
          isCartClicked={isCartClicked}
          onToggle={toggleCart}

        />
        <Product
          product={product}
          setProduct={setProduct}
          quantity={quantity}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          onToggle={toggleCart}
          isCartClicked={isCartClicked}

        />
      </div>
    </main>
  );
}

export default App;
