import React from "react";
import { graphql } from "gatsby";

import Image from "../components/Image";
import Layout from "../components/Layout";

const AboutPage = ({
  data: {
    site: {
      siteMetadata: {
        author: { name },
      },
    },
    avatar: {
      childImageSharp: { fixed: avatar },
    },
  },
}) => (
  <Layout title="About">
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        src={avatar}
        alt={name || ``}
        style={{ width: "100px", height: "100px", borderRadius: `50%` }}
      />
      <p>
        <strong>{name}</strong>,
      </p>
    </div>
  </Layout>
);

export default AboutPage;

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50, quality: 95) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author {
          name
          summary
        }
      }
    }
  }
`;
