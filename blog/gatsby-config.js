// environemnt variables

// require("dotenv").config({
//   path: `.env.${process.env.development}`,
// })


module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },


    // Contentful

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ccp7n98trjxu`,
        accessToken: `6106a667817965026820e2917a01ab7cbddf6b8d2e18954100598c5f4eff2e3a`,
      },
    },

    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: `fs7ksa3tw5d1`,
    //     accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
    //     host: `preview.contentful.com`,
    //   },
    // },    

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],

}
