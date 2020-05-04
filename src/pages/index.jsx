import React from "react"
import { graphql } from "gatsby"
import SEO from "@components/SEO"
import Header from "@components/Header"
import Showcase from "@components/Showcase"
import Footer from "@components/Footer"

export default ({ data }) => (
  <React.Fragment>
    <SEO title={data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
      author={data.site.siteMetadata.author}
    />
    <Header />
    <Showcase projects={data.allMarkdownRemark.edges} />
    <Footer />
  </React.Fragment>
)

export const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        title,
        description,
        author
      }
    }
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
            tags
            featuredImage {
              publicURL
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
