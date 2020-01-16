import React from "react";
import { connect } from "react-redux";
import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-items/cart-item.component";
import { selectCartItems } from "../../reduxstore/cart/cart.selectors";

const CartDropdown = ({ cartItems }) => {
 
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <CustomButton>Check Out</CustomButton>
    </div>
  );
};
const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});
export default connect(mapStateToProps)(CartDropdown);
