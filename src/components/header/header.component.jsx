import React from "react";

import "./header.styles.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.util";

import { connect } from "react-redux";
import CartIcon from "../icon/cart-icon/cart.component";

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
      <CartIcon />
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});
export default connect(mapStateToProps)(Header);
