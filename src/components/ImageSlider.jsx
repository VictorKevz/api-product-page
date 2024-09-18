import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import "../css/slider.css";
import { entrySliderVariants, SliderVariants } from "../variants";

function ImageSlider({ product, openLightBox, lightBox }) {
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
    <motion.article
      className="image-container"
      variants={entrySliderVariants}
      initial="hidden"
      animate="visible"
      aria-roledescription="carousel" 
      aria-label="Product image gallery"
      tabIndex="0"
    >
      <div className="main-image-wrapper">
        <motion.button
          type="button"
          onClick={openLightBox}
          key={product.images[index]}
          variants={SliderVariants}
          initial="hidden"
          animate="visible"
          aria-label={`View larger image of ${product.title}`}
        >
          <img
            src={product.images[index]}
            alt={`${product.title} image ${index + 1}`}
            className="main-img"
          />
        </motion.button>

        <button
          type="button"
          className={`navigation-btn prev ${lightBox ? "show" : "hide"}`}
          onClick={prevSlide}
          aria-label="Previous image"
        >
          <KeyboardArrowLeftIcon className="slider-icon" fontSize="large" />
        </button>

        <button
          type="button"
          className={`navigation-btn next ${lightBox ? "show" : "hide"}`}
          onClick={nextSlide}
          aria-label="Next image"
        >
          <KeyboardArrowRightIcon className="slider-icon" fontSize="large" />
        </button>
      </div>

      <div className="thumbnails-container" role="group" aria-label="Product thumbnails">
        {product.images.map((img, i) => {
          const isActive = i === index;

          return (
            <button
              type="button"
              key={i}
              onClick={() => updateCurrentIndex(i)}
              className={`thumbnail-wrapper`}
              aria-label={`Show image ${i + 1} of ${product.images.length}`}
              aria-pressed={isActive}
            >
              <img
                src={img}
                alt={`Thumbnail ${i + 1}`}
                className={`thumbnail-img ${isActive && "active"}`}
              />
            </button>
          );
        })}
      </div>
    </motion.article>
  );
}

export default ImageSlider;