import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
      <img
              src="https://i.ibb.co/fdTTwv5/avatar-pc-developer.png"
              alt="UI icon"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
              I build end-to-end web and mobile applications with optimized performance and clean architecture.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Cloud Computing</h3>
              <p>
              I design and deploy scalable cloud solutions to improve efficiency and reliability.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Cybersecurity Specialist</h3>
              <p>
              I implement robust security practices to protect systems and data from threats.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};