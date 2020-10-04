import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

const HomePage = ({ data: { site: { siteMetadata: { author } } } }) => (
  <Layout title="Home Page">
    <h1>Hi, I'm {author.shortName}.</h1>
    <p>{author.summary}</p>
  </Layout>
);

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author {
          shortName
          summary
        }
      }
    }
  }
`;

export default HomePage;
