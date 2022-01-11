import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "../styles/navbar.module.css";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [show, setShow] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  const scrollToTop = () => {
    window.scroll(0, 0);
  };
  const navbarControl = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
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

    window.addEventListener("scroll", navbarControl);
    return () => {
      window.removeEventListener("scroll", navbarControl);
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div
      className={`${styles.container}  ${
        show && styles.containerOnScroll
      } fluid-container`}
    >
      <div className={`${styles.innerContainer} `}>
        <div className={styles.logo}>
          <Link to="/">
            <img src="/images/logoML.png" alt="logo" />
          </Link>
        </div>
        <div className={styles.navItems}>
          {(toggleMenu || screenWidth > 1000) && (
            <div className={styles.list}>
              <Link
                className={styles.anchor}
                onClick={() => {
                  setToggleMenu(false);
                  scrollToTop();
                }}
                to="/"
              >
                <div className={styles.items}>Home</div>
              </Link>
              <Link
                className={styles.anchor}
                onClick={() => {
                  setToggleMenu(false);
                  scrollToTop();
                }}
                to="about"
              >
                <div className={styles.items}>About Us</div>
              </Link>
              <Link
                className={styles.anchor}
                onClick={() => {
                  setToggleMenu(false);
                  scrollToTop();
                }}
                to="agency"
              >
                <div className={styles.items}>Agency Request</div>
              </Link>
              <Link
                className={styles.anchor}
                onClick={() => {
                  setToggleMenu(false);
                  scrollToTop();
                }}
                to="contact"
              >
                <div className={styles.items}>Contact Us</div>
              </Link>
            </div>
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
      {show && (
        <div
          className={styles.scrollToTop}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <img src="/images/up-arrow.png" alt="up" />
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Navbar;
