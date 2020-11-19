import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Image from "../components/Image";

const HomePage = ({
  data: {
    site: {
      siteMetadata: { author },
    },
    avatar: {
      childImageSharp: { fixed: avatar },
    },
  },
}) => (
  <Layout title="Home Page">
    <div className="global-header-logo-container">
      <div className="logo-container">
        <Image src={avatar} alt="Logo" style={{ height: 100, width: 100 }} />
      </div>
    </div>
    <h1>Hi, I'm {author.shortName}.</h1>
    <p>{author.label}</p>
  </Layout>
);

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author {
          shortName
          label
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
`;

export default HomePage;
