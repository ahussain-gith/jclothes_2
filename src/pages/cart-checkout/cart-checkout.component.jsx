import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartItemsTotal
} from "../../reduxstore/cart/cart.selectors";
import StripeCheckoutButton from "../../components/payment-integration/stripe-button.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./cart-checkout.styles.scss";

const CartCheckoutPage = ({ cartItems, totalPrice, dispatch }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem cartItem={cartItem} key={cartItem.id} />
    ))}
    <div className="total">TOTAL = ₹ {totalPrice} </div>
    <div className="test-warning">
      *Please use the following test credit card for payment*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>

    <StripeCheckoutButton price={totalPrice} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsTotal
});
export default connect(mapStateToProps)(CartCheckoutPage);
