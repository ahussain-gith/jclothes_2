import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import CollectionItems from "./components/collections/collections.component";
import Authentication from "./pages/authentication/authentication.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./firebase/firebase.util";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/hats" component={CollectionItems} />
          <Route exact path="/authenticate" component={Authentication} />
        </Switch>
      </div>
    );
  }
}

export default App;
