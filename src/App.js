import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Grid } from "react-bootstrap";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Signup from "./components/Signup";

class App extends Component {
  render() {
    return (
      <Router>
        <Grid>
          <Route exact path="/" component={Navbar} />
          <Route exact path="/signup" component={Signup} />
        </Grid>
      </Router>
    );
  }
}

export default App;
