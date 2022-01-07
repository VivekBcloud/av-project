import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "../styles/feature.module.css";
import { cardData } from "../data/cardData";
const Feature = () => {
  const FeatureCard = ({ first, second }) => {
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
          ease: [0.6, 0.05, -0.01, 0.9],
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
        className={styles.cardOuterContainer}
      >
        <div className={styles.cardContainer} style={first.bg}>
          <img src={first.cardImage} alt={first.cardTitle} />
          <h3>{first.cardTitle}</h3>
        </div>
        <div className={styles.cardContainer} style={second.bg}>
          <img src={second.cardImage} alt={second.cardTitle} />
          <h3>{second.cardTitle}</h3>
        </div>
      </motion.div>
    );
  };

  return (
    <div className={`${styles.container} fluid-container`}>
      <div className={styles.heading}>Features</div>
      {cardData.map((card, index) => {
        return (
          <FeatureCard key={index} first={card.first} second={card.second} />
        );
      })}
    </div>
  );
};

export default Feature;
