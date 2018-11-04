import React from "react";
import _ from "lodash";
import "react-widgets/dist/css/react-widgets.css";

import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import DropdownList from "react-widgets/lib/DropdownList";
import Editor from "draft-js-plugins-editor";
import createDndFileUploadPlugin from "@mikeljames/draft-js-drag-n-drop-upload-plugin";
import createImagePlugin from "draft-js-image-plugin";
import { fetchRooms } from "../actions";

import {
  updateEditorState,
  fetchEditorState,
  subscribeAutosave,
  unsubscribeAutosave
} from "../actions";

const mockUpload = () => {
  console.log(test);
};

const imagePlugin = createImagePlugin();

const dndFileUploadPlugin = createDndFileUploadPlugin({
  handleUpload: mockUpload,
  addImage: imagePlugin.addImage
});

const plugins = [dndFileUploadPlugin, imagePlugin];

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
      <div onClick={this.focus} className="editor">
        <form onSubmit={this.props.handleSubmit}>
          <label>Chose a room</label>
          <Field
            name="room"
            component={this.renderDropdownList}
            data={this.props.rooms}
            valueField="value"
            textField="room"
          />
        </form>

        <Editor
          onChange={this.props.updateEditorState}
          editorState={this.props.editorState}
          plugins={plugins}
        />
        <button onClick={this.props.fetchEditorState}>Fetch State</button>
        <button onClick={this.props.subscribeAutosave}>
          Subscribe to Autosave
        </button>
        <button onClick={this.props.unsubscribeAutosave}>
          Unsubscribe to Autosave
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ editor: { editorState }, rooms }) => {
  const roomsArray = _.map(rooms, room => {
    return [room.title];
  });
  return { editorState, rooms: roomsArray };
};

const connectedSignup = connect(
  mapStateToProps,
  {
    updateEditorState,
    fetchEditorState,
    subscribeAutosave,
    unsubscribeAutosave,
    fetchRooms
  }
)(NewPost);

export default reduxForm({
  form: "newpost"
})(connectedSignup);
