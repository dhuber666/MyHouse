import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Grid } from "react-bootstrap";
import { connect } from "react-redux";
import firebase from "./config/Firebase";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Rooms from "./components/Rooms";
import { initAuthWithFirebase } from "./actions";

class App extends Component {
  // create hook to firebase that watches for state changes

  componentWillMount() {
    this.props.initAuthWithFirebase();
  }

  render() {
    return (
      <Router>
        <Grid>
          <Navbar />
          <Route exact path="/" component={Rooms} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
        </Grid>
      </Router>
    );
  }
}

export default connect(
  null,
  { initAuthWithFirebase }
)(App);
