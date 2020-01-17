import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-items/cart-item.component";
import { selectCartItems } from "../../reduxstore/cart/cart.selectors";
import { toggleCartHidden } from "../../reduxstore/cart/cart.actions";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Cart is Empty</span>
        )}
      </div>

      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        Check Out
      </CustomButton>
    </div>
  );
};
const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
