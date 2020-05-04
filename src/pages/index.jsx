import React from "react"
import { graphql } from "gatsby"
import Header from "@components/Header"
import Showcase from "@components/Showcase"
import Footer from "@components/Footer"

export default ({ data }) => (
  <React.Fragment>
    <Header />
    <Showcase projects={data.allMarkdownRemark.edges} />
    <Footer />
  </React.Fragment>
)

export const query = graphql`
  query MyQuery {
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
