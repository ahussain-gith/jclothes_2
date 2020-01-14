import React from "react";

import COLLECTIONS_DATA from "../../data/collections-data";

import Collections from "../../components/collections/collections.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: COLLECTIONS_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        <Collections collections={collections} />
      </div>
    );
  }
}

export default ShopPage;
