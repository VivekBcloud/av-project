import React from "react";

import aboutstyles from "../styles/about.module.css";
import styles from "../styles/agency.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";
import AnimateComp from "../components/AnimateComp";
const Agency = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div className={`${aboutstyles.container}  fluid-container`}>
      <div className={aboutstyles.headerSection}>
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Agency Request
        </motion.h1>
        <img src="/svg/wave.svg" alt="wave" className={aboutstyles.waveImg} />
      </div>
      <div className={styles.innerContainer}>
        <AnimateComp>
          <div className={styles.agencyTitle}>Agency Request</div>
        </AnimateComp>
        <AnimateComp>
          <form
            action="agencySendMail.php"
            method="POST"
            className={styles.formContainer}
          >
            <div>
              <label htmlFor="name">
                Agency Name <span>*</span>{" "}
              </label>
              <input type="text" id="name" required placeholder="Agency Name" />
            </div>
            <div>
              <label htmlFor="website">Agency Website</label>
              <input type="text" id="website" placeholder="Agency Website" />
            </div>
            <div>
              <label htmlFor="contactName">
                Contact Person Name <span>*</span>{" "}
              </label>
              <input
                type="text"
                id="contactName"
                required
                placeholder="Contact Person Name "
              />
            </div>
            <div>
              <label htmlFor="designation">
                Contact Person Designation<span>*</span>{" "}
              </label>
              <input
                type="text"
                id="designation"
                required
                placeholder="Contact Person Designation "
              />
            </div>
            <div>
              <label htmlFor="mobile">
                Mobile Number <span>*</span>{" "}
              </label>
              <input
                type="number"
                id="mobile"
                required
                placeholder="Mobile Number"
              />
            </div>
            <div>
              <label htmlFor="email">
                Your Email <span>*</span>{" "}
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="country">
                Country <span>*</span>{" "}
              </label>
              <input type="text" id="country" required placeholder="Country" />
            </div>
            <div>
              <label htmlFor="state">
                State <span>*</span>{" "}
              </label>
              <input type="text" id="state" required placeholder="State" />
            </div>
            <div>
              <label htmlFor="streamer">
                No. of Streamers <span>*</span>{" "}
              </label>
              <input
                type="text"
                id="streamer"
                required
                placeholder="No. of Streamers"
              />
            </div>
            <div>
              <label htmlFor="experience">
                Work Experience <span>*</span>{" "}
              </label>
              <input
                type="text"
                id="experience"
                required
                placeholder="Work Experience"
              />
            </div>
            <div>
              <label htmlFor="referred">Referred By(Optional) </label>
              <input type="text" id="referred" placeholder="Referred By" />
            </div>
            <div>
              <ReCAPTCHA
                sitekey="6Ld64h8cAAAAAOcn4TykeXKj0ii93QMbKF8RguM3"
                onChange={onChange}
              />
            </div>
            <button className={styles.submitBtn}>Submit</button>
          </form>
        </AnimateComp>
      </div>
    </div>
  );
};

export default Agency;
