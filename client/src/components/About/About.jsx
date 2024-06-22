import React from 'react';
import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img 
          src={getImageUrl("about/aboutImage.png")} 
          alt="Me sitting with a laptop" 
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>I specialize in building responsive and optimized websites with a focus on user experience and performance.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I have experience in developing fast, scalable, and efficient backend systems and APIs.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/blockchain.png")} alt="Blockchain icon" className={styles.blockchainImg} />
            <div className={styles.aboutItemText}>
              <h3>Blockchain Developer</h3>
              <p>I develop EVM-based smart contracts and DApps on the Ethereum Blockchain, ensuring secure and decentralized solutions.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
