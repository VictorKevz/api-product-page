import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageSlider from "./ImageSlider";
import CancelIcon from '@mui/icons-material/Cancel';

import "../css/lightbox.css";

function LightBox({ onClose,product,lightBox,openLightBox }) {
  return (
    <section className="lightbox-container">
      <div className="inner-lightbox">
        <ImageSlider
        product={product}
        lightBox={lightBox}
        openLightBox={openLightBox}
         />
        <button type="button" onClick={onClose} className="close-lightbox-btn">
          <CancelIcon fontSize="large" className="close-lightbox-icon"/>
        </button>
      </div>
    </section>
  );
}

export default LightBox;
