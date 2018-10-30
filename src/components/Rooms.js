import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import Room from "./Room";



class Rooms extends React.Component {

  renderRooms = () => {
    const { rooms } = this.props;

    return rooms.map(room => <Room {...room} key={room.uid} />)
  }

  render() {


    return (
      <div style={{ marginTop: 50 }}>
        {/* TODO: implement AddRoom Component */}
        <Button><FontAwesomeIcon icon={faPlus} /></Button>

        {this.renderRooms()}
      </div>
    );
  }
}

const mapStateToProps = ({ rooms }) => {
  const roomsArray = _.map(rooms, (value, uid) => {
    return { ...value, uid };
  });
  return {
    rooms: roomsArray
  };
};

export default connect(mapStateToProps)(Rooms);
