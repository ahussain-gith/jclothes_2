import React from "react";
import { connect } from "react-redux";

import "./shop.styles.scss";

import { selectCollection } from "../../reduxstore/shop-data/shop-data.selectors";
import CollectionItem from "../../components/collections/collection-item.component";

const ShopPage = ({ collection, match }) => {
  console.log(match.params);
  const { title, items } = collection;
  return (
    <div className="shop-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(ShopPage);
