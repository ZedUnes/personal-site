import React from "react";
import { graphql } from "gatsby";

import Image from "../components/Image";
import Layout from "../components/Layout";

const AboutPage = ({
  data: {
    site: {
      siteMetadata: {
        author: { name, summary },
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
      <div className="bio">
        <div className="bio-image-container">
          <Image
            src={avatar}
            alt={name}
            style={{ borderRadius: "50%" }}
          />
        </div>
        {summary.split("\t").map(s => (
          <p>{s}</p>
        ))}
      </div>
    </div>
  </Layout>
);

export default AboutPage;

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 200, height: 200, quality: 100) {
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
