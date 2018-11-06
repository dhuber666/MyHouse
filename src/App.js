import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";

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
    const { classes } = this.props;

    return (
      <Router>
        <Grid container justify="center">
          <Grid
            container
            className={classes.demo}
            justify="space-between"
            style={{ position: "relative" }}
          >
            <Navbar />
            {this.props.user ? <Route exact path="/" component={Rooms} /> : ""}

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
            {this.props.user && <NewContentPopover rooms={this.props.rooms} />}
          </Grid>
        </Grid>
      </Router>
    );
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  demo: {
    [theme.breakpoints.up("lg")]: {
      width: 1170
    }
  }
});

const mapStateToProps = ({ auth: { user }, rooms: { rooms } }) => ({
  user,
  rooms
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { initAuthWithFirebase }
  )(App)
);
