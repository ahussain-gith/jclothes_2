import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./collections.styles.scss";
import CollectionItems from "./collection-items.component";
import { selectCollections } from "../../reduxstore/shop-data/shop-data.selectors";

const Collections = ({ collections }) => {
  return (
    <div>
      {collections.map(collection => (
        <div key={collection.id} className="collections">
          <div className="collection-title">
            <div className="title">{collection.title}</div>
            <div className="more"> ...More</div>
          </div>
          <CollectionItems collection={collection.items} />
        </div>
      ))
      }
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});
export default connect(mapStateToProps)(Collections);
