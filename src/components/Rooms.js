import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import Room from "./Room";
import { fetchRooms } from "../actions";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";

class Rooms extends React.Component {
  componentDidMount() {
    this.props.fetchRooms();
  }

  renderRooms = () => {
    const { rooms } = this.props;

    return rooms.map(room => <Room {...room} key={room.uid} />);
  };

  render() {
    if (this.props.loading) {
      return <p>Loading...</p>;
    } else if (this.props.rooms.length === 0) {
      return (
        <Grid container justify="center">
          <h2>Start by Addin a new Room by clicking on the Plus Symbol</h2>
        </Grid>
      );
    }

    return (
      <Grid container style={{ flexGrow: 1, marginTop: 30 }}>
        <Grid item lg={12}>
          <List>{this.renderRooms()}</List>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = ({ rooms: { rooms, loading } }) => {
  const roomsArray = _.map(rooms, (value, uid) => {
    return { ...value, uid };
  });
  return {
    rooms: roomsArray,
    loading
  };
};

export default connect(
  mapStateToProps,
  { fetchRooms }
)(Rooms);
