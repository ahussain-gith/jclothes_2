import React from "react";
import COLLECTIONS_DATA from "../../data/collections-data";
import "./collections.styles.scss";

import CollectionItems from "./collection-items.component";

class Collections extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: COLLECTIONS_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(collection => (
          <div key={collection.id} className="collections">
            <div className="collection-title">
              <div className="title" >{collection.title}</div>
              <div className="more"> ...More</div>
            </div>
            <CollectionItems collection={collection.items} />
          </div>
        ))}
      </div>
    );
  }
}
export default Collections;
