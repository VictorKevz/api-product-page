import React, { useEffect } from "react";
import ImageSlider from "./ImageSlider";
import CancelIcon from '@mui/icons-material/Cancel';

import "../css/lightbox.css";

function LightBox({ onClose, product, lightBox, openLightBox }) {
  
  // Close the lightbox on pressing the "Esc" key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  

  return (
    <section
      className="lightbox-container"
      aria-modal="true"
      role="dialog"
      aria-labelledby="lightbox-title"
    >
      <div className="inner-lightbox">
        <ImageSlider
          product={product}
          lightBox={lightBox}
          openLightBox={openLightBox}
        />
        <button
          type="button"
          onClick={onClose}
          className="close-lightbox-btn"
          aria-label="Close lightbox"
        >
          <CancelIcon fontSize="large" className="close-lightbox-icon" />
        </button>
      </div>
    </section>
  );
}

export default LightBox;