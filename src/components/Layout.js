import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./Header";
import Footer from "./Footer";
import SEO from "./Seo";

import styles from "./layout.module.scss";

const Layout = ({ title, description, children }) => {
  const { site: { siteMetadata } } = useStaticQuery(
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
      <Header />
      <main>{children}</main>
      <Footer social={siteMetadata.social} />
    </div>
  );
};

export default Layout;
