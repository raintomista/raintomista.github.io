import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "@templates/Project/project.module.css"

export default function Project ({ data }) {
  const post = data.markdownRemark
  return (
    <div className={styles.project}>
      <AniLink paintDrip to="/" hex="#000000">
        <div className={styles.project__close}>
          <img src="/close.svg" alt="close"/>
        </div>
      </AniLink>
      <div className={styles.project__content}
        dangerouslySetInnerHTML={{__html: post.html }}>
      </div>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

