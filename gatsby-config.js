module.exports = {
  siteMetadata: {
    title: `Rain Tomista`,
    description: `A product-centric frontend engineer based in 🇵🇭  Manila, Philippines.`,
    author: `Rainier Francis Tomista`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rain Tomista`,
        short_name: `R+`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `static/favicon.svg`
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@": "src",
          "@components": "src/components",
          "@content": "src/content",
          "@templates": "src/templates"
        },
        extensions: [
          "js",
          "css",
          "json"
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `featured-projects`,
        path: `${__dirname}/src/content/featured-projects`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-images`,
        path: `${__dirname}/src/content/images`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 650,
              showCaptions: ['alt']
            }
          }
        ]
      }
    }
  ],
}
