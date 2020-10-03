import React from "react";
import { Link } from "gatsby";

import Image from "./Image";

const Header = ({ avatar }) => (
  <header className="global-header">
    <div className="global-header-links">
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
      <Link to="/work">Work</Link>
    </div>
    <div className="global-header-logo-container">
      <div className="logo-container">
        <Image src={avatar} alt="Logo" style={{ height: 100, width: 100 }} />
      </div>
    </div>
  </header>
);

export default Header;
