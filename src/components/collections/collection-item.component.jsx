import React, { Component } from "react";
import { connect } from "react-redux";

import "./collection-item.styles.scss";
import CustomButton from "./../custom-button/custom-button.component";
import { addItem } from "../../reduxstore/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { id, imageUrl, name, price } = item;
  return (
    <div className="collection-item " key={id}>
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="shopItem">Jameel Cloths</div>
      </div>
      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">₹ {price}</div>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
