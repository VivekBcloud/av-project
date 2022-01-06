import React from "react";
import { Outlet } from "react-router-dom";
import styles from "../styles/footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.milo}>
          <h2 className={styles.footerTitles}>About Milo Lives</h2>
          <div>
            Milo Live app is an Indian app with the motive to bring every single
            talent on this platform.
          </div>
        </div>
        <div className={styles.navi}>
          <h2 className={styles.footerTitles}>Navigation</h2>
          <div>Home</div>
          <div>About</div>
          <div>Agency Request</div>
          <div>Contact Us</div>
        </div>
        <div className={styles.connect}>
          <h2 className={styles.footerTitles}>Connect Us</h2>
          <div>Facebook</div>
          <div>Linkedin</div>
          <div>Instagram</div>
        </div>
        <div className={styles.policy}>
          <h2 className={styles.footerTitles}>Policy</h2>
          <div>Terms & Conditions</div>
          <div>Privacy Policy</div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Footer;
