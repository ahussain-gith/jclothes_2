import React from "react";

import "./header.styles.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.util";

import { connect } from "react-redux";
import CartIcon from "../icon/cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";

import { selectCartHidden } from "../../reduxstore/cart/cart.selectors";
import { selectCurrentUser } from "../../reduxstore/user/user.selectors";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <div className="logo">
      <Link to="/">LOGO</Link>
    </div>
    <div className="options">
      <div className="option">
        <Link to="/shop">Shop</Link>
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
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);
