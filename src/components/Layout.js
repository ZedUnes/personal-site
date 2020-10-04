import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./Header";
import Footer from "./Footer";
import SEO from "./Seo";

import styles from "./layout.module.scss";

const Layout = ({ title, description, children }) => {
  const {
    site: { siteMetadata },
    avatar: {
      childImageSharp: { fixed: avatar },
    },
  } = useStaticQuery(
    graphql`
      query BioQuery {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
              facebook
              github
              medium
              linkedin
            }
          }
        }
        avatar: file(absolutePath: { regex: "/logo.png/" }) {
          childImageSharp {
            fixed(width: 100, height: 100, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  return (
    <div className={styles.container}>
      <SEO
        defaultTitle={siteMetadata.title}
        metaDescription={description || siteMetadata.description}
        title={title}
      />
      <Header avatar={avatar}/>
      <main>{children}</main>
      <Footer social={siteMetadata.social} />
    </div>
  );
};

export default Layout;
