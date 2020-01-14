import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import CollectionItems from "./components/collections/collections.component";
import Authentication from './pages/authentication/authentication.component';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={CollectionItems} />
        <Route exact path='/authenticate' component={Authentication}/>
      </Switch>
    </div>
  );
}

export default App;
