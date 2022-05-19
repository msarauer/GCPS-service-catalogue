require("dotenv").config({ path: ".env" });
var buildDate = new Date().toISOString().split("T")[0];

module.exports = {
  siteMetadata: {
    title: `Government of Canada Programs and solutions (GCPS) service catalogue / Gouvernement de Canada programmes et solutions (GCPS) catalogue de services`,
    titleEnglish: `Government of Canada Programs and solutions (GCPS) service catalogue`,
    titleFrench: `Gouvernement de Canada programmes et solutions (GCPS) catalogue de services`,
    description: `This is the main site for Government of Canada Programs and solutions (GCPS) service catalogue / FR This is the main site for Government of Canada Programs and solutions (GCPS) service catalogue`,
    descriptionEnglish: `This is the main site for Government of Canada Programs and solutions (GCPS) service catalogue`,
    descriptionFrench: `FR This is the main site for Government of Canada Programs and solutions (GCPS) service catalogue`,
    authorEnglish: `Government of Canada, Public Services and Procurement Canada, Digital Services Branch, GCPS`,
    authorFrench: `FR Government of Canada, Public Services and Procurement Canada, Digital Services Branch, GCPS`,
    siteUrl: `https://nice-water-0f0af8510.1.azurestaticapps.net/`,
    languages: {
      langs: ["en", "fr"],
      defaultLangKey: "en",
    },
    dateIssued: "2022-05-01",
    dateModified: buildDate,
    subjectEnglish: "GCPS, Service Catalogue, Services, Catalog, Catalogue",
    subjectFrench: "FR GCPS, Service Catalogue, Services, Catalog, Catalogue",
    keywordsEnglish: "GCPS, Service Catalogue, Services, Catalog, Catalogue",
    keywordsFrench: "FR GCPS, Service Catalogue, Services, Catalog, Catalogue",
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        linkResolver: require("./src/linkResolver").linkResolver,
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: false,
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: true,
        id: process.env.HOTJAR_ID,
        sv: process.env.HOTJAR_SNIPPET_VERSION,
      },
    },
  ],
};
