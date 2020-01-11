import React from "react";
import "./homepage.styles.scss";
//import Collections from "../../components/collections/collections.component";
import Directory from "../../components/directory/directory.component";
import Header from "../../components/header/header.component";

const HomePage = () => (
  <div className="homepage">
    <Header />
    <Directory />
  </div>
);
export default HomePage;
