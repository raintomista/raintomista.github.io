import React from "react";
import styles from "@components/Header/header.module.css"
import { header as content } from "@content/json/index.json"

export default (props) => (
  <header className={styles.header}
    style={{backgroundImage: `url(${content.cover})`}}>
      <div className={styles.header__content}>
      <div className={styles.header__thumbnail}
        style={{backgroundImage: `url(${content.thumbnail})`}}>
      </div>
      <h1 className={styles.header__title}>
        {content.title}
      </h1>
      <p className={styles.header__subtitle}
        dangerouslySetInnerHTML={{__html:content.subtitle}}>
      </p>
      <div className={styles.header__icons}>
        {content.socialLinks.map((social, index) => (
          <a href={social.url} key={social.name}
            className={styles.header__icon}
            target="__blank"
            title={social.name}>
              <img src={social.icon}
                alt={social.name}
              />
          </a>
        ))}
      </div>
    </div>
  </header>
)