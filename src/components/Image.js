import React from "react";
import GatsbyImage from "gatsby-image";

const Image = ({ src, style, alt }) => (
  <GatsbyImage fixed={src} alt={alt} imageStyle={style} />
);

export default Image;
