import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hey<span>!</span> { <img src={getImageUrl("hiImage/hi.png")} alt="hi emoji" className={styles.hi} /> }
            <br /> I'm AshWin</h1>
            <p className={styles.description}>
                I'm a Full-Stack Blockchain Developer
            </p>
            <a href="#contact" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img
            src={getImageUrl("hero/heroImage.png")}
            alt="Hero image of me"
            className={styles.heroImg}
        />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
)

}
