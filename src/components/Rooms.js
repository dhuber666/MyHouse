import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

// what do we need for this component?

/*
    //TODO: 
    We need to render all the different rooms that are available as 
    "Headers for the list"
    Every Room has a list of "posts" that can include:
    Pictures, Text with markdown, todo's, etc. 
    Every Room sould render his own list of posts

*/

class Rooms extends React.Component {
  render() {
    const { rooms } = this.props;

    return (
      <div>
        <h2>An example Room</h2>
        {JSON.stringify(rooms)}
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
