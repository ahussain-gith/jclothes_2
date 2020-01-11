import React, { Component } from "react";
import "./collection-item.styles.scss";

export default class CollectionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item
    };
  }
  render() {
    const { item } = this.state;
    return (
      <div className="collection-item " key={item.id}>
        <div
          className="background-image"
          style={{ backgroundImage: "url(" + item.imageUrl + ")" }}
        >
        <div className="shopItem">Shop</div>
        </div>
        <div className="footer">
          <div className="name">{item.name}</div>
          <div className="price">₹ {item.price}</div>
        </div>
      </div>
    );
  }
}
