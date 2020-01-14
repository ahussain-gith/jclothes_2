import React from "react";

import "./collections.styles.scss";
import COLLECTIONS_DATA from '../../data/collections-data'
import CollectionItems from "./collection-items.component";

class Collections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: props.collections
    };
  }

  render() {
    var { collections } = this.state;
    if(!collections){
      collections = COLLECTIONS_DATA;
    }
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
