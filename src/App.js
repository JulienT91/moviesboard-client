import React from "react";
import { BrowserRouter as Router, 
                          Switch, 
                          Route } from "react-router-dom";
import './App.scss';
import Home from "./view/Home";
import NavBar from "./component/NavBar";
import Details from "./view/Details";


function App() {
  return (
  <Router basename="/">
    <NavBar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details/:id" exact component={Details} />
        </Switch>
  </Router>
  );
}

export default App;
