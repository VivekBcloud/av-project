import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "../styles/feature.module.css";
import { cardData } from "../data/cardData";
const Feature = () => {
  const FeatureCard = ({ card }) => {
    const animation = useAnimation();
    const [contentRef, inView] = useInView({
      triggerOnce: true,
      rootMargin: "-100px",
    });

    useEffect(() => {
      if (inView) {
        animation.start("visible");
      }
    }, [animation, inView]);
    const cardAnimation = {
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          // ease: "ease-in",
        },
      },
      hidden: {
        opacity: 0,
        y: 72,
      },
    };
    return (
      <motion.div
        ref={contentRef}
        animate={animation}
        initial="hidden"
        variants={cardAnimation}
        className={styles.cardContainer}
        style={card.bg}
      >
        <img src={card.cardImage} alt={card.cardTitle} />
        <h3>{card.cardTitle}</h3>
      </motion.div>
    );
  };

  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);
  const cardAnimation = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        // ease: "ease-in",
      },
    },
    hidden: {
      opacity: 0,
      y: 72,
    },
  };
  return (
    <div className={`${styles.container} fluid-container`}>
      <motion.div
        ref={contentRef}
        animate={animation}
        initial="hidden"
        variants={cardAnimation}
        className={styles.heading}
      >
        Features
      </motion.div>
      <div className={styles.cardOuterContainer}>
        {cardData.map((card, index) => {
          return <FeatureCard key={index} card={card} />;
        })}
      </div>
    </div>
  );
};

export default Feature;
