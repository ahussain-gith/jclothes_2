import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <div className="logo">
      <Link to="/">LOGO</Link>
    </div>
    <div className="options">
      <div className="option">
        <Link to="/hats">Shop</Link>
      </div>
      <div className="option">Contact</div>
      <div className="option"><Link to="/authenticate" >Sign In</Link></div>
    </div>
  </div>
);

export default Header;
