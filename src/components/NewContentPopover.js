import {
  Row,
  Col,
  OverlayTrigger,
  Button,
  Popover,
  ButtonToolbar
} from "react-bootstrap";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NewContentPopover = () => (
  <div className="new-content-popover">
    <OverlayTrigger
      style={{ padding: 20 }}
      trigger="focus"
      placement="top"
      overlay={popoverTop()}
    >
      <Button>
        <FontAwesomeIcon size="4x" icon={faPlus} />
      </Button>
    </OverlayTrigger>
  </div>
);

const popoverTop = () => (
  <ButtonToolbar>
    <Popover id="popover-positioned-top">
      <Row>
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
  </ButtonToolbar>
);

export default NewContentPopover;
