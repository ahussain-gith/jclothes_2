import React from "react";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import CartCheckoutPage from "./pages/cart-checkout/cart-checkout.component";
import ShopPage from "./pages/shop/shop.component";

import Header from "./components/header/header.component";
import CollectionItems from "./components/collections/collections.component";
import Authentication from "./pages/authentication/authentication.component";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";

import { connect } from "react-redux";
import { setCurrentUser } from "./reduxstore/user/user.actions";
import { selectCurrentUser } from "./reduxstore/user/user.selectors";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <h1>HomePage</h1>} />
          <Route exact path="/shop" component={HomePage} />
          <Route exact path="/shop/:collectionId" component={ShopPage} />
          <Route exact path="/collections" component={CollectionItems} />
          <Route
            exact
            path="/authenticate"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <Authentication />
            }
          />
          <Route exact path="/checkout" component={CartCheckoutPage} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
