import React from "react";
import { Link } from "gatsby";

const Header = () => (
  <header className="global-header">
    <div className="global-header-links">
      <Link to="/">Home</Link>
      {/* <Link to="/blog">Blog</Link> */}
      <Link to="/about">About</Link>
      {/* <Link to="/work">Work</Link> */}
    </div>
  </header>
);

export default Header;
