import React from "react";

import SocialLink from "./SocialLink";
import styles from "./footer.module.scss";

const platformLink = (platform, username) =>
  `https://${platform}.com${platform === "linkedin" ? "/in" : ""}/${username}`;

const Footer = ({ social }) => (
  <footer className={styles.container}>
    <div className={styles.icons}>
      {Object.entries(social).map(([platform, username]) => (
        <SocialLink
          key={`social-icon-${platform}`}
          className={styles.icon}
          name={platform}
          link={platformLink(platform, username)}
        />
      ))}
        <SocialLink
          key="social-icon-rss"
          className={styles.icon}
          name="rss"
          link="/atom.xml"
        />
    </div>
    <div className={styles.copyright}>
      <p>
        © 2020 Zied Younes.
      </p>
    </div>
  </footer>
);

export default Footer;
