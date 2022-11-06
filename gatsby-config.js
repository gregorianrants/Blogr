module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Blogr",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
      `gatsby-plugin-styled-components`,
      {
          resolve: `gatsby-omni-font-loader`,
          options: {
              enableListener: true,
              preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
              web: [
                  {
                      name: `Overpass`,
                      //file: `https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap`,
                      file: `https://fonts.googleapis.com/css2?family=Overpass:wght@300;600&family=Ubuntu:ital,wght@0,500;0,700;1,400&display=swap" rel="stylesheet`,
                  },
              ],
          },
      },
  ],
};
