import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emptyIllustration from "../assets/images/empty-cart.webp";
import DeleteIcon from "@mui/icons-material/Delete";

import "../css/cart.css";

function Cart({ quantity, product,onDelete }) {
  const total = (quantity * product.price).toFixed(2);
  return (
    <section className="cart-wrapper">
      <h2 className="cart-title">Your Cart</h2>
      {quantity === 0 ? (
        <div className="empty-cart-wrapper">
          <p className="empty-cart-parag">Your cart is empty!</p>
          <img
            src={emptyIllustration}
            alt="Empty cart illustration"
            className="empty-cart-img"
          />
        </div>
      ) : (
        <div className="filled-cart-container">
          <div className="filled-cart-wrapper">
            <img
              src={product.thumbnail}
              alt={`${product.title} thumbnail`}
              className="cart-thumbnail-img"
            />

            <article className="cart-details">
              <p className="product-name">{product.title}</p>
              <p className="cart-calculation">
                {`$${product.price} x ${quantity} : `}
                <span className="total">{`$${total}`}</span>
              </p>
            </article>
            <button type="button" className="cart-delete-btn" onClick={onDelete}>
              <DeleteIcon fontSize="large" className="delete-icon" />
            </button>
          </div>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )}
    </section>
  );
}

export default Cart;
