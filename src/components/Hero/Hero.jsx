import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Bradley</h1>
        <p className={styles.description}>
        I specialize in designing secure databases, implementing cloud solutions, and developing web and mobile applications. With expertise in networking and cybersecurity, I create efficient, scalable, and tailored systems for every client.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="https://i.ibb.co/jfByxts/bradley-Corro-Avatar.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};