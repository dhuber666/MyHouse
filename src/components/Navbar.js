import React from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { logoutUser } from "../actions";

const Navbar = props => {
  return (
    <Row className="show-grid" style={styles.container}>
      <Col md={2} xs={2}>
        <Link to="/">Home</Link>
      </Col>

      <Col md={3} xs={3} align="center" className="pull-right">
        {props.user ? (
          <Link to="/" onClick={props.logoutUser}>
            Logout
          </Link>
        ) : (
          <Row>
            <Col md={5} xs={5}>
              <Link to="/signup">Sign Up</Link>
            </Col>
            <Col md={2} xs={2}>
              /
            </Col>
            <Col md={5} xs={5}>
              <Link to="/signin">Sign In</Link>
            </Col>
          </Row>
        )}
      </Col>
    </Row>
  );
};

const styles = {
  container: {
    paddingTop: 20,
    paddingBottom: 20
  }
};

const mapStateToProps = state => ({ user: state.auth.user });

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
