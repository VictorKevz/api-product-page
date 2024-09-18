


export const cartVariants = {
    hidden: { 
      opacity: 0.3, 
      y: "-100%", 
      scale: 0.5 
    },
    visible: {
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "tween", 
        ease: "easeInOut", 
        duration: 0.5 
      }
    }
  };

  export const entryTextVariants = {
    hidden: { 
      opacity: 0, 
      x: "-100%", 
      scale: 0 
    },
    visible: {
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { 
        type: "tween", 
        ease: "easeInOut", 
        duration: 1,
        delay:0.3 
      }
    }
  };

  export const entrySliderVariants = {
    hidden: { 
      opacity: 1, 
      x: "100%", 
      
    },
    visible: {
      opacity: 1, 
      x: 0, 
      
      transition: { 
        type: "tween", 
        ease: "easeInOut", 
        duration: 1,
        delay:0.3 
      }
    }
  };
  export const SliderVariants = {
    hidden: { 
        opacity: 1, x: 0,scale:0.2,  
    },
    visible: {
      opacity: 1, 
      x: 0, 
      scale:1,
      
      transition: { 
        type: "spring", 
        damping:25,
        stiffness:120,
        duration: 0.8,
        delay:0.1 
      }
    }
  };
  export const maskVariants = {
    hidden: { 
      opacity: 0, 
      x: "-100%", 
      
    },
    visible: {
      opacity: 1, 
      x: 0, 
      
      transition: { 
        type: "tween", 
        ease: "easeInOut", 
        duration: 0.6,  
      }
    },
    exit:{opacity:0,x: "-100%",
        transition: { 
            type: "tween", 
            ease: "easeInOut", 
            duration: 0.6,  
          }
    }
  };