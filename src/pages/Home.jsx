import { motion } from "framer-motion";
import React from "react";
import styles from "../styles/home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.leftContainer}>
          India's own live streaming app
        </div>
        <div className={styles.rightContainer}>
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            src="/images/banner1.jpeg"
            alt="banner1"
            className={styles.banner1}
          />
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: "1" }}
            src="/images/banner2.jpeg"
            alt="banner2"
            className={styles.banner2}
          />
        </div>
      </div>
      <img src="/svg/wave.svg" alt="wave" className={styles.waveImg} />
    </div>
  );
};

export default Home;
