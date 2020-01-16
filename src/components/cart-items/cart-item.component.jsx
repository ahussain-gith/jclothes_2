import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ item: { id, imageUrl, name, price, quantity } }) => (
  <div className="cart-item" key={id}>
    <img src={imageUrl} alt="Item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} X ₹ {price}
      </span>
    </div>
  </div>
);

export default CartItem;
