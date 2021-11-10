import React from "react";
import { BrowserRouter as Router, 
                          Switch, 
                          Route } from "react-router-dom";
import './App.scss';
import Home from "./view/Home";
import NavBar from "./component/NavBar";
import Details from "./view/Details";
import Add from "./view/Add";


function App() {
  return (
  <Router basename="/">
    <NavBar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details/:id" exact component={Details} />
          <Route path="/add" exact component={Add} />
        </Switch>
  </Router>
  );
}

export default App;
