import React from "react";
import { BrowserRouter as Router, 
                          Switch, 
                          Route } from "react-router-dom";
import './App.css';
import Home from "./view/Home";
import NavBar from "./component/NavBar";


function App() {
  return (
  <Router basename="/">
    <NavBar/>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
  </Router>
  );
}

export default App;
