module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "boilerplate",
  },
  plugins: ["gatsby-plugin-sass", `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false
      }
    }],
};
