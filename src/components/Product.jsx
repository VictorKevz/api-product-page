import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import ImageSlider from "./ImageSlider";
import LightBox from "./LightBox";

import "../css/product.css";
import { entryTextVariants } from "../variants";

function Product({
  product,
  setProduct,
  quantity,
  onIncrease,
  onDecrease,
  onToggle,
  isCartClicked,
}) {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [lightBox, setLightBox] = useState(false);

  const old_price = product.price + 0.25 * product.price;

  const getProduct = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products/10?select=title,price,description,images,thumbnail"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products...");
      }
      const data = await response.json();
      setLoading(false);
      setProduct(data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const openLightBox = () => {
    setLightBox(true);
  };

  const closeLightBox = () => {
    setLightBox(false);
  };

  if (isLoading) {
    return <p>Fetching products</p>;
  }
  if (error) {
    return <p>Failed to fetch products {error}</p>;
  }

  return (
    <section className="product-wrapper">
      <div className="product-container">
        <ImageSlider
          product={product}
          lightBox={lightBox}
          openLightBox={openLightBox}
          aria-describedby="product-images" // Describes the images section
        />
        <AnimatePresence mode="wait">
          <motion.article
            className="text-container"
            variants={entryTextVariants}
            initial="hidden"
            animate="visible"
            aria-live="polite" // Announces changes to screen readers
          >
            <span className="caption">Stronger With You Intensely</span>
            <h1 className="product-title">{product.title}</h1>
            <p className="product-parag">{product.description}</p>
            <div className="price-container">
              <p className="price">
                {`$${product.price}`} <span className="discount">25% OFF</span>
              </p>
              <p className="old-price">{`$${old_price.toFixed(2)}`}</p>
            </div>
            <div className="product-btn-wrapper">
              <div className="qty-btn-wrapper" role="group" aria-label="Quantity controls">
                <button
                  type="button"
                  className="qty-btn remove"
                  onClick={onDecrease}
                  aria-label="Decrease quantity"
                >
                  <RemoveIcon fontSize="large" className="qty-icon" />
                </button>
                <span className="qty-num" aria-live="polite" aria-atomic="true">
                  {quantity}
                </span>
                <button
                  type="button"
                  className="qty-btn add"
                  onClick={onIncrease}
                  aria-label="Increase quantity"
                >
                  <AddIcon fontSize="large" className="qty-icon" />
                </button>
              </div>
              <button
                type="button"
                className="add-to-cart-btn"
                onClick={onToggle}
                aria-label={isCartClicked ? "Hide Cart" : "Show Cart"}
              >
                <ShoppingCartRoundedIcon fontSize="large" />{" "}
                {`${isCartClicked ? "Hide Cart" : "Show Cart"}`}
              </button>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      {/* Lightbox is opened with keyboard accessibility */}
      {lightBox && (
        <LightBox
          onClose={closeLightBox}
          product={product}
          lightBox={lightBox}
          openLightBox={openLightBox}
        />
      )}
    </section>
  );
}

export default Product;