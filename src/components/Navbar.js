import React from "react";
import { Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <Row className="show-grid" style={styles.container}>
      <Col md={2} xs={2}>
        My Rooms
      </Col>
      <Col md={2} xs={2}>
        Todos
      </Col>
      <Col md={2} xs={2}>
        Images
      </Col>
      <Col md={3} xs={3} style={styles.search} align="center">
        <Col md={2} xs={2}>
          <FontAwesomeIcon icon={faSearch} />
        </Col>
        <Col md={10} xs={10}>
          <input
            placeholder="Search"
            style={{ border: "none", outline: "none" }}
          />
        </Col>
      </Col>
      <Col md={1} xs={1} align="center" className="pull-right">
        <Link to="/signup">Sign Up</Link>
        {/* TODO: Add conditional Signup or Logout */}
      </Col>
    </Row>
  );
};

const styles = {
  container: {
    paddingTop: 20,
    paddingBottom: 20
  },
  search: {
    border: "1px solid grey",
    borderRadius: 12
  }
};

export default Navbar;
