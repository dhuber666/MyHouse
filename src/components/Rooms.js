import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import Room from "./Room";
import { fetchRooms } from "../actions";

class Rooms extends React.Component {
  componentDidMount() {
    this.props.fetchRooms();
  }

  renderRooms = () => {
    const { rooms } = this.props;

    return rooms.map(room => <Room {...room} key={room.uid} />);
  };

  render() {
    if (this.props.rooms.length === 0) {
      return <p>Loading...</p>;
    }

    return <div style={{ marginTop: 50 }}>{this.renderRooms()}</div>;
  }
}

const mapStateToProps = ({ rooms, auth }) => {
  const roomsArray = _.map(rooms, (value, uid) => {
    return { ...value, uid };
  });
  return {
    rooms: roomsArray,
    loading: auth.loading
  };
};

export default connect(
  mapStateToProps,
  { fetchRooms }
)(Rooms);
