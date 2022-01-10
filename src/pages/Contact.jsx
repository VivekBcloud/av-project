import React from "react";
import aboutstyles from "../styles/about.module.css";
import styles from "../styles/contact.module.css";
const Contact = () => {
  return (
    <div className={`${aboutstyles.container}  fluid-container`}>
      <div className={aboutstyles.headerSection}>
        <h1>Contact Us</h1>
        <img src="/svg/wave.svg" alt="wave" className={aboutstyles.waveImg} />
      </div>
      <div className={styles.innerContainer}>
        <div className={styles.agencyTitle}>Contact Form</div>
        <div className={styles.contentWrapper}>
          <form action="" className={styles.formContainer}>
            <div>
              <label htmlFor="name">
                Your Name <span>*</span>{" "}
              </label>
              <input type="text" id="name" required placeholder="Agency Name" />
            </div>
            <div>
              <label htmlFor="mobile">
                Your Phone <span>*</span>{" "}
              </label>
              <input
                type="number"
                id="mobile"
                required
                placeholder="Enter your Number"
              />
            </div>
            <div>
              <label htmlFor="email">
                Your Email <span>*</span>{" "}
              </label>
              <input type="email" id="email" required placeholder="Email" />
            </div>
            <div>
              <label htmlFor="subject">
                Subject <span>*</span>{" "}
              </label>
              <input type="text" id="subject" required placeholder="subject" />
            </div>
            <div className={styles.textAreaContainer}>
              <label htmlFor="comment">
                Comments <span>*</span>{" "}
              </label>
              <textarea
                type="text"
                id="comment"
                required
                placeholder="Message"
              />
            </div>
            <button className={styles.submitBtn}>Submit</button>
          </form>
          <div>
            <img src="/images/contact.jpg" alt="contanct-img" />
          </div>
        </div>
        <div className={styles.infoContainer}>
          <div>
            <div className={styles.infoHeading}>Founder</div>
            <div className={styles.info}>Harshit Gupta (Co-founder)</div>
            <div className={styles.info}>Ashu Mehra (Co-founder)</div>
          </div>
          <div>
            <div className={styles.infoHeading}>Email</div>
            <div>Your queries will get resolved in 24 hours.</div>
            <div>
              Write to us :
              <span className={styles.info}> support@milolives.com</span>
            </div>
          </div>
          <div>
            <div className={styles.infoHeading}>Address</div>
            <div>New Delhi, India</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
