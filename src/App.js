import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import { connect } from "react-redux";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Rooms from "./components/Rooms";
import NewRoom from "./components/NewRoom";
import NewPost from "./components/NewPost";
import NewContentPopover from "./components/NewContentPopover";
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
          {this.props.user ? <Route exact path="/" component={Rooms} /> : ""}
          {/* TODO: Make protected routes with HOC */}

          <Route
            path="/newroom"
            render={props =>
              this.props.user ? <NewRoom {...props} /> : <Redirect to="/" />
            }
          />
          <Route
            path="/newpost"
            render={props =>
              this.props.user ? <NewPost {...props} /> : <Redirect to="/" />
            }
          />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
        </Grid>
      </Router>
    );
  }
}

const mapStateToProps = ({ auth: { user } }) => ({ user });

export default connect(
  mapStateToProps,
  { initAuthWithFirebase }
)(App);
