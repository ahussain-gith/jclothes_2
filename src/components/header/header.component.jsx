import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.util";

const Header = ({ currentUser }) => (
  <div className="header">
    <div className="logo">
      <Link to="/">LOGO</Link>
    </div>
    <div className="options">
      <div className="option">
        <Link to="/hats">Shop</Link>
      </div>
      <div className="option">Contact</div>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link className="option" to="/authenticate">
          Sign In
        </Link>
      )}
    </div>
  </div>
);

export default Header;
