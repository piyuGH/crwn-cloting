import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.components";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

/*

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>HATS PAGE:{props.match.params.id}</h1>
    </div>
  );
};

*/
