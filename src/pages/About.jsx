import React from "react";
import styles from "../styles/about.module.css";

const About = () => {
  return (
    <div className={`${styles.container}  fluid-container`}>
      <div className={styles.headerSection}>
        <h1>About us</h1>
        <img src="/svg/wave.svg" alt="wave" className={styles.waveImg} />
      </div>
      <div className={`${styles.innerContainer}`}>
        <div className={styles.aboutSection}>
          <div className={styles.leftSection}>
            <div className={styles.title}>ABOUT US</div>
            <div className={styles.desc}>
              Milo Live Entertainment is India's own LIVE Streaming platform.
              Milo Live app is an Indian app with the motive to bring every
              single talent on this platform. It allows you to make friends &
              earn money by showcasing your talent at anytime & anywhere.
            </div>
          </div>
          <div className={styles.rightSection}>
            <img src="/svg/undraw_svg_2.svg" alt="about-img" />
          </div>
        </div>
        <div className={`${styles.aboutSection} ${styles.aboutSection46}`}>
          <div className={styles.leftSection}>
            <img src="/svg/undraw_svg_3.svg" alt="live-img" />
          </div>
          <div className={styles.rightSection}>
            <div className={styles.title}>
              Milo Live provides all-in-one platform for:
            </div>
            <div className={styles.desc}>
              Live Video Streaming Live Messaging Live Gaming (Players Knockout)
              Huge Earnings
            </div>
          </div>
        </div>
        <div className={styles.aboutSection}>
          <div className={styles.leftSection}>
            <div className={styles.title}>Mission</div>
            <div className={styles.desc}>
              To provide a seamless platform for general public to showcase
              their talent.
            </div>
          </div>
          <div className={styles.rightSection}>
            <img src="/images/mission.jpg" alt="mission-img" />
          </div>
        </div>
        <div className={`${styles.aboutSection} ${styles.aboutSection46}`}>
          <div className={styles.leftSection}>
            <img src="/svg/undraw_svg_4.svg" alt="why-img" />
          </div>
          <div className={styles.rightSection}>
            <div className={styles.title}>Why Us</div>
            <div className={styles.desc}>
              During the Covid-19 pandemic, various apps were banned by Indian
              government. It was a great opportunity for Indians to bring the
              similar platforms of their own country. Harshit and Ashu both
              decided to start the Live Streaming App, where people can join
              them with the same trust along with huge earnings compare to
              previous ones. It’s an Indian app focused on delivering quality of
              live streaming to everyone across the world, where you can
              showcase your talent, expand your network and also earn at the
              same time. It’s a great opportunity for freelancers to earn
              without any investment. The more your network, the more will be
              your earnings.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
