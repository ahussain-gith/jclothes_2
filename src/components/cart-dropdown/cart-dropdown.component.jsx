import React from "react";
import {connect} from 'react-redux'
import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import CollectionItem from '../collections/collection-item.component'


const CartDropdown = ({cartItems}) => (
  <div className="cart-dropdown">
    <div className="cart-items" >
      {
        cartItems.map(item => (<CollectionItem item={item}/>))
        }
    </div>

    <CustomButton>Check Out</CustomButton>
  </div>
);
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});
export default connect(mapStateToProps) (CartDropdown);
