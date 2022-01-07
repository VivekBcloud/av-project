import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "../styles/navbar.module.css";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  const parent = {
    animate: {
      transition: {
        duration: 2,
      },
    },
  };
  const topBar = {
    animate: {
      rotate: "-40deg",
    },
  };
  const middleBar = {
    animate: {
      opacity: 0,
    },
  };
  const bottomBar = {
    animate: {
      rotate: "40deg",
    },
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.logo}>
          <img src="/images/logoML.png" alt="logo" />
        </div>
        <div className={styles.navItems}>
          {(toggleMenu || screenWidth > 1000) && (
            <ul className={styles.list}>
              <li className={styles.items}>
                <Link to="/">Home</Link>
              </li>
              <li className={styles.items}>
                <Link to="about">About Us</Link>
              </li>
              <li className={styles.items}>
                <Link to="agency">Agency Request</Link>
              </li>
              <li className={styles.items}>
                <Link to="contact">Contact Us</Link>
              </li>
            </ul>
          )}

          <motion.div
            className={styles.btnContainer}
            variants={parent}
            initial="initial"
            animate={toggleMenu ? "animate" : ""}
            onClick={toggleNav}
          >
            <motion.span variants={topBar}></motion.span>
            <motion.span variants={middleBar}></motion.span>
            <motion.span variants={bottomBar}></motion.span>
          </motion.div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;