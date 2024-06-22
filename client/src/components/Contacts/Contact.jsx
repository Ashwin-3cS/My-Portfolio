import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import ContactForm from "./ContactForm";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <div><ContactForm/></div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:flashashwin2004@gmail.com" className={styles.mailer}>Gmail</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/ash-win27">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/Ashwin-3cS" target="_blank" rel="noopener noreferrer">Github</a>
        </li>
      </ul>
    </footer>
  );
};