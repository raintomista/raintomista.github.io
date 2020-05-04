import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "@components/SEO"
import styles from "@templates/Project/project.module.css"

export default function Project ({ data }) {
  const post = data.markdownRemark
  return (
    <div className={styles.project}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <AniLink paintDrip to="/" hex="#000000">
        <div className={styles.project__close}>
          <img src="/close.svg" alt="close"/>
        </div>
      </AniLink>
      <article className={styles.project__container}> 
        <header>
          <h2 className={styles.project__category}>
            {post.frontmatter.duration} &middot; {post.frontmatter.tags[0]}
          </h2>
          <h1 className={styles.project__title}>
            {post.frontmatter.title}
          </h1>
        </header>
        <section className={styles.project__content}
          dangerouslySetInnerHTML={{__html: post.html }}>
        </section>
      </article>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title,
        tags,
        duration
      }
      excerpt
    }
  }
`

