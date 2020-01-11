import React, { Component } from "react";
import './collection-items.styles.scss';
import CollectionItem from './collection-item.component';

export default class CollectionItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: props.collection
    };
  }

  render() {

    const {collection} =this.state;
    return (
      <div className="collection-items" key={collection.id}>
        {collection
        .filter((item,idx)=> idx < 4)
        .map(item =>(
          <CollectionItem key={item.id} item={item}/>
          ))}
        </div>
    );
  }
}
