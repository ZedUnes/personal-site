import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

const AboutPage = () => (
  <Layout title="About">
    Mechatronics Engineer and Senior Web Developer.
  </Layout>
);

export default AboutPage;

// import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
// import Image from "gatsby-image";

// const Bio = () => {
//   const {
//     site: { siteMetadata: { author: { name, summary } } },
//     avatar: { childImageSharp: { fixed: avatar } },
//   } = useStaticQuery(graphql`
//     query BioQuery {
//       avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
//         childImageSharp {
//           fixed(width: 50, height: 50, quality: 95) {
//             ...GatsbyImageSharpFixed
//           }
//         }
//       }
//       site { siteMetadata { author { name summary } } }
//     }
//   `);

//   return (
//     <div className="bio">
//       <Image
//         fixed={avatar}
//         alt={name || ``}
//         className="bio-avatar"
//         imgStyle={{ borderRadius: `50%` }}
//       />
//       <p>
//         <strong>{name}</strong>,
//       </p>
//     </div>
//   );
// };

// export default Bio;

