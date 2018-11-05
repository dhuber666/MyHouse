import React from "react";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { logoutUser } from "../actions";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';



const styles = {
  root: {
    flexGrow: 1,
    marginBottom: 50
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};



const Navbar = props => {
  const { classes } = props;

  const renderButtons = () => {

    if (props.loading) {
      return ''
    }
    if (props.user) {
      return (

        <Button><Link to="/" onClick={props.logoutUser} style={{ color: 'white' }}>Logout </Link></Button>

      )
    }

    return (
      [
        <Button color="inherit"><Link to="/signup" style={{ color: 'white' }}>Sign Up</Link></Button>,
        <Button color="inherit"><Link to="/signin" style={{ color: 'white' }}>Sign In</Link></Button>]

    )
  }

  return (
    <Grid container>
      <Grid item lg={12} xs={12}>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>

              <Typography variant="h6" color="inherit" className={classes.grow}>
                <Link to="/" style={{ color: 'white' }}>Home</Link>
              </Typography>
              {renderButtons()}
            </Toolbar>
          </AppBar>
        </div>
      </Grid>

    </Grid>



  );
};



const mapStateToProps = state => ({ user: state.auth.user, loading: state.auth.loading });

export default withStyles(styles)(connect(
  mapStateToProps,
  { logoutUser }
)(Navbar));
