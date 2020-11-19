module.exports = {
  siteMetadata: {
    title: "Zied Younes (ZedUnes) Personal Website",
    author: {
      shortName: "Zied",
      name: "Zied Younes",
      label:
        "Full-Stack Web Developer and Mechatronics Engineer based in Sousse, Tunisia.",
      summary:
        "Software Developer with four years of experience in web and mobile development in the field of Transportation and Logistics. \
	I usually get involved in different stages of app development: design, coding, code review, delivery, debugging, refactoring, maintenance, and assisting business in communication with clients. \
	I like taking on challenges, and learning new things.",
    },
    description: "My personal website, blog and portfolio",
    siteUrl: "https://www.zedunes.com",
    social: {
      twitter: "zedunes",
      facebook: "zedunes",
      linkedin: "zedunes",
      medium: "zedunes",
      github: "zedunes",
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/assets`,
        name: "assets",
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem",
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_TRACKING_ID,
      },
    },
    "gatsby-plugin-feed",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Zied Younes (ZedUnes) Personal Website",
        short_name: "Zied Younes",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#000000",
        display: "minimal-ui",
        icon: "content/assets/logo.png",
      },
    },
    "gatsby-plugin-react-helmet",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    "gatsby-plugin-offline",
  ],
};
