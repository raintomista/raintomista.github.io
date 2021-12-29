import React from "react"
import styles from '@components/Showcase/showcase.module.css'

export default (props) => (
  <div className={styles.card}>
    <img className={styles.card__front}
      src={props.thumbnail}
      alt={props.title}
    />
    <div className={styles.card__back}>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  </div>
)
