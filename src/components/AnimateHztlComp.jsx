import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AnimateComp = ({ children, leftDir }) => {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-150px",
  });
  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);
  const cardAnimation = leftDir
    ? {
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.6,
            // ease: "ease-in",
          },
        },
        hidden: {
          opacity: 0,
          x: -72,
        },
      }
    : {
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.6,
            // ease: "ease-in",
          },
        },
        hidden: {
          opacity: 0,
          x: 72,
        },
      };
  return (
    <motion.div
      ref={contentRef}
      animate={animation}
      initial="hidden"
      variants={cardAnimation}
    >
      {children}
    </motion.div>
  );
};

export default AnimateComp;
