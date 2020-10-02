import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const Bio = () => {
  const {
    site: {
      siteMetadata: {
        author: { name, summary },
        social: { twitter },
      },
    },
    avatar: {
      childImageSharp: { fixed: avatar },
    },
  } = useStaticQuery(graphql`
    query BioQuery {
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
          social {
            twitter
          }
        }
      }
    }
  `);

  return (
    <div className="bio">
      <Image
        fixed={avatar}
        alt={name || ``}
        className="bio-avatar"
        imgStyle={{ borderRadius: `50%` }}
      />
      <p>
        {" "}
        Written by <strong>{name}</strong>, a {summary || null}{" "}
      </p>
    </div>
  );
};

export default Bio;
