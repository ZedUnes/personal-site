import React from "react";

const SocialLink = ({ name, link, className }) => (
  <a className={className} href={link}>
    <img src={`/${name}.svg`} />
  </a>
);

export default SocialLink;
