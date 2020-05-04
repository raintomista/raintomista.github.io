import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Card from "@components/Showcase/showcaseCard"
import styles from "@components/Showcase/showcase.module.css"
import { showcase as content } from "@content/json/strings.json"

export default ({ projects }) => (
  <section className={styles.showcase}>
    <h3 className={styles.showcase__title}>
      {content.title}
    </h3>
    <div className={styles.showcase__grid}>
      {projects.map((project) => (
        <AniLink paintDrip to={project.node.fields.slug} hex="#000000">
          <div className={styles.showcase__project} key={project.node.id}>
            <Card title={project.node.frontmatter.title}
              subtitle={project.node.frontmatter.tags[0]}
              thumbnail={project.node.frontmatter.featuredImage.publicURL}
            />
          </div>
        </AniLink>
      ))}
    </div>
  </section>
)
