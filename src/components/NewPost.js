import React from "react";
import _ from "lodash";
import "react-widgets/dist/css/react-widgets.css";

import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import DropdownList from "react-widgets/lib/DropdownList";

import { fetchRooms } from "../actions";

import Editor from "./Editor";

class NewPost extends React.Component {
  componentWillMount() {
    this.props.fetchRooms();
  }

  handleSubmit = ({ title }) => {
    this.props.addNewRoom(title);
    this.props.history.push("/");
  };

  renderDropdownList = ({ input, data, valueField, textField }) => (
    <DropdownList
      {...input}
      data={data}
      valueField={valueField}
      textField={textField}
      onChange={input.onChange}
    />
  );

  render() {
    // Style this bad boy and add editor features

    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <label>Chose a room you want to save your post into:</label>
          <Field
            name="room"
            component={this.renderDropdownList}
            data={this.props.rooms}
            valueField="value"
            textField="room"
          />
        </form>
        <Editor />
      </div>
    );
  }
}

const mapStateToProps = ({ rooms }) => {
  const roomsArray = _.map(rooms, room => {
    return [room.title];
  });
  return { rooms: roomsArray };
};

const connectedSignup = connect(
  mapStateToProps,
  {
    fetchRooms
  }
)(NewPost);

export default reduxForm({
  form: "newpost"
})(connectedSignup);
