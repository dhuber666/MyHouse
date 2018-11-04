import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Button, OverlayTrigger, Popover, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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

  popoverTop = () => (
    <Popover id="popover-positioned-top">
      <Row>
        {/* TODO: Create components for adding new room and post for room */}
        <Col md={6} xs={6}>
          <strong>
            <Link to="/newroom">Room</Link>
          </strong>
        </Col>
        <Col md={6} xs={6}>
          <strong>
            <Link to="/newpost">Post</Link>
          </strong>
        </Col>
      </Row>
    </Popover>
  );

  render() {
    if (this.props.rooms.length === 0) {
      return <p>Loading...</p>;
    }

    return (
      <div style={{ marginTop: 50 }}>
        {/* TODO: implement AddRoom Component */}

        <OverlayTrigger
          trigger="focus"
          placement="top"
          overlay={this.popoverTop()}
        >
          <Button>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </OverlayTrigger>

        {this.renderRooms()}
      </div>
    );
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
