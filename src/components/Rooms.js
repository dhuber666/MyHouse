import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Button, OverlayTrigger, Popover, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import Room from "./Room";



class Rooms extends React.Component {

  renderRooms = () => {
    const { rooms } = this.props;

    return rooms.map(room => <Room {...room} key={room.uid} />)
  }

  popoverTop = () => (
    <Popover id="popover-positioned-top">
      <Row>
        {/* TODO: Create components for adding new room and post for room */}
        <Col md={6} xs={6}>
          <strong>Room</strong>
        </Col>
        <Col md={6} xs={6}>
          <strong>Post</strong>
        </Col>
      </Row>
    </Popover>
  )

  render() {


    return (
      <div style={{ marginTop: 50 }}>
        {/* TODO: implement AddRoom Component */}

        <OverlayTrigger trigger="focus" placement="top" overlay={this.popoverTop()}>
          <Button><FontAwesomeIcon icon={faPlus} /></Button>
        </OverlayTrigger>



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
