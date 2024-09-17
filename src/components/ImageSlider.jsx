import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import "../css/slider.css";

function ImageSlider({ product,openLightBox,lightBox}) {
  const [index, setIndex] = useState(0);

  const updateCurrentIndex = (currentIndex) => {
    setIndex(currentIndex);
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };
  
  return (
    
    <article className="image-container">
      <div className="main-image-wrapper">
        
        <button type="button" onClick={openLightBox}>
          <img
            src={product.images[index]}
            alt={product.title}
            className="main-img"
          />
        </button>
        
        <button
          type="button"
          className={`navigation-btn prev ${lightBox ? "show" :"hide"}`}
          onClick={prevSlide}
        >
          <KeyboardArrowLeftIcon className="slider-icon" fontSize="large" />
        </button>

        <button
          type="button"
          className={`navigation-btn next ${lightBox ? "show" :"hide"}`}
          onClick={nextSlide}
        >
          <KeyboardArrowRightIcon className="slider-icon" fontSize="large" />
        </button>
       
      </div>
      <div className="thumbnails-container">
        {product.images.map((img, i) => {
          let isActive = i === index;

          return (
            <button
              type="button"
              key={i}
              onClick={() => updateCurrentIndex(i)}
              className={`thumbnail-wrapper`}
            >
              <img
                src={img}
                alt="Product thumbnail"
                className={`thumbnail-img ${isActive && "active"}`}
              />
            </button>
          );
        })}
      </div>
    </article>
    
    
  );
}

export default ImageSlider;
