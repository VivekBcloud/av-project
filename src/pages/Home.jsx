import { motion } from "framer-motion";
import React from "react";
import Feature from "../components/Feature";
import styles from "../styles/home.module.css";

const Home = () => {
  return (
    <>
      <div className={`${styles.container} fluid-container`}>
        <div className={styles.innerContainer}>
          <div className={styles.leftContainer}>
            <div>India's own live streaming app</div>
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
      <Feature />
    </>
  );
};

export default Home;
