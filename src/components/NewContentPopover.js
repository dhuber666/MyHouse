import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import Icon from '@material-ui/core/Icon';
import Drawer from '@material-ui/core/Drawer';

import Grid from '@material-ui/core/Grid'



const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  popover: {
    padding: theme.spacing.unit * 2
  },
  list: {
    height: '100%'
  },
  fullList: {
    // width: 'auto',
    height: '50%'
  },
});




class NewContentPopover extends React.Component {

  state = {
    drawer: false
  };

  toggleDrawer = (open) => () => {
    this.setState({
      drawer: open
    });
  };


  handleClick = event => {
    this.toggleDrawer(true)
  };





  render() {
    const { classes } = this.props;


    const fullList = (

      <Grid container style={{}}>
        <Grid item lg={6} xs={6} style={{ backgroundColor: "#eee" }}>
          <Link to="/newroom"><h2 style={{ textAlign: "center" }}>New Room</h2></Link>
        </Grid>
        <Grid item lg={6} xs={6}>
          <Link to="/newpost"><h2 style={{ textAlign: "center" }}>New Post</h2></Link>
        </Grid>
      </Grid>

    );

    return (
      <div>
        <Button

          variant="fab"
          onClick={this.toggleDrawer(true)}
          color="primary"
          style={{ right: 50, bottom: 50, position: 'absolute' }}

          className={classes.button}
        >
          <Icon>add_icon</Icon>
        </Button>
        <Drawer anchor="top" open={this.state.drawer} onClose={this.toggleDrawer(false)}  >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
            classes={{ paper: classes.fullList }}
          >
            {fullList}
          </div>
        </Drawer>

      </div>
    );
  }
}




export default withStyles(styles)(NewContentPopover);
