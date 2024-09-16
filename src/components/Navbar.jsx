import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../assets/images/logo.png";
import Cart from "./Cart";

import "../css/navbar.css";

function Navbar({ quantity, product, onDelete,isCartClicked,onToggle }) {

  
  return (
    <header className="nav-wrapper">
      <nav className="nav-container">
        <div className="logo-wrapper">
          <img src={logo} alt="Company logo" className="logo" />
        </div>
        <ul className="links-wrapper">
          <li className="nav-link">Home</li>
          <li className="nav-link">Product</li>
          <li className="nav-link">About</li>
          <li className="nav-link">Contact</li>
        </ul>
        <div className="cart-profile-wrapper">
          <button type="button" className="cart-btn" onClick={onToggle}>
            {quantity > 0 && <span className="nav-qty-num">{quantity}</span>}
            <ShoppingCartIcon fontSize="large" className="cart-icon" />
          </button>
          <button className="profile-wrapper">
            <AccountCircleIcon fontSize="large" className="profile-img" />{" "}
            <span>Login</span>
          </button>
        </div>
        {isCartClicked && (
          <Cart quantity={quantity} product={product} onDelete={onDelete} />
        )}
      </nav>
    </header>
  );
}

export default Navbar;
