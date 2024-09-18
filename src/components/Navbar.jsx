import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/images/logo.png";
import Cart from "./Cart";

import "../css/navbar.css";
import { maskVariants } from "../variants";

function Navbar({ quantity, product, onDelete, isCartClicked, onToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="nav-wrapper">
      <nav className="nav-container" aria-label="Main Navigation">
        <div className="logo-wrapper">
          
          <button 
            type="button" 
            onClick={toggleMenu} 
            className="toggle-menu" 
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen} // Indicates if the menu is open or closed
          >
            {menuOpen ? (
              <CloseIcon fontSize="large" className="menu-icon" />
            ) : (
              <MenuIcon fontSize="large" className="menu-icon" />
            )}
          </button>
          <img src={logo} alt="Company logo" className="logo" />
        </div>

        <motion.ul 
          className={`links-wrapper ${menuOpen && "open"}`}
          variants={maskVariants}
          initial="hidden"
          animate="visible"
          key={menuOpen}
          exit="exit"
          role="menu" //role to indicate it's a navigation menu
        >
          <li className="nav-link" role="menuitem">
            <a href="#home">Home</a>
          </li>
          <li className="nav-link" role="menuitem">
            <a href="#product">Product</a>
          </li>
          <li className="nav-link" role="menuitem">
            <a href="#about">About</a>
          </li>
          <li className="nav-link" role="menuitem">
            <a href="#contact">Contact</a>
          </li>
        </motion.ul>

        <div className="cart-profile-wrapper">
          {/* Accessible button for cart */}
          <button 
            type="button" 
            className="cart-btn" 
            onClick={onToggle} 
            aria-label="View shopping cart" 
            aria-haspopup="true" // Indicates that clicking will open the cart
            aria-expanded={isCartClicked} // Reflects cart open/closed state
          >
            {quantity > 0 && <span className="nav-qty-num">{quantity}</span>}
            <ShoppingCartIcon fontSize="large" className="cart-icon" />
          </button>

          {/* Profile/Login button */}
          <button 
            className="profile-wrapper" 
            aria-label="View user profile or login"
          >
            <AccountCircleIcon fontSize="large" className="profile-img" />{" "}
            <span className="login">Login</span>
          </button>
        </div>

        
        {isCartClicked && (
          <Cart quantity={quantity} product={product} onDelete={onDelete} />
        )}
      </nav>

      <motion.div 
        className={`mask ${menuOpen && "show"}`}
        variants={maskVariants}
        initial="hidden"
        animate="visible"
        key={menuOpen}
        exit="exit"
        aria-hidden={!menuOpen} 
      ></motion.div>
    </header>
  );
}

export default Navbar;