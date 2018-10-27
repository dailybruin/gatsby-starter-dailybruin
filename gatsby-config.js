module.exports = {
  siteMetadata: {
    siteName: 'Gatsby Default Starter',
    description: '',
    url: '',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
