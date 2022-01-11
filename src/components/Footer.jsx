import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "../styles/footer.module.css";
import { FacebookSvg, InstaSvg, LinkedinSvg } from "../data/useSvg";
const Footer = () => {
  const scrollToTop = () => {
    window.scroll(0, 0);
  };
  return (
    <div className={styles.container}>
      <div className={`${styles.innerContainer} fluid-container`}>
        <div className={styles.milo}>
          <h3 className={styles.footerTitles}>About Milo Lives</h3>
          <div>
            Milo Live app is an Indian app with the motive to bring every single
            talent on this platform.
          </div>
          <div className={styles.socialLogos}>
            <a
              href="https://www.facebook.com/miloliveofficialpage/?referrer=whatsapp"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookSvg />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <InstaSvg />
            </a>
            <a
              href="https://www.linkedin.com/company/milo-live/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinSvg />
            </a>
          </div>
        </div>
        <div className={styles.navi}>
          <h3 className={styles.footerTitles}>Navigation</h3>
          <div>
            <Link className={styles.anchor} onClick={scrollToTop} to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className={styles.anchor} onClick={scrollToTop} to="/about">
              About
            </Link>
          </div>
          <div>
            <Link className={styles.anchor} onClick={scrollToTop} to="/agency">
              Agency Request
            </Link>
          </div>
          <div>
            <Link className={styles.anchor} onClick={scrollToTop} to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
        <div className={styles.connect}>
          <h3 className={styles.footerTitles}>Connect Us</h3>
          <div>
            <a
              className={styles.anchor}
              href="https://www.facebook.com/105234721361316?referrer=whatsapp"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
          <div>
            <a
              className={styles.anchor}
              href="https://www.linkedin.com/company/milo-live"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </div>
          <div>
            <a
              className={styles.anchor}
              href="https://www.instagram.com/invites/contact/?i=1viag84e2dm97&amp;utm_content=jm3z738"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className={styles.policy}>
          <h3 className={styles.footerTitles}>Policy</h3>
          <Link to="terms">
            <div className={styles.anchor} onClick={scrollToTop}>
              Terms & Conditions
            </div>
          </Link>
          <Link to="policy">
            <div className={styles.anchor} onClick={scrollToTop}>
              Privacy Policy
            </div>
          </Link>
        </div>
      </div>
      <div className={`${styles.copyright} fluid-container`}>
        Powered by
        <a
          className={styles.anchor}
          href="https://analyticsvalley.com/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Analytics Valley
        </a>
      </div>
      <Outlet />
    </div>
  );
};

export default Footer;
